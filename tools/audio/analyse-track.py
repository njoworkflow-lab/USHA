# Analyses the soundtrack once and writes the visual timeline the site plays
# in sync with the music (audio/usha-track.map.json, read by
# tools/seo/enhance/sound.js).
#
#   ffmpeg -i audio/usha-track.webm -ac 1 -ar 22050 -f f32le /tmp/track.f32
#   python3 tools/audio/analyse-track.py /tmp/track.f32 audio/usha-track.map.json
#
# Output:
#   fps      frames per second of the envelopes
#   env      base64 of uint8 frames [bass, mid, high, energy], 0-255 each
#              bass 30-150 Hz, mid 150-2,000 Hz, high 2-10 kHz (log energy,
#              scaled between the track's 5th and 99th percentile)
#              energy: the loudness of the section (smoothed over ~3 s)
#   kick, snare, hat   hits as [time in ms, strength 0-99] pairs, flattened
#   beats    the beat grid in ms; downbeats every 4th from "down"
#   bpm      the tempo
import base64, json, sys
import numpy as np

SR, HOP, N = 22050, 441, 2048          # 50 frames a second
src, out = sys.argv[1], sys.argv[2]
x = np.fromfile(src, dtype=np.float32)
frames = 1 + (len(x) - N) // HOP
win = np.hanning(N).astype(np.float32)
idx = np.arange(N)[None, :] + HOP * np.arange(frames)[:, None]
spec = np.abs(np.fft.rfft(x[idx] * win, axis=1)) ** 2
freqs = np.fft.rfftfreq(N, 1 / SR)

def band(lo, hi):
    return np.log1p(spec[:, (freqs >= lo) & (freqs < hi)].sum(axis=1) * 1e3)

def scale(v, lo=5, hi=99):
    a, b = np.percentile(v, lo), np.percentile(v, hi)
    return np.clip((v - a) / (b - a + 1e-9), 0, 1)

def smooth(v, n):
    k = np.hanning(n); k /= k.sum()
    return np.convolve(v, k, mode='same')

bass, mid, high = band(30, 150), band(150, 2000), band(2000, 10000)
energy = scale(smooth(np.log1p((spec.sum(axis=1)) * 1e3), 150))

# hits: spectral flux per band, rectified, then peaks above a moving threshold
def flux(lo, hi):
    s = np.log1p(spec[:, (freqs >= lo) & (freqs < hi)] * 1e3)
    d = np.diff(s, axis=0, prepend=s[:1]); d[d < 0] = 0
    return d.sum(axis=1)

def hits(f, min_gap, k=1.35, floor=0.06):
    f = f / (np.percentile(f, 99.5) + 1e-9)
    thr = smooth(f, 40) * k + floor
    out = []
    last = -10**9
    for i in range(1, len(f) - 1):
        if f[i] > thr[i] and f[i] >= f[i - 1] and f[i] >= f[i + 1] and i - last >= min_gap:
            out.append((int(round(i * HOP / SR * 1000)), int(min(99, f[i] * 70))))
            last = i
    return out

kick = hits(flux(30, 150), 10, 1.7, 0.2)   # real kicks only: at most 5 a second
snare = hits(flux(180, 2500), 9, 1.5, 0.12)
hat = hits(flux(5000, 11000), 5)

# tempo from the kick+snare onset envelope, then a beat grid aligned to it
onset = scale(flux(30, 2500), 1, 99.5)
ac = np.correlate(onset - onset.mean(), onset - onset.mean(), mode='full')[len(onset) - 1:]
lags = np.arange(len(ac)); fps = SR / HOP
lo, hi = int(fps * 60 / 180), int(fps * 60 / 70)
lag = lo + int(np.argmax(ac[lo:hi]))
bpm = 60 * fps / lag
best, phase = -1, 0
for p in range(lag):
    s = onset[p::lag].sum()
    if s > best: best, phase = s, p
beats = [int(round((phase + i * lag) * HOP / SR * 1000)) for i in range((frames - phase) // lag)]
# downbeat: the offset (0-3) whose beats carry the most bass
bass_s = scale(bass)
down = max(range(4), key=lambda o: sum(bass_s[int(b * SR / HOP / 1000)] for b in beats[o::4] if int(b * SR / HOP / 1000) < frames))

env = np.stack([scale(bass), scale(mid), scale(high), energy], axis=1)
env = (env * 255).round().astype(np.uint8)
data = {
    'fps': fps, 'frames': int(frames), 'bpm': round(bpm, 2), 'down': down,
    'env': base64.b64encode(env.tobytes()).decode(),
    'kick': [v for h in kick for v in h], 'snare': [v for h in snare for v in h], 'hat': [v for h in hat for v in h],
    'beats': beats,
}
json.dump(data, open(out, 'w'), separators=(',', ':'))
print(f'{frames} frames, {bpm:.1f} bpm, kicks {len(kick)}, snares {len(snare)}, hats {len(hat)}, beats {len(beats)}')
