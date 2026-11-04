// "Her mind": the centrepiece layer of section 02 (#signal). Market signals
// stream in, converge into the real USHA at her Signal position, she thinks,
// and the first live finding is written out of her with its money arithmetic
// and a stop rule. Runtime: mind.js and mind.css. This file holds the copy (one
// object per language, so the final copy can be swapped in) and the small
// patch that lets the layer read USHA's on-screen position and drive her glow.

export const MIND = {
  en: {
    rail: ['Signals read', 'Causes found', 'Decision'],
    causes: ['Rank fell: price gap, not ad spend', 'Their cut: 2 products, not the range', 'Their stock lasts about 3 weeks'],
    money: {
      h: 'The arithmetic',
      rows: [['Match their price', '1,900 × AED 23', '−AED 43,700'], ['Bundle instead', '600 × AED 11', '−AED 6,600']],
      sum: ['You keep', 'AED 37,100 a month'],
    },
    stop: ['Stop rule', 'Bundles under 3% conversion by day 10: stop, and switch to a 9% coupon on one product.'],
    cta: { b: 'Get a free consultation', k: 'Live', a: '→' },
    signals: ['price −7% · noon', 'CPC +32%', 'rank #14 → #31', '★ 3.9 · 212 reviews', '@creator · 412k views', 'stock: 3 left', '“oud gift set” +240%', 'ROAS 2.6',
      'Competitor A −18%', 'CTR 1.1%', 'cart abandons +9%', 'returns 6.2%', 'AED 129 → 106', 'bid AED 2.40', '“power bank 20000” +34%', 'reel · 1.2M views',
      '★1 · “packaging”', 'SKU 114 out of stock', 'Ramadan demand +61%', 'rank #4 → #17', 'CPM AED 18', 'rival coupon 10%', 'buy box lost', 'delivery 3 days → 1',
      'new seller · 40 SKUs', 'search share 12%', 'add to cart 7.4%', '#giftbox trending', 'ad spend +AED 900', '6 sellers in a price war', 'feed views −38%',
      'demand peak 19:00', 'impressions +210%', 'price +4% · Amazon', '★ 4.6 → 4.2', 'rival bids on your brand', 'conversion 2.1%', 'reach 1,000 → 10',
      'page 2 · 0 sales', 'basket AED 214'],
  },
  ru: {
    rail: ['Сигналов прочитано', 'Причин найдено', 'Решение'],
    causes: ['Позиция упала из-за цены, не рекламы', 'Снижение только на 2 товара, не на всё', 'Их остатков хватит недели на три'],
    money: {
      h: 'Арифметика',
      rows: [['Снизить цену так же', '1 900 × 232 ₽', '−440 800 ₽'], ['Сделать набор', '600 × 95 ₽', '−57 000 ₽']],
      sum: ['Вы сохраняете', '383 800 ₽ в месяц'],
    },
    stop: ['Правило остановки', 'Если к 10-му дню конверсия наборов ниже 3%, останавливаемся и даём купон 9% на один товар.'],
    cta: { b: 'Бесплатная консультация', k: 'Онлайн', a: '→' },
    signals: ['цена −7% · Ozon', 'CPC +32%', 'позиция 14 → 31', '★ 3,9 · 212 отзывов', 'блогер · 412 тыс. просмотров', 'остаток: 3 шт.', '«подарочный набор» +240%', 'ДРР 27%',
      'Конкурент A −18%', 'CTR 1,1%', 'брошенные корзины +9%', 'выкуп 71%', '1 290 → 1 058 ₽', 'ставка 24 ₽', '«пауэрбанк 20000» +34%', 'Reels · 1,2 млн',
      '★1 · «упаковка»', 'SKU 114 закончился', 'спрос к праздникам +61%', 'позиция 4 → 17', 'CPM 180 ₽', 'купон конкурента 10%', 'доставка 3 дня → 1', 'Wildberries · акция',
      'новый продавец · 40 SKU', 'доля поиска 12%', 'в корзину 7,4%', 'тренд #подарок', 'реклама +9 000 ₽', '6 продавцов в ценовой войне', 'показы в ленте −38%',
      'пик спроса 19:00', 'показы +210%', 'цена +4% · WB', '★ 4,6 → 4,2', 'конкурент в вашем бренд-запросе', 'конверсия 2,1%', 'охват 1 000 → 10',
      '2-я страница · 0 продаж', 'средний чек 2 140 ₽'],
  },
  ar: {
    rail: ['إشارات مقروءة', 'أسباب مكتشفة', 'قرار'],
    causes: ['تراجع الترتيب بسبب السعر، لا الإعلانات', 'التخفيض على منتجين فقط، لا على التشكيلة', 'مخزونهم يكفي نحو ثلاثة أسابيع'],
    money: {
      h: 'الحساب',
      rows: [['مجاراة سعرهم', '1,900 × AED 23', '−AED 43,700'], ['عرض مجمّع بدلًا من ذلك', '600 × AED 11', '−AED 6,600']],
      sum: ['ما تحتفظ به', 'AED 37,100 شهريًا'],
    },
    stop: ['قاعدة التوقف', 'إن قلّ تحويل العروض المجمّعة عن 3% بحلول اليوم العاشر نتوقف، وننتقل إلى قسيمة خصم 9% على منتج واحد.'],
    cta: { b: 'احصل على استشارة مجانية', k: '', a: '←' },
    signals: ['السعر −7% · نون', 'CPC +32%', 'الترتيب #14 ← #31', '★ 3.9 · 212 مراجعة', 'صانع محتوى · 412 ألف مشاهدة', 'المخزون: 3 قطع', '«طقم عود هدية» +240%', 'ROAS 2.6',
      'المنافس A −18%', 'CTR 1.1%', 'سلال متروكة +9%', 'المرتجعات 6.2%', 'AED 129 → 106', 'مزايدة AED 2.40', 'ريلز · 1.2 مليون مشاهدة',
      '★1 · «التغليف»', 'نفاد المخزون · SKU 114', 'طلب رمضان +61%', 'الترتيب #4 ← #17', 'CPM AED 18', 'قسيمة المنافس 10%', 'خسارة صندوق الشراء', 'التوصيل من 3 أيام إلى يوم',
      'بائع جديد · 40 منتجًا', 'حصة البحث 12%', 'الإضافة إلى السلة 7.4%', '#صندوق_هدايا رائج', 'إنفاق إعلاني +AED 900', '6 بائعين في حرب أسعار', 'مشاهدات الصفحة −38%',
      'ذروة الطلب 19:00', 'الظهور +210%', 'السعر +4% · أمازون', '★ 4.6 → 4.2', 'منافس يعلن على اسم علامتك', 'التحويل 2.1%', 'الوصول 1,000 → 10',
      'الصفحة 2 · بلا مبيعات', 'متوسط السلة AED 214'],
  },
};

