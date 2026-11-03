import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { devices } from '@playwright/test';

export const QA = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const ROOT = path.dirname(QA);
export const SECTIONS = ['hero', 'noise', 'signal', 'talk', 'why', 'month', 'plans', 'control', 'free', 'faqs', 'game'];
export const LANGUAGES = { ru: '/', en: '/en/', ar: '/ar/' };
export const CATEGORIES = ['wake', 'smoothness', 'memory', 'visibility', 'layout', 'interaction', 'stress', 'accessibility', 'console-network', 'visual'];
export const PROFILES = {
  'desktop-1440': { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
  'desktop-1280': { viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 },
  'tablet-1024': { viewport: { width: 1024, height: 768 }, deviceScaleFactor: 1 },
  'iphone-13': { ...devices['iPhone 13'], viewport: { width: 390, height: 844 } },
  'pixel-7': { ...devices['Pixel 7'] },
  'android-low': { ...devices['Pixel 7'], viewport: { width: 360, height: 740 }, screen: { width: 360, height: 740 }, deviceScaleFactor: 1 },
};
export function matrix(browsers = ['chromium', 'webkit', 'firefox']) {
  return browsers.flatMap(browser => Object.keys(PROFILES).flatMap(profile => Object.keys(LANGUAGES).map(lang => ({
    browser, profile, lang, id: `${browser}--${profile}--${lang}`,
  }))));
}
export function contextOptions(cell) {
  const { defaultBrowserType, ...options } = PROFILES[cell.profile];
  // Firefox has touch emulation but Playwright does not implement isMobile there.
  if (cell.browser === 'firefox') delete options.isMobile;
  return { ...options, locale: cell.lang === 'ar' ? 'ar-EG' : cell.lang === 'ru' ? 'ru-RU' : 'en-US', timezoneId: 'UTC', serviceWorkers: 'block' };
}
export const isPhone = cell => PROFILES[cell.profile].viewport.width < 500;
export const fpsFloor = cell => cell.profile === 'android-low' ? 30 : 45;
export const FAST_3G = { offline: false, latency: 150, downloadThroughput: 1.6 * 1024 * 1024 / 8, uploadThroughput: 750 * 1024 / 8, connectionType: 'cellular3g' };
export function frameStats(frames) {
  if (!frames.length) throw new Error('No animation frames recorded');
  const fps = frames.map(ms => 1000 / ms).sort((a, b) => a - b);
  return { frames: frames.length, averageFps: 1000 * frames.length / frames.reduce((a, b) => a + b, 0), p5Fps: fps[Math.floor((fps.length - 1) * 0.05)], over50ms: frames.filter(ms => ms > 50).length, maxFrameMs: Math.max(...frames) };
}