// Owned block, refreshed on every build. window.__xm is the layer's handle:
//   on      the scene is in view (the bundle does nothing extra otherwise)
//   px,py,pr  written here: USHA's centre and radius on screen, in CSS px
//   think   0..1, she closes her eyes and her inner glow pulses
//   glow, light, look   extra inner glow, ember light, eye direction
//   dim     multiplies the galaxy's brightness (the noise goes quiet)
//   cue     one soft sound when the decision is written
const BLOCK = `/*mind*/var Xv_=new R;function Xp_(f,m){const x=window.__xm;if(!x||!x.on)return;Xv_.copy(f).project(cn);const sx=(Xv_.x+1)/2*innerWidth,sy=(1-Xv_.y)/2*innerHeight;Xv_.copy(f);Xv_.y+=m;Xv_.project(cn);x.pr=Math.abs((1-Xv_.y)/2*innerHeight-sy);x.px=document.documentElement.dir==="rtl"?innerWidth-sx:sx;x.py=sy;x.pt=performance.now()}
function Xg_(){const x=window.__xm;if(!x||!x.on||de.asleep)return;if(x.think>.2){Ge.state("reading");Ge.tgt.inner=1.15+x.think*(.35+.3*Math.sin(It*6.2))}else{if(x.look!=null){Ge.tgt.lookX=x.look;Ge.tgt.lookY=x.lookY||0}Ge.tgt.inner+=x.glow||0}Ge.tgt.light=Math.max(Ge.tgt.light,x.light||0);if(x.cue){x.cue=0;Ae.on&&Ae.voice("found")}}
function Xa_(a){const x=window.__xm;if(x&&x.on&&x.dim!=null&&a.i===2)a.dim*=x.dim;return a}
window.__xmXl=i=>{pi!==i&&Xl(i)};/*/mind*/`;

export function applyMind(src) {
  src = src.replace(/\/\*mind\*\/[^]*?\/\*\/mind\*\//g, '');
  const swaps = [
    // her position on screen, read where the bundle places her each frame
    ['let f=Ge.group.position,m=Ge.group.scale.x;', 'let f=Ge.group.position,m=Ge.group.scale.x;Xp_(f,m);'],
    // the thinking pulse and the eyes, after the bundle sets her state
    ['Ge.tgt.inner=.95+(Gn?.25:0)+(g==="found"?.2:0)}', 'Ge.tgt.inner=.95+(Gn?.25:0)+(g==="found"?.2:0);Xg_()}'],
    // the galaxy quiets while the decision stands
    ['a.i=t,a.f=n,a.w=o,a}', 'a.i=t,a.f=n,a.w=o,Xa_(a)}'],
    // the finding card holds still while the decision is written
    ['function u_(i,e){e&&(Wl||(Pa+=i)', 'function u_(i,e){e&&(Wl||window.__xmHold||(Pa+=i)'],
  ];
  for (const [a, b] of swaps) {
    if (src.includes(b)) continue;
    if (!src.includes(a)) throw new Error(`Bundle changed (mind): ${a.slice(0, 50)}`);
    src = src.replace(a, b);
  }
  const at = 'function u_(i,e){';
  if (!src.includes(at)) throw new Error('Bundle changed (mind): u_');
  return src.replace(at, BLOCK + at);
}
