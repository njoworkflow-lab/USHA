// Case wall content (generated from usha-brain control-room/plans/stage-1-copy-{en,ru,ar}.md and
// stage-1-case-library.md; strings are verbatim). EN and AR: 23 Gulf and Egypt cards; RU: 20 Russia cards.
// spark = [before, after] for the card's sparkline. story (EN only) = the full story from the case library:
// [label index into ui.story, paragraph or list].
export const CASES = {
 "en": {
  "ui": {
   "h": "Businesses like yours.",
   "disc": "Modelled cases: typical situations and numbers from each market. Real client stories are added with permission.",
   "g": [
    "Sector",
    "Country",
    "Situation"
   ],
   "labels": [
    "Found",
    "Result",
    "Didn't work",
    "Your time"
   ],
   "open": "Open the full story →",
   "count": [
    "{n} cases"
   ],
   "clear": "Clear filters",
   "empty": "No case matches all three. Clear one filter, or ask her about your exact situation.",
   "emptyB": "Ask USHA live →",
   "story": [
    "The situation",
    "What she read",
    "The finding",
    "The move",
    "You said yes to",
    "You said no to",
    "Your rhythm",
    "The result",
    "The maths",
    "What didn't work",
    "The stop point",
    "Your time"
   ],
   "close": "Close",
   "next": "Next case →",
   "last": [
    "A business like this one? Ask her about yours.",
    "Ask USHA live"
   ],
   "spark": "Before and after, drawn to scale.",
   "tip": "Modelled case: a typical situation and numbers from this market. Real client stories are added with permission."
  },
  "f": {
   "sector": [
    [
     "all",
     "All"
    ],
    [
     "fmcg",
     "FMCG"
    ],
    [
     "fashion",
     "Fashion"
    ],
    [
     "ecom",
     "E-commerce"
    ],
    [
     "food",
     "Food & drink"
    ],
    [
     "beauty",
     "Beauty"
    ],
    [
     "electronics",
     "Electronics"
    ],
    [
     "home",
     "Home"
    ],
    [
     "gold",
     "Gold"
    ],
    [
     "realestate",
     "Real estate"
    ],
    [
     "creators",
     "Creators"
    ]
   ],
   "country": [
    [
     "all",
     "All"
    ],
    [
     "uae",
     "UAE"
    ],
    [
     "ksa",
     "KSA"
    ],
    [
     "egypt",
     "Egypt"
    ]
   ],
   "sit": [
    [
     "s1",
     "Price war"
    ],
    [
     "s2",
     "Cost rise"
    ],
    [
     "s3",
     "Ramadan & Eid"
    ],
    [
     "s4",
     "Sales events"
    ],
    [
     "s5",
     "Returns & sizes"
    ],
    [
     "s6",
     "Stock-out & rank"
    ],
    [
     "s7",
     "Ads cost more"
    ],
    [
     "s8",
     "Creators"
    ],
    [
     "s9",
     "New marketplace"
    ],
    [
     "s10",
     "Delivery apps"
    ],
    [
     "s11",
     "Cancellations"
    ],
    [
     "s12",
     "Leads"
    ],
    [
     "s13",
     "Checkout"
    ]
   ]
  },
  "cards": [
   {
    "id": 1,
    "title": "A snack brand on noon, KSA",
    "sector": "fmcg",
    "country": "ksa",
    "sit": [
     "s1"
    ],
    "found": "The rival was clearing short-dated stock. The low price would end with it.",
    "result": "Held SAR 39. Back to #3 in 6 weeks. SAR 7,674 earned, against SAR 4,704 if matched.",
    "nope": "A \"baked this month\" photo. Clicks stayed flat.",
    "time": "6 min a day",
    "spark": [
     265,
     290
    ],
    "story": {
     "meta": "Snacks · KSA · noon KSA · 6 weeks (4 Aug – 14 Sep 2026) · price war",
     "s": [
      [
       0,
       "A baked chickpea snack sold 1,150 six-packs a month on noon KSA at SAR 39, ranked #3 for \"سناك صحي\" (healthy snack). An imported rival cut its six-pack from SAR 42 to SAR 31 overnight."
      ],
      [
       1,
       [
        "<b>4 Aug · rival's noon listing, daily:</b> SAR 31, with no deal badge and no event.",
        "<b>5–8 Aug · noon search rank, daily:</b> #3 → #6.",
        "<b>4 Aug (night) · rival's 1–3★ reviews:</b> 4 of 11 mention a best-before date \"next month\"."
       ]
      ],
      [
       2,
       "The rival was clearing short-dated stock, so its price would end when that stock did."
      ],
      [
       3,
       [
        "Hold SAR 39. Matching leaves SAR 3.17 a pack instead of SAR 9.40, which needs +197% orders to stand still.",
        "Add SAR 1,200 of Arabic-keyword ads."
       ]
      ],
      [
       4,
       [
        "both."
       ]
      ],
      [
       5,
       [
        "a SAR 2,000 Snapchat test."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> landed cost, fees, floor price.",
        "<b>Daily:</b> \"08:04 · Rival still SAR 31, two flavours 'only 3 left'. You're #5. Keep the SAR 50 ad cap? Yes / No.\"",
        "<b>Weekly:</b> image test, bids.",
        "<b>Monthly:</b> no price moves in the National Day window."
       ]
      ],
      [
       7,
       [
        "Six-packs a week: 265 → 190 → 236 (weeks 2–5) → 290 (week 6). Rank back to #3.",
        "Weeks 2–5 earned SAR 7,674 after ads. Matching would have earned SAR 4,704, even with 40% more orders."
       ]
      ],
      [
       9,
       "A \"baked this month\" image left click-through flat (2.1% → 2.0%)."
      ],
      [
       10,
       "Rank below #8 for five days, or the rival still at SAR 31 after six weeks, means launch a SAR 25 three-pack. Neither happened."
      ]
     ]
    }
   },
   {
    "id": 2,
    "title": "An iced-tea brand, UAE",
    "sector": "fmcg",
    "country": "uae",
    "sit": [
     "s8"
    ],
    "found": "Buyers are gym-goers and shift workers ordering cold cans on apps at 2–5pm.",
    "result": "Cans +15%. AED 3.71 per extra can, down from AED 27.80. Still AED 10,420 short at week 8.",
    "nope": "Five lifestyle creators brought 14 codes between them.",
    "time": "7 min a day",
    "spark": [
     27.8,
     3.71
    ],
    "story": {
     "meta": "Beverages · UAE · Instagram, TikTok, noon Minutes, Talabat Mart · 10 weeks (1 Jun – 9 Aug 2026) · creator seeding",
     "s": [
      [
       0,
       "A zero-sugar iced tea sold 9,000 cans a week at AED 6. Last year, AED 45,000 on three large creators cost AED 27.80 per extra can."
      ],
      [
       1,
       [
        "<b>3 Jun · noon Minutes sales, daily:</b> above 44°C, 41% of orders land between 2pm and 5pm.",
        "<b>5 Jun · Media Council permit check:</b> 9 of 31 creators had no permit and were dropped, because unpermitted paid posts are a fine risk.",
        "<b>8 Jun · TikTok search, weekly:</b> \"after training\" drink videos were growing, with no sign of the brand."
       ]
      ],
      [
       2,
       "The buyers are gym-goers and shift workers ordering cold cans on apps at 2–5pm."
      ],
      [
       3,
       [
        "20 small creators (coaches, nurses, retail staff) at about AED 1,000 each, each with a code.",
        "App placements at 2–5pm only."
       ]
      ],
      [
       4,
       [
        "AED 29,500."
       ]
      ],
      [
       5,
       [
        "gym sampling, because it wasn't trackable."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> sales by hour, the AED 30,000 cap.",
        "<b>Daily:</b> \"08:02 · 64 codes, 19 from one coach. Two lifestyle creators at 0 for the third day. Move their last fee to her? Yes / No.\"",
        "<b>Weekly:</b> creator schedule.",
        "<b>Monthly:</b> renew the 6 creators who drove 70% of codes."
       ]
      ],
      [
       7,
       [
        "Cans a week: 9,000 → 10,350 (+15%), then 9,650 after the campaign.",
        "About 7,950 extra cans × AED 2.40 = AED 19,080, which is <b>AED 10,420 short at week 8</b>. It pays back around week 15 if the +650 a week holds.",
        "Cost per extra can: AED 3.71 (was AED 27.80)."
       ]
      ],
      [
       9,
       "Five lifestyle creators produced 14 codes between them."
      ],
      [
       10,
       "Fewer than five creators past 30 codes each by week 3 means stop hiring. Seven had passed it."
      ]
     ]
    }
   },
   {
    "id": 3,
    "title": "A dish-soap brand, Egypt",
    "sector": "fmcg",
    "country": "egypt",
    "sit": [
     "s2"
    ],
    "found": "Rivals shrank their bottles and buyers noticed. An open price rise was still cheaper per ml.",
    "result": "EGP 65 for the full 750 ml. Margin back to EGP 680,000 a month.",
    "nope": "Small groceries couldn't shelve the 1.25 L pouch.",
    "time": "5 min a day",
    "spark": [
     512400,
     680040
    ],
    "story": {
     "meta": "Home care · Egypt · supermarkets, Breadfast, Talabat Mart, Facebook · 10 weeks (6 Apr – 14 Jun 2026) · cost rise, pack-size war",
     "s": [
      [
       0,
       "A dishwashing liquid sold 42,000 bottles a month at EGP 60 for 750 ml. A 15% cost rise cut its margin from EGP 16.20 to EGP 12.20 a bottle."
      ],
      [
       1,
       [
        "<b>2 Apr · supplier invoices:</b> materials up 15%.",
        "<b>7 Apr · quick-commerce listings, weekly:</b> two rivals shrank to 650 ml at the same EGP 60.",
        "<b>9 Apr · rivals' Facebook comments:</b> more than 60 complaints of \"قللوا الكمية\" (they cut the amount)."
       ]
      ],
      [
       2,
       "Buyers noticed the shrinking. An open rise on the full 750 ml would still be cheaper per ml: 8.7 piastres, against 9.2 for the rivals."
      ],
      [
       3,
       [
        "EGP 65 for 750 ml, posted as \"Same 750 ml. New price.\"",
        "A 1.25 L pouch at EGP 95."
       ]
      ],
      [
       4,
       [
        "both, plus EGP 25,000 a month on Facebook."
       ]
      ],
      [
       5,
       [
        "reprinting labels (EGP 18,000)."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> costs, trade terms, a tolerable drop of −12%.",
        "<b>Daily:</b> \"08:10 · Breadfast: back to #2. Price post 31% negative. Post the per-ml reply? Yes / No.\"",
        "<b>Weekly:</b> posts in Egyptian Arabic, sell-out review.",
        "<b>Monthly:</b> start Ramadan 2027 planning in August."
       ]
      ],
      [
       7,
       [
        "Bottles: 42,000 → 38,600 a month, plus 3,900 pouches.",
        "Monthly margin: EGP 512,400 if nothing changed (estimate) → EGP 680,040 after Facebook. That is the pre-rise level: won back, not grown."
       ]
      ],
      [
       8,
       [
        "<b>Cost:</b> EGP 40,000 of tooling."
       ]
      ],
      [
       9,
       "Small groceries couldn't shelve the pouch, so two retailers took 80% of pouch sales."
      ],
      [
       10,
       "Sell-out down more than 12% for three weeks means go back to EGP 62. The worst week was −10%."
      ]
     ]
    }
   },
   {
    "id": 4,
    "title": "A body-spray brand, KSA",
    "sector": "fmcg",
    "country": "ksa",
    "sit": [
     "s4"
    ],
    "found": "Each promotion cost SAR 46,000 for SAR 18,000 of margin. It pulled sales forward.",
    "result": "Promotions cut from 12 to 6 a year. About SAR 38,600 more in 12 weeks.",
    "nope": "A rival took the empty flyer slot. 6% share lost in that chain.",
    "time": "5 min a day",
    "spark": [
     12,
     6
    ],
    "story": {
     "meta": "Personal care (body spray) · KSA · hypermarkets, noon, Amazon.sa · 12 weeks (6 Jul – 27 Sep 2026) · retail vs online mix",
     "s": [
      [
       0,
       "A body spray sells 60,000 units a month at SAR 19, 78% of them in hypermarkets. Every month the brand funds a \"buy 2, get 1\" promotion and a flyer slot, at SAR 46,000 each time."
      ],
      [
       1,
       [
        "<b>6 Jul · retailer sell-out, weekly:</b> promotion weeks run +60%, and the three weeks after run −13% as buyers who stocked up pause.",
        "<b>8 Jul · rivals' flyer calendar:</b> they promote only in season windows.",
        "<b>10 Jul · noon and Amazon.sa search:</b> no multipack from the brand. Rivals sell 3-packs at SAR 49."
       ]
      ],
      [
       2,
       "Each promotion added about 3,000 units (SAR 18,000 of margin) for SAR 46,000. It pulled sales forward instead of adding buyers."
      ],
      [
       3,
       [
        "Cut to 6 promotions a year: Ramadan, back-to-school, National Day (with a Ministry of Commerce licence) and White Friday.",
        "An online 3-pack."
       ]
      ],
      [
       4,
       [
        "both."
       ]
      ],
      [
       5,
       [
        "dropping one chain's paid shelf-end display."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> sell-out by chain, promotion costs.",
        "<b>Daily:</b> \"08:06 · noon 3-pack: 38 sold, ACoS 31%. Lift the bid 10%? Yes / No.\"",
        "<b>Weekly:</b> sell-out, bids.",
        "<b>Monthly:</b> file the National Day licence early."
       ]
      ],
      [
       7,
       [
        "Retail units: 189,000 → 181,000 (−4%). Promotion spend: SAR 138,000 → SAR 46,000.",
        "Retail margin: SAR 996,000 → SAR 1,040,000. Online: −SAR 5,360 after ads.",
        "<b>Net: about +SAR 38,600 in 12 weeks.</b>"
       ]
      ],
      [
       9,
       "A rival took the empty flyer slot, and the brand lost 6% of its share in that chain."
      ],
      [
       10,
       "Non-promotion months more than 5% under 60,000 units means restore monthly promotions there. They were −1.7%."
      ]
     ]
    }
   },
   {
    "id": 6,
    "title": "A dates gift-box brand, KSA",
    "sector": "fmcg",
    "country": "ksa",
    "sit": [
     "s3"
    ],
    "found": "No hypermarket price point, and the shelf and corporate windows were about to close.",
    "result": "Boxes 9,000 → 14,600. Margin +10%.",
    "nope": "One chain sold 55%. 900 boxes come back after Eid.",
    "time": "8 min a day",
    "spark": [
     9000,
     14600
    ],
    "story": {
     "meta": "Dates gift boxes · KSA · hypermarkets, noon, Amazon.sa, corporate orders · 12 weeks (22 Dec 2025 – 15 Mar 2026) · Ramadan",
     "s": [
      [
       0,
       "A premium dates brand sold 9,000 Ramadan boxes last year, all online. It missed the hypermarkets' Ramadan display listings."
      ],
      [
       1,
       [
        "<b>22 Dec · retailer category calendar:</b> Ramadan listings close on 26 Dec, about 8 weeks before Ramadan (18 Feb).",
        "<b>23 Dec · rival boxes on noon:</b> SAR 89–189, and almost nothing under SAR 89 in hypermarkets.",
        "<b>24 Dec · last year's corporate enquiries:</b> 70% came in the first half of January."
       ]
      ],
      [
       2,
       "The brand had no hypermarket price point, and it was about to miss the shelf and corporate windows again."
      ],
      [
       3,
       [
        "Hypermarket boxes: 500 g at SAR 69 and 1 kg at SAR 129.",
        "Arabic gift cards online.",
        "Corporate orders from 3 Jan through the sales team."
       ]
      ],
      [
       4,
       [
        "SAR 60,000 of display fees for two chains."
       ]
      ],
      [
       5,
       [
        "a third chain."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> shelf life, chain contacts, sales by week.",
        "<b>Daily:</b> \"08:05 · Chain A 61% sold, 3 stores empty. Send 400 boxes? Yes / No.\"",
        "<b>Weekly:</b> display checks, ads after Iftar.",
        "<b>Monthly:</b> corporate deadline, 15 Jan."
       ]
      ],
      [
       7,
       [
        "Boxes: 9,000 → 14,600 (8,200 online, 5,200 hypermarket, 1,200 corporate).",
        "Margin after fees and ads: SAR 320,000 → SAR 353,000 (+10%).",
        "A hypermarket box earns SAR 15, against SAR 40 online: volume grew much faster than profit."
       ]
      ],
      [
       9,
       "One chain sold only 55%. Its 900 boxes are due back after Eid under sale-or-return terms."
      ],
      [
       10,
       "A chain under 50% sold by mid-Ramadan gets no top-up. Chain B was refused one on day 14."
      ]
     ]
    }
   },
   {
    "id": 7,
    "title": "An abaya brand, KSA",
    "sector": "fashion",
    "country": "ksa",
    "sit": [
     "s3",
     "s5"
    ],
    "found": "Buyers choose an abaya by length. The brand sold S, M and L.",
    "result": "Namshi returns 31% → 22%. About SAR 21,300 more.",
    "nope": "Hemming took 5 days, so 40 orders missed Eid.",
    "time": "8 min a day",
    "spark": [
     31,
     22
    ],
    "story": {
     "meta": "Abayas · KSA · own Salla store, Namshi, Snapchat · 10 weeks (5 Jan – 15 Mar 2026) · Ramadan, size returns",
     "s": [
      [
       0,
       "An abaya brand sells at around SAR 450. Returns run at 31% on Namshi and 18% on its own store, mostly because of length."
      ],
      [
       1,
       [
        "<b>5 Jan · Namshi return reasons, weekly:</b> 64% are \"too long\" or \"too short\".",
        "<b>7 Jan · customer WhatsApp messages:</b> buyers ask for their height in centimetres, not S/M/L.",
        "<b>9 Jan · rival product pages:</b> three rivals sell by length (52–60 inches)."
       ]
      ],
      [
       2,
       "Buyers choose an abaya by length, and the brand sold them by S/M/L."
      ],
      [
       3,
       [
        "Sell by five lengths with a height guide.",
        "Free hemming on the own store.",
        "Ramadan Snapchat ads pointing to the own store; Namshi stays for discovery."
       ]
      ],
      [
       4,
       [
        "all of it."
       ]
      ],
      [
       5,
       [
        "cutting Namshi to the 3 best-sellers."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> returns by reason, stock by size, hemming capacity.",
        "<b>Daily:</b> \"08:07 · 52 orders, 9 hemming. Queue 4 days. Stop free hemming for Eid orders after 5 Mar? Yes / No.\"",
        "<b>Weekly:</b> Snapchat stories, Namshi stock.",
        "<b>Monthly:</b> the Eid delivery cut-off."
       ]
      ],
      [
       7,
       [
        "Returns: Namshi 31% → 22%; own store 18% → 11%.",
        "Eid-season orders: 2,100 → 2,450."
       ]
      ],
      [
       8,
       [
        "<b>Money:</b>"
       ]
      ],
      [
       9,
       "Hemming took 5 days, so 40 orders missed Eid and were refunded."
      ],
      [
       10,
       "Namshi returns not under 25% by week 5 means cut it to 3 best-sellers. They were at 24%."
      ]
     ]
    }
   },
   {
    "id": 8,
    "title": "A sportswear brand on Amazon.ae and noon, UAE",
    "sector": "fashion",
    "country": "uae",
    "sit": [
     "s1"
    ],
    "found": "Old outlet stock had leaked to resellers. Matching them would reprice the whole range.",
    "result": "Buy box 38% → 61%. About AED 6,400 more a month.",
    "nope": "The noon brand-protection request was still open at week 8.",
    "time": "5 min a day",
    "spark": [
     38,
     61
    ],
    "story": {
     "meta": "Sportswear · UAE · Amazon.ae, noon, Namshi · 8 weeks (3 Aug – 27 Sep 2026) · buy box and price matching, back-to-school",
     "s": [
      [
       0,
       "A gym-wear brand sells AED 210,000 a month on marketplaces. It holds the Amazon.ae buy box only 38% of the time, because resellers list its items at AED 129 against its AED 149."
      ],
      [
       1,
       [
        "<b>3 Aug · Amazon Business Reports, daily:</b> buy-box share 38%.",
        "<b>4 Aug · noon offer listings:</b> three resellers at AED 129, all with last season's colours.",
        "<b>6 Aug · outlet partner's stock list:</b> the same colours and lot codes."
       ]
      ],
      [
       2,
       "Old outlet stock had leaked to resellers. Matching them would reprice the whole range over one old colour."
      ],
      [
       3,
       [
        "Don't match.",
        "New colours on their own listings under Amazon Brand Registry.",
        "A back-to-school bundle at AED 199 on Namshi only."
       ]
      ],
      [
       4,
       [
        "all three."
       ]
      ],
      [
       5,
       [
        "ending the outlet deal, which clears 12% of stock."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> stock by season, the reseller list.",
        "<b>Daily:</b> \"08:05 · Buy box 57%. New noon reseller at AED 119, old colour. Ignore? Yes / No.\"",
        "<b>Weekly:</b> bundle stock, bids.",
        "<b>Monthly:</b> White Friday deals on new colours only."
       ]
      ],
      [
       7,
       [
        "Buy box: 38% → 61%.",
        "Revenue: AED 210,000 → AED 236,000 a month. At 38% margin, minus AED 3,500 of ads: <b>about +AED 6,400 a month</b>."
       ]
      ],
      [
       9,
       "The noon brand-protection request was still open at week 8."
      ],
      [
       10,
       "Buy box under 50% by week 4 means match on the two best-sellers only. It was 54%."
      ]
     ]
    }
   },
   {
    "id": 9,
    "title": "A kidswear brand, Egypt",
    "sector": "fashion",
    "country": "egypt",
    "sit": [
     "s5"
    ],
    "found": "The size chart went by age. Children grow by height.",
    "result": "Returns 22% → 16%. EGP 59,800 more in the season.",
    "nope": "3-polo bundles reached only 11% of orders.",
    "time": "6 min a day",
    "spark": [
     22,
     16
    ],
    "story": {
     "meta": "Kids' school clothing · Egypt · Facebook, Instagram, own site, Amazon.eg · 6 weeks (17 Aug – 27 Sep 2026) · back-to-school, size returns",
     "s": [
      [
       0,
       "A kidswear brand sold 1,900 school-season orders last year at about EGP 820 each, with 22% returned for size. Ad spend for the season is EGP 150,000."
      ],
      [
       1,
       [
        "<b>17 Aug · Amazon.eg return reasons:</b> 58% \"too small\".",
        "<b>18 Aug · Facebook comments:</b> parents ask \"my son is 7 but tall: which size?\"",
        "<b>20 Aug · Facebook search trends and past orders:</b> orders peak around the government payday (the 24th) and in the last two weeks before school."
       ]
      ],
      [
       2,
       "The size chart went by age, but children grow by height. The money was spread evenly across weeks when demand was not."
      ],
      [
       3,
       [
        "A height and weight size chart.",
        "At-home exchange by courier (EGP 40) instead of a return.",
        "60% of the budget in the payday window and the last two weeks before school."
       ]
      ],
      [
       4,
       [
        "the chart, exchanges and timing."
       ]
      ],
      [
       5,
       [
        "an extra EGP 30,000 for the final week."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> sizes, last season's returns, courier rates.",
        "<b>Daily:</b> \"08:04 · 96 orders, 12 exchanges requested. Ads at payday budget from tonight? Yes / No.\"",
        "<b>Weekly:</b> ad timing, stock by size.",
        "<b>Monthly:</b> the winter range launches in November."
       ]
      ],
      [
       7,
       [
        "Orders: 1,900 → 2,050.",
        "Returns: 22% → 16%, with about 200 exchanges.",
        "<b>Margin after returns, exchanges and ads:</b> EGP 210,240 → EGP 270,040 (+EGP 59,800)."
       ]
      ],
      [
       9,
       "3-polo bundles reached only 11% of orders, and 30% of exchanges were returned anyway."
      ],
      [
       10,
       "Returns not under 19% by week 3 means add \"buy one size up\" to every product page. They were at 17%."
      ]
     ]
    }
   },
   {
    "id": 12,
    "title": "A bedding brand with its own store, Egypt",
    "sector": "ecom",
    "country": "egypt",
    "sit": [
     "s7"
    ],
    "found": "Ad prices rose for everyone. The cash-on-delivery refusals were the brand's own: each delivered order cost EGP 309.",
    "result": "Refusals 24% → 15%. EGP 17,500 more a month.",
    "nope": "A deposit cut Upper Egypt orders by 35% and was dropped.",
    "time": "8 min a day",
    "spark": [
     24,
     15
    ],
    "story": {
     "meta": "Bedding · Egypt · own Shopify store, Meta ads, WhatsApp, couriers · 6 weeks (14 Sep – 25 Oct 2026) · ad cost spike, COD refusals",
     "s": [
      [
       0,
       "A bedding brand's Meta cost per order jumped from EGP 160 to EGP 235 at the same EGP 200,000 a month. 24% of its orders, mostly cash on delivery, were refused at the door."
      ],
      [
       1,
       [
        "<b>22 Sep · Meta Ads Manager, daily:</b> the cost per 1,000 views rose 37% in three weeks.",
        "<b>23 Sep · Meta Ad Library:</b> three big retailers each running 40+ new ads ahead of White Friday.",
        "<b>24 Sep · courier dashboard:</b> refusals were 14% in Cairo and 41–44% in Assiut and Sohag."
       ]
      ],
      [
       2,
       "The ad price rise was market-wide. The refusals weren't, and each delivered order cost EGP 309."
      ],
      [
       3,
       [
        "WhatsApp confirmation within 2 hours.",
        "EGP 50 off for paying upfront by InstaPay or wallet."
       ]
      ],
      [
       4,
       [
        "both, plus an agent at EGP 9,000 a month."
       ]
      ],
      [
       5,
       [
        "prepay-only in the worst governorates. The owner used an EGP 100 deposit instead."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> 90 days of orders and refusals.",
        "<b>Daily:</b> \"08:06 · 3 COD orders unconfirmed after 2 hours. Cancel? Yes / No.\"",
        "<b>Weekly:</b> refusals by courier.",
        "<b>Monthly:</b> hold spend through White Friday."
       ]
      ],
      [
       7,
       [
        "Refusals: 24% → 15%. Delivered orders: 647 → 708 a month.",
        "Cost per delivered order: EGP 309 → EGP 282.",
        "<b>Net: about +EGP 17,500 a month</b> after the discount and the agent."
       ]
      ],
      [
       9,
       [
        "New videos didn't lower the cost per order.",
        "The deposit cut Upper Egypt orders by 35% and was dropped."
       ]
      ],
      [
       10,
       "Prepaid orders under 45% by week 4 means halve the discount. They reached 46%."
      ]
     ]
    }
   },
   {
    "id": 13,
    "title": "A pet-food subscription box, UAE",
    "sector": "ecom",
    "country": "uae",
    "sit": [
     "s11"
    ],
    "found": "Owners cancelled because the box sent more than the cat ate.",
    "result": "Cancellations 11% → 7.5% a month. Each customer stays 32% longer. This month's profit −2.6%.",
    "nope": "Short-term profit fell. The gain needs the lower cancellations to hold.",
    "time": "4 min a day",
    "spark": [
     11,
     7.5
    ],
    "story": {
     "meta": "Pet products, subscription box · UAE · own Shopify store, Instagram · 12 weeks (6 Apr – 28 Jun 2026) · churn",
     "s": [
      [
       0,
       "A monthly cat-food and litter box at AED 189 has 1,150 subscribers and loses 11% of them every month. New sign-ups (120 a month) only replace the losses."
      ],
      [
       1,
       [
        "<b>6 Apr · cancellation survey, weekly:</b> 38% \"food piling up\", 22% price, 9% moved.",
        "<b>8 Apr · Amazon.ae Subscribe &amp; Save:</b> the same litter is AED 12 cheaper.",
        "<b>10 Apr · delivery data:</b> boxes reach Sharjah and Ajman 4–5 days late."
       ]
      ],
      [
       2,
       "Most cancellations were overstock, not price. The box sent more than the cat ate."
      ],
      [
       3,
       [
        "A skip-a-month button.",
        "Box size by the cat's weight.",
        "Delivery every 5 or 6 weeks as options.",
        "Keep the price."
       ]
      ],
      [
       4,
       [
        "all of it."
       ]
      ],
      [
       5,
       [
        "taking litter out of the box (heavy, AED 9 to ship). Customers like one box."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> subscriber export, cancellation reasons, margins.",
        "<b>Daily:</b> \"08:03 · 9 skips, 3 cancellations, 5 sign-ups. Courier late in Ajman again: switch the zone? Yes / No.\"",
        "<b>Weekly:</b> Instagram plan, churn by cohort.",
        "<b>Monthly:</b> the summer heat packaging check."
       ]
      ],
      [
       7,
       [
        "Monthly churn: 11% → 7.5%. Subscribers: 1,150 → 1,244.",
        "10% of boxes skipped, so monthly margin went <b>down</b> from AED 59,800 to AED 58,240 (−2.6%).",
        "Expected lifetime boxes per subscriber: 9.1 → 12.0 (+32%)."
       ]
      ],
      [
       9,
       "In-period profit fell. The gain shows up only if churn holds."
      ],
      [
       10,
       "Churn not under 9% by week 8 means remove the skip button and test the price instead. It was 7.8%."
      ]
     ]
    }
   },
   {
    "id": 14,
    "title": "A home-and-kitchen seller on noon, UAE",
    "sector": "ecom",
    "country": "uae",
    "sit": [
     "s6"
    ],
    "found": "noon ranks on recent sales. Buy them back with ads and keep the price.",
    "result": "#19 → #3 with no price cut. AED 4,170 more.",
    "nope": "\"Storage box\" ads wasted AED 410.",
    "time": "4 min a day",
    "spark": [
     19,
     3
    ],
    "story": {
     "meta": "Marketplace seller · UAE · noon (fulfilled by noon, noon Ads) · 4 weeks (2 – 30 Jun 2026) · rank loss after a stock-out",
     "s": [
      [
       0,
       "A food-storage set sold 38 a day at AED 89, ranked #2 for \"food storage containers\". In one week it fell to #19 and 17 orders a day."
      ],
      [
       1,
       [
        "<b>2–7 Jun · noon search rank, daily:</b> #2 → #19.",
        "<b>3 Jun · noon inventory report:</b> 9 days at zero, with the restock held at Jebel Ali. The Express badge was lost.",
        "<b>5 Jun · reviews:</b> the rating held at 4.4. This was not a quality problem."
       ]
      ],
      [
       2,
       "noon ranks on recent sales. Buy the sales back with ads; don't cut the price."
      ],
      [
       3,
       [
        "Hold AED 89.",
        "Ads from AED 90 to AED 250 a day for 21 days, with Arabic and English campaigns separate.",
        "Cut any term above 34.5% ACoS, the break-even on an AED 30.74 margin."
       ]
      ],
      [
       4,
       [
        "the push."
       ]
      ],
      [
       5,
       [
        "holding 45 days of stock instead of 25."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> inventory, inbound dates.",
        "<b>Daily:</b> \"08:03 · #9. 'storage box' at 48% ACoS. Pause? Yes / No.\"",
        "<b>Weekly:</b> bids, inbound booking.",
        "<b>Monthly:</b> book Yellow Friday warehouse slots."
       ]
      ],
      [
       7,
       [
        "Rank: #19 → #3. Orders: 17 → 35 a day.",
        "826 orders, against an estimated 581 without the push. 245 × AED 30.74 − AED 3,360 of ads = <b>about +AED 4,170</b>."
       ]
      ],
      [
       9,
       "\"storage box\" wasted AED 410, and the set stalled at #3 behind a rival's paid slot."
      ],
      [
       10,
       "Not in the top 10 by day 14 means rework the listing instead. It was #9 by day 7."
      ]
     ]
    }
   },
   {
    "id": 15,
    "title": "A home-fitness seller new on Amazon.sa, KSA",
    "sector": "ecom",
    "country": "ksa",
    "sit": [
     "s9"
    ],
    "found": "Native Arabic listings won search cheaply. Heavy items couldn't survive the fees.",
    "result": "SAR 0 → SAR 41,000 a month. Ad cost per sale 42% → 14%.",
    "nope": "Dumbbells lost SAR 14 a unit and were pulled.",
    "time": "6 min a day",
    "spark": [
     0,
     41000
    ],
    "story": {
     "meta": "Marketplace seller · KSA · Amazon.sa (new, fulfilled by Amazon), noon KSA · 12 weeks (6 Jul – 27 Sep 2026) · entering a new marketplace",
     "s": [
      [
       0,
       "A seller of bands, mats and dumbbells makes SAR 180,000 a month on noon KSA and nothing on Amazon.sa. Three of its five rivals already sell there with Prime."
      ],
      [
       1,
       [
        "<b>6 Jul · Amazon.sa results for 20 Arabic terms, weekly:</b> 14 have machine-translated titles in the top 10.",
        "<b>8 Jul · suggested bids:</b> SAR 0.9–1.6 a click, against SAR 0.6–1.1 on noon.",
        "<b>10 Jul · noon margins:</b> mats and bands make 30%; dumbbells make 11% because of weight."
       ]
      ],
      [
       2,
       "Native Arabic could win search cheaply. Heavy items wouldn't survive the fees."
      ],
      [
       3,
       [
        "12 products in Amazon's warehouses, with Arabic written natively.",
        "Separate Arabic and English campaigns. Same prices as noon."
       ]
      ],
      [
       4,
       [
        "SAR 6,800 of freight and about SAR 20,000 of ads."
       ]
      ],
      [
       5,
       [
        "pricing 3 products 5% above noon."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> margins with weight, trademark status.",
        "<b>Daily:</b> \"08:07 · 'حبل مقاومة' ACoS 19%, 'resistance bands' 52%. Move SAR 40 to Arabic? Yes / No.\"",
        "<b>Weekly:</b> search-term harvest.",
        "<b>Quarterly:</b> Amazon at 25% of revenue; White Friday stock by mid-October."
       ]
      ],
      [
       7,
       [
        "Amazon.sa: SAR 14,000 → 27,000 → 41,000 a month. TACoS: 42% → 14%.",
        "noon −2%. Combined revenue +21%.",
        "12 weeks: −SAR 700 after ads and freight. Month 3: +SAR 6,500. Pays back around week 13."
       ]
      ],
      [
       9,
       "Dumbbells lost SAR 14 a unit and were pulled. The trademark hadn't cleared, so there was no rich content."
      ],
      [
       10,
       "Month-3 TACoS above 25% means cut to 4 products. It was 14%."
      ]
     ]
    }
   },
   {
    "id": 17,
    "title": "A cloud kitchen, Dubai",
    "sector": "food",
    "country": "uae",
    "sit": [
     "s10"
    ],
    "found": "Talabat read the lunch pauses as unreliability. Going offline cost more rank than the late orders it saved.",
    "result": "Rank #22 → #9. Orders 95 → 112 a day.",
    "nope": "A 20% Talabat Pro deal she proposed. Stopped in week 5.",
    "time": "6 min a day",
    "spark": [
     95,
     112
    ],
    "story": {
     "meta": "Cloud kitchen (two delivery-only bowl brands) · UAE, Dubai · Talabat, Deliveroo, Careem · 8 weeks (1 Jun – 26 Jul 2026) · delivery-app ranking",
     "s": [
      [
       0,
       "A cloud kitchen took 95 Talabat orders a day at AED 52, rated 4.3. In the \"Healthy\" list it slipped from #14 to #22."
      ],
      [
       1,
       [
        "<b>1 Jun · Talabat partner portal:</b> 88% online availability, because it went offline at lunch peaks, and 71% prep-time accuracy.",
        "<b>2–4 Jun · list position from 3 addresses, daily:</b> #22.",
        "<b>5 Jun · rival menus and reviews:</b> combos at AED 39–42, against hers at AED 46. Her reviews say \"cold\"."
       ]
      ],
      [
       2,
       "The app read lunch pauses as unreliability, and going offline cost more rank than the late orders it saved."
      ],
      [
       3,
       [
        "Throttle lunch orders instead of going offline.",
        "Menu from 46 to 28 items, with an AED 42 combo.",
        "Vented packaging."
       ]
      ],
      [
       4,
       [
        "all of it."
       ]
      ],
      [
       5,
       [
        "closing the weaker second brand."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> capacity by hour, contracts (18% commission, verify).",
        "<b>Daily:</b> \"08:02 · Online 97%, prep accuracy 86%. Keep the lunch throttle at 22 an hour? Yes / No.\"",
        "<b>Weekly:</b> menu ranking, ad hours.",
        "<b>Monthly:</b> summer menu."
       ]
      ],
      [
       7,
       [
        "Availability: 88% → 97%. Rating: 4.5. Position: #22 → #9. Orders: 95 → 112 a day.",
        "About 616 extra orders × AED 22 = AED 13,550, less packaging and a short Pro deal: <b>about +AED 7,900</b> over 8 weeks."
       ]
      ],
      [
       9,
       "A 20% Talabat Pro deal she proposed cost AED 5.20 an order and was stopped in week 5."
      ],
      [
       10,
       "Prep accuracy under 85% by week 4 means freeze the menu and pause ads. It was 86%."
      ]
     ]
    }
   },
   {
    "id": 18,
    "title": "A cloud kitchen, Cairo",
    "sector": "food",
    "country": "egypt",
    "sit": [
     "s10"
    ],
    "found": "A long menu priced for dine-in, on an app that takes a fifth of every order.",
    "result": "Margin per order EGP 58 → 71. Orders +15% a day.",
    "nope": "The family combo flopped.",
    "time": "4 min a day",
    "spark": [
     58,
     71
    ],
    "story": {
     "meta": "Cloud kitchen (Egyptian comfort food) · Egypt, Cairo · Talabat · 6 weeks (3 Aug – 13 Sep 2026) · menu and price",
     "s": [
      [
       0,
       "A Cairo cloud kitchen takes 140 Talabat orders a day at an average EGP 210, and its menu prices hadn't moved since ingredient costs rose 12%. After commission (about 22%, verify) it kept EGP 58 an order."
      ],
      [
       1,
       [
        "<b>3 Aug · Talabat menu analytics:</b> 30% of 52 items take under 1% of orders each; 9 items take 70%.",
        "<b>4 Aug · supplier invoices:</b> food cost up 12%.",
        "<b>6 Aug · rival menus, weekly:</b> combos at the EGP 199 and EGP 249 price points."
       ]
      ],
      [
       2,
       "The menu was too long and priced for dine-in, not for an app that takes a fifth of every order."
      ],
      [
       3,
       [
        "Menu from 52 to 30 items.",
        "Combos at EGP 199 and EGP 249.",
        "Singles +8%.",
        "Talabat Pro deal on one combo only."
       ]
      ],
      [
       4,
       [
        "all of it."
       ]
      ],
      [
       5,
       [
        "own riders, for a lower commission. The owner said it was too much to manage."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> costs per dish, contract terms.",
        "<b>Daily:</b> \"08:05 · Family combo at 2% of orders. Drop it Friday? Yes / No.\"",
        "<b>Weekly:</b> item ranking, photos.",
        "<b>Monthly:</b> price review against food costs."
       ]
      ],
      [
       7,
       [
        "Orders: 140 → 131 a day.",
        "Average basket: EGP 210 → EGP 228.",
        "Margin an order: EGP 58 → EGP 71.",
        "Daily margin: EGP 8,078 → EGP 9,275 (+15%)."
       ]
      ],
      [
       9,
       "The family combo flopped, and the 8% rise cut single-item orders by 15%."
      ],
      [
       10,
       "Orders under 120 a day for a week means take back half the single-item rise. The lowest was 127."
      ]
     ]
    }
   },
   {
    "id": 19,
    "title": "A coffee-bean brand, KSA",
    "sector": "food",
    "country": "ksa",
    "sit": [
     "s8"
    ],
    "found": "Home brewers trust other home brewers. Gifted beans reach them for less than paid posts.",
    "result": "SAR 15,650 more.",
    "nope": "42 of 60 gifted brewers never posted.",
    "time": "5 min a day",
    "spark": [
     1300,
     1520
    ],
    "story": {
     "meta": "Packaged coffee beans · KSA · own Salla store, noon, Snapchat, TikTok · 8 weeks (10 Aug – 4 Oct 2026) · creator seeding",
     "s": [
      [
       0,
       "A specialty roaster sells about 1,300 online orders a month (average SAR 145). Repeat buyers come back every 5 weeks, but new buyers are flat."
      ],
      [
       1,
       [
        "<b>10 Aug · TikTok and Snapchat search, weekly:</b> home \"V60\" brewing videos growing.",
        "<b>12 Aug · rival roasters' public posts:</b> two rivals gift beans to 30–50 home baristas a month.",
        "<b>14 Aug · noon reviews:</b> \"grind too fine for my machine\"."
       ]
      ],
      [
       2,
       "Home brewers trust other home brewers. Gifted product reaches them more cheaply than paid posts."
      ],
      [
       3,
       [
        "Gift 60 kits (SAR 85 each) to home brewers. Gifted posts still need disclosure.",
        "Pay 4 creators (Mawthooq-licensed) SAR 1,500 each.",
        "A grind selector on every product."
       ]
      ],
      [
       4,
       [
        "all of it."
       ]
      ],
      [
       5,
       [
        "\"23% off for 23 Sep\" (National Day), because a discount needs a Ministry of Commerce licence and the owner wanted no discount."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> margins, creator rules, roast capacity.",
        "<b>Daily:</b> \"08:04 · 2 gifted posts last night, 31 code orders. One home barista asked for 2 more bags. Send? Yes / No.\"",
        "<b>Weekly:</b> gifting list, codes by creator.",
        "<b>Monthly:</b> winter blends."
       ]
      ],
      [
       7,
       [
        "Online orders: 1,300 → 1,520 a month.",
        "410 code orders × SAR 145 × 45% margin = SAR 26,750, less SAR 11,100 of kits and fees. <b>Net: about +SAR 15,650.</b>"
       ]
      ],
      [
       9,
       "42 of the 60 gifted brewers never posted. noon sales didn't move."
      ],
      [
       10,
       "Fewer than 150 code orders by week 4 means stop gifting. There were 190."
      ]
     ]
    }
   },
   {
    "id": 20,
    "title": "A granola brand, Egypt",
    "sector": "food",
    "country": "egypt",
    "sit": [
     "s2"
    ],
    "found": "The pack price sat above the shopper's line. The product was fine.",
    "result": "Packs 3,200 → 4,100 a month. EGP 7,500 more a month.",
    "nope": "Gym fridges sold 6 packs a week across all 12.",
    "time": "4 min a day",
    "spark": [
     3200,
     4100
    ],
    "story": {
     "meta": "Granola · Egypt · Breadfast, Talabat Mart, Instagram, gym fridges · 8 weeks (6 Jul – 30 Aug 2026) · price point and app shelf",
     "s": [
      [
       0,
       "A granola brand sells 3,200 packs a month at EGP 185 (400 g), ranked #9 for \"جرانولا\" (granola) on Breadfast. Rivals sit at EGP 149–175."
      ],
      [
       1,
       [
        "<b>6 Jul · Breadfast search rank, daily:</b> #9.",
        "<b>7 Jul · rival prices, weekly:</b> EGP 149 and EGP 175.",
        "<b>9 Jul · Instagram comments:</b> \"حلو بس غالي\" (good but expensive)."
       ]
      ],
      [
       2,
       "The price per pack was above the shopper's line, but the product wasn't."
      ],
      [
       3,
       [
        "Add a 250 g pack at EGP 120.",
        "Keep the 400 g.",
        "A Breadfast in-app banner (EGP 8,000 a month).",
        "12 gym fridges as a test."
       ]
      ],
      [
       4,
       [
        "all of it."
       ]
      ],
      [
       5,
       [
        "launching on Amazon.eg now."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> costs, trade margin (25%).",
        "<b>Daily:</b> \"08:03 · 250 g at #4. 400 g down 6%. Keep the banner on the small pack? Yes / No.\"",
        "<b>Weekly:</b> rank, stock.",
        "<b>Monthly:</b> the Ramadan suhoor pack."
       ]
      ],
      [
       7,
       [
        "Packs: 3,200 → 4,100 a month (2,300 of 400 g and 1,800 of 250 g).",
        "Margin: EGP 220,000 → EGP 235,525. <b>After the banner: +EGP 7,500 a month.</b>"
       ]
      ],
      [
       9,
       "The gym fridges sold 6 packs a week across all 12, and the test was dropped."
      ],
      [
       10,
       "400 g sales down more than 30% means drop the small pack. They were down 28%."
      ]
     ]
    }
   },
   {
    "id": 22,
    "title": "An oud perfume brand, UAE",
    "sector": "beauty",
    "country": "uae",
    "sit": [
     "s3"
    ],
    "found": "The gift sets went up late, at one price above most gift budgets.",
    "result": "Sell-through 73% → 90%. Profit flat. AED 30,800 less stock left over.",
    "nope": "The corporate page brought 3 orders.",
    "time": "10 min a day",
    "spark": [
     73,
     90
    ],
    "story": {
     "meta": "Oud fragrance · UAE · own website, noon, Amazon.ae, Instagram · 10 weeks (12 Jan – 22 Mar 2026) · Ramadan gift sets",
     "s": [
      [
       0,
       "Last Ramadan the brand sold 1,900 of 2,600 gift sets at AED 249, 61% of them in the last 10 days. The 700 leftover sets were cleared at half price."
      ],
      [
       1,
       [
        "<b>6 Jan · marketplace search suggestions:</b> \"طقم عطور هدية\" (perfume gift set) climbing.",
        "<b>8 Jan · rivals:</b> 4 of 6 already listed with engraving, at AED 159–329.",
        "<b>9 Jan · last year's reviews:</b> \"box crushed\", \"no Arabic card\"."
       ]
      ],
      [
       2,
       "The sets were listed late at one price, above most gift budgets."
      ],
      [
       3,
       [
        "Two sets, AED 179 and AED 299, listed five weeks early.",
        "Engraving and an Arabic card.",
        "1,800 sets, with a 600 top-up if 400 had sold by 1 Feb."
       ]
      ],
      [
       4,
       [
        "all of it."
       ]
      ],
      [
       5,
       [
        "AED 18,000 on Snapchat."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> sell-through by channel.",
        "<b>Daily:</b> \"08:01 · 46 sets, engraving queue 2 days. Pause engraving on noon? Yes / No.\"",
        "<b>Weekly:</b> Reels, ads after Iftar.",
        "<b>Monthly:</b> leftover sets go to Mother's Day."
       ]
      ],
      [
       7,
       [
        "Sell-through: 73% → 90% (2,150 sets).",
        "Set margin: AED 205,500 → AED 206,400.",
        "Leftover stock: AED 46,200 → AED 15,400.",
        "Singles lost AED 7,400, so profit was about AED 6,500 lower. The gain is AED 30,800 less cash stuck in stock."
       ]
      ],
      [
       9,
       "The corporate page brought 3 orders, because companies had set their gift budgets in December."
      ],
      [
       10,
       "Under 400 sold by 1 Feb means cancel the top-up. 520 had sold."
      ]
     ]
    }
   },
   {
    "id": 23,
    "title": "An air-fryer brand, Egypt",
    "sector": "electronics",
    "country": "egypt",
    "sit": [
     "s4"
    ],
    "found": "Shoppers compared monthly payments. The percentage off barely registered.",
    "result": "White Friday went from −EGP 232,700 to +EGP 258,900, on 37% fewer units.",
    "nope": "noon rejected the instalment text on the main image.",
    "time": "8 min a day",
    "spark": [
     -232700,
     258900
    ],
    "story": {
     "meta": "Air fryers · Egypt · noon Egypt, Amazon.eg, Facebook · 4 weeks (3 – 30 Nov 2025) · White Friday",
     "s": [
      [
       0,
       "Last White Friday the brand cut its EGP 4,200 air fryer by 25% and sold 2,300 units at about −EGP 53 each before ads."
      ],
      [
       1,
       [
        "<b>27 Oct · rival price history, daily:</b> four rivals raised list prices 10–15% in October, before their \"discounts\".",
        "<b>30 Oct · Facebook groups:</b> \"قسط\" (instalments) and valU questions everywhere.",
        "<b>2 Nov · ad console:</b> clicks forecast to double in price during the event."
       ]
      ],
      [
       2,
       "Shoppers buy the monthly payment, not the percentage off."
      ],
      [
       3,
       [
        "12% off (EGP 3,696), shown as \"EGP 616 a month for 6 months, 0%\".",
        "No inflated list price."
       ]
      ],
      [
       4,
       [
        "that, plus EGP 90,000 of marketplace ads."
       ]
      ],
      [
       5,
       [
        "moving Facebook's EGP 60,000 into marketplace ads."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> landed cost at this month's exchange rate, the floor price (EGP 3,550).",
        "<b>Daily:</b> \"08:09 · 310 units, 46% on instalments. A rival's 'was 4,999' only appeared in October. Hold? Yes / No.\"",
        "<b>Weekly:</b> deal timing.",
        "<b>Monthly:</b> winter products, no discount."
       ]
      ],
      [
       7,
       [
        "Units: 2,300 → 1,450.",
        "Margin a unit: −EGP 53 → +EGP 282.",
        "After ads: −EGP 232,700 → +EGP 258,900."
       ]
      ],
      [
       9,
       [
        "noon rejected the instalment text on the main image, so it ran on image 2.",
        "Facebook traced to about 40 orders."
       ]
      ],
      [
       10,
       "Under 400 units by day 3 means a coupon down to the floor; if that fails, stop generic search ads. Day 3 came in at 470."
      ]
     ]
    }
   },
   {
    "id": 24,
    "title": "A sofa brand, KSA",
    "sector": "home",
    "country": "ksa",
    "sit": [
     "s13"
    ],
    "found": "Buyers left at the delivery date. The price was fine.",
    "result": "Conversion 0.9% → 1.15%. SAR 14,200 more a month.",
    "nope": "The grey velvet sold 3 in 10 weeks.",
    "time": "5 min a day",
    "spark": [
     0.9,
     1.15
    ],
    "story": {
     "meta": "Sofas · KSA · own Zid store, Snapchat, Tamara and Tabby (pay in 4) · 10 weeks (3 Aug – 11 Oct 2026) · checkout drop-off",
     "s": [
      [
       0,
       "A sofa brand sells 62 sofas a month at around SAR 3,900 from about 6,900 store visits a month (0.9% conversion). Everything is made to order, with 21-day delivery."
      ],
      [
       1,
       [
        "<b>3 Aug · Zid checkout analytics:</b> 78% of carts abandoned at the delivery-date step.",
        "<b>5 Aug · Snapchat ad comments:</b> \"how long is delivery?\" was the top question.",
        "<b>6 Aug · rival product pages:</b> 7-day delivery on stocked models."
       ]
      ],
      [
       2,
       "Buyers left at the delivery date, not the price."
      ],
      [
       3,
       [
        "Stock the 4 best-selling models in Riyadh for 5-day delivery.",
        "\"SAR 975 × 4, no interest\" in the ads.",
        "The delivery date shown on the product page."
       ]
      ],
      [
       4,
       [
        "4 models."
       ]
      ],
      [
       5,
       [
        "6 models, because of cash."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> best-sellers, production time, warehouse.",
        "<b>Daily:</b> \"08:05 · 3 orders, all stocked models. Grey velvet: 0 in 3 weeks. Stop restocking it? Yes / No.\"",
        "<b>Weekly:</b> Snapchat creative, stock turns.",
        "<b>Monthly:</b> the White Friday plan."
       ]
      ],
      [
       7,
       [
        "Conversion: 0.9% → 1.15%. Orders: 62 → 79 a month.",
        "+17 × SAR 1,100 margin = SAR 18,700, minus SAR 4,500 of storage. <b>Net: about +SAR 14,200 a month.</b>",
        "SAR 96,000 of cash is now tied up in stock."
       ]
      ],
      [
       9,
       "The grey velvet sold 3 in 10 weeks and was marked down."
      ],
      [
       10,
       "Any stocked model not selling through in 60 days stops being stocked. The grey velvet did."
      ]
     ]
    }
   },
   {
    "id": 25,
    "title": "A gold-jewellery retailer, UAE",
    "sector": "gold",
    "country": "uae",
    "sit": [
     "s4"
    ],
    "found": "Buyers still wanted to buy on Dhanteras, at a lower weight.",
    "result": "269 bookings collected. Margin AED 34,400 → 47,900.",
    "nope": "When the gold rate dipped, 41 buyers took back their advances.",
    "time": "6 min a day",
    "spark": [
     34400,
     47900
    ],
    "story": {
     "meta": "22K gold jewellery · UAE · own website, Instagram, WhatsApp, stores · 6 weeks (15 Sep – 26 Oct 2025) · Diwali and Dhanteras",
     "s": [
      [
       0,
       "A jewellery retailer's online channel took 190 orders before Diwali last year. This year the gold rate was sharply higher (verify) and enquiries were slow."
      ],
      [
       1,
       [
        "<b>15 Sep · the daily 22K rate:</b> far above a year earlier.",
        "<b>18 Sep · Instagram comments:</b> \"too heavy for my budget this year\".",
        "<b>20 Sep · rival stores' posts:</b> lightweight 2–5 g pieces featured."
       ]
      ],
      [
       2,
       "Buyers still wanted to buy on Dhanteras, but at a lower weight."
      ],
      [
       3,
       [
        "A 2–5 g collection with a fixed making charge.",
        "Pre-book at today's rate with a 10% refundable advance.",
        "WhatsApp booking.",
        "Ads in Hindi, Malayalam and English."
       ]
      ],
      [
       4,
       [
        "all of it."
       ]
      ],
      [
       5,
       [
        "waiving the making charge under 3 g."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> making charges, booking rules, store capacity.",
        "<b>Daily:</b> \"08:00 · Rate down 1.2%. 14 bookings, 6 in Malayalam. Shift AED 300 to Malayalam ads? Yes / No.\"",
        "<b>Weekly:</b> pieces by weight.",
        "<b>Monthly:</b> the wedding season."
       ]
      ],
      [
       7,
       [
        "Bookings: 310. Collected: 269.",
        "Margin: AED 34,400 → AED 47,900 after ads (AED 260 a piece; ads AED 15,000 → AED 22,000).",
        "Cost per booking: AED 71."
       ]
      ],
      [
       9,
       "When the rate dipped, 41 buyers took back their refundable advances."
      ],
      [
       10,
       "Cost per booking above AED 90 for a language after week 2 means stop that language. None crossed it."
      ]
     ]
    }
   },
   {
    "id": 27,
    "title": "An apartment developer, New Cairo",
    "sector": "realestate",
    "country": "egypt",
    "sit": [
     "s12"
    ],
    "found": "Cheap lead forms bought volume. The best buyers wrote in, and nobody answered.",
    "result": "Cost per sale EGP 72,300 → 45,700.",
    "nope": "3 webinars for Gulf buyers drew 28 people and no sales.",
    "time": "6 min a day",
    "spark": [
     72300,
     45700
    ],
    "story": {
     "meta": "Off-plan apartments, New Cairo · Egypt and Egyptians in the Gulf · Meta lead forms, Property Finder Egypt, WhatsApp · 10 weeks (6 Apr – 14 Jun 2026) · lead quality",
     "s": [
      [
       0,
       "A developer buys 1,400 Meta leads a month at EGP 310 each. That turns into 42 meetings and 6 sales."
      ],
      [
       1,
       [
        "<b>6 Apr · CRM, weekly:</b> 61% of leads never reachable.",
        "<b>8 Apr · lead timestamps:</b> KSA and UAE leads arrive at 9–11pm Gulf time, after the sales team has gone home.",
        "<b>9 Apr · source report:</b> Property Finder enquiries become meetings four times as often.",
        "<b>10 Apr · ad comments:</b> \"when is handover?\""
       ]
      ],
      [
       2,
       "The cheap forms bought volume, not buyers. The best buyers wrote in when nobody answered."
      ],
      [
       3,
       [
        "WhatsApp-first ads with two qualifying questions (budget, timing).",
        "Call within 1 hour in the Gulf evening.",
        "A monthly construction-progress video.",
        "More Property Finder listings."
       ]
      ],
      [
       4,
       [
        "all of it."
       ]
      ],
      [
       5,
       [
        "showing the price per m² publicly."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> CRM export, sales hours, payment plans.",
        "<b>Daily:</b> \"08:06 · 21 leads, 14 reached, 3 meetings booked (2 Riyadh). Add a 10pm caller on Thursday? Yes / No.\"",
        "<b>Weekly:</b> meetings by source.",
        "<b>Monthly:</b> the handover-progress video."
       ]
      ],
      [
       7,
       [
        "Leads: 1,400 → 620. Meetings: 42 → 61. Sales: 6 → 8 a month.",
        "Spend: EGP 434,000 → EGP 365,800.",
        "Cost per sale: EGP 72,300 → EGP 45,700."
       ]
      ],
      [
       9,
       "Three Friday webinars for Gulf buyers drew 28 attendees and no sales."
      ],
      [
       10,
       "Cost per meeting above EGP 8,000 after week 4 means go back to the old forms at half the budget. It was EGP 6,000."
      ]
     ]
    }
   },
   {
    "id": 28,
    "title": "A beauty creator, KSA",
    "sector": "creators",
    "country": "ksa",
    "sit": [],
    "found": "Her audience asks for price and skin type. Her videos opened with neither.",
    "result": "Views 18,000 → 31,000. Income SAR 7,000 → 12,600.",
    "nope": "One sponsor didn't fit the series and didn't rebook.",
    "time": "12 min a day",
    "spark": [
     7000,
     12600
    ],
    "story": {
     "meta": "Skincare reviews · KSA · TikTok, Snapchat, Instagram · 10 weeks (4 May – 12 Jul 2026) · reach and brand deals",
     "s": [
      [
       0,
       "A licensed (Mawthooq) skincare creator has 64,000 TikTok followers, 18,000 median views and 6.1 seconds average watch time on 38-second videos. She earns about SAR 7,000 a month from 2 brand deals."
      ],
      [
       1,
       [
        "<b>4 May · TikTok analytics:</b> 71% leave in the first 3 seconds. The best hours are 10pm–1am.",
        "<b>5 May · comment themes:</b> 140 comments asking \"for oily skin, under SAR 100?\"",
        "<b>6 May · trends and competitor creators:</b> \"روتين صيف\" (summer routine) sounds, and the creators growing fastest run price-tier series."
       ]
      ],
      [
       2,
       "The audience asks for price and skin type, and her videos opened with neither."
      ],
      [
       3,
       [
        "A 2-second hook (\"Oily skin, under SAR 100: 3 that work\").",
        "A weekly series at 10:30pm.",
        "A media kit (64% KSA women aged 18–34)."
       ]
      ],
      [
       4,
       [
        "all of it."
       ]
      ],
      [
       5,
       [
        "a weekly live."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> analytics, deal history.",
        "<b>Daily:</b> \"08:01 · 3-second hold 41% (was 29%), 34k views. Pin the top comment? Yes / No.\"",
        "<b>Weekly:</b> series plan, sounds.",
        "<b>Monthly:</b> rate card."
       ]
      ],
      [
       7,
       [
        "Median views: 18,000 → 31,000. Watch time: 6.1 → 11.4 seconds. Followers: 64,000 → 79,000.",
        "Deals: 2 → 3 a month at SAR 3,500 → SAR 4,200. <b>Income: SAR 7,000 → SAR 12,600 a month</b>, with SAR 1,250 of product costs."
       ]
      ],
      [
       9,
       "Shorts copies got 1,100 views. One sponsored product didn't fit the series, and that brand didn't rebook."
      ],
      [
       10,
       "Median views not above 24,000 by week 5 means go back to the old format. They were 27,000."
      ]
     ]
    }
   },
   {
    "id": 29,
    "title": "A food creator, Egypt",
    "sector": "creators",
    "country": "egypt",
    "sit": [
     "s3"
    ],
    "found": "With prices high, viewers want the cost of the dish. Brands pay more for a series.",
    "result": "Views 48,000 → 86,000. Income EGP 45,000 → 72,000.",
    "nope": "Long YouTube videos stayed near 3,000 views.",
    "time": "12 min a day",
    "spark": [
     45000,
     72000
    ],
    "story": {
     "meta": "Home cooking · Egypt · Facebook, TikTok, YouTube · 8 weeks (2 Feb – 29 Mar 2026) · Ramadan",
     "s": [
      [
       0,
       "A home-cooking creator has 210,000 Facebook followers, about 48,000 views a video and 22,000 on TikTok. Last Ramadan she earned EGP 45,000 from single brand posts."
      ],
      [
       1,
       [
        "<b>2 Feb · Facebook insights:</b> suhoor and iftar posts get 2.3× the shares. Views peak 2–3 hours before iftar and after 11pm.",
        "<b>3 Feb · trending topics:</b> \"أكلات رمضان اقتصادية\" (budget Ramadan meals).",
        "<b>4 Feb · comment themes:</b> \"how much does this dish cost?\"",
        "<b>5 Feb · competitor creators:</b> rivals sell 30-day series to brands, not single posts."
       ]
      ],
      [
       2,
       "With prices high, viewers want the cost of the dish, and brands pay more for a series than for posts."
      ],
      [
       3,
       [
        "An \"iftar for 4 under EGP 300\" series with the cost on screen, posted at 3pm Cairo time and recut for TikTok.",
        "Pitch a 30-day series package to two food brands."
       ]
      ],
      [
       4,
       [
        "both."
       ]
      ],
      [
       5,
       [
        "daily YouTube Shorts."
       ]
      ],
      [
       6,
       [
        "<b>Day 1:</b> analytics, past deals.",
        "<b>Daily:</b> \"08:03 · Day 6 dish 112k views. 40 comments argue Alexandria prices. Add a 'Cairo prices' line? Yes / No.\"",
        "<b>Weekly:</b> dish plan, sponsor slots.",
        "<b>Monthly:</b> Eid and Mother's Day."
       ]
      ],
      [
       7,
       [
        "Facebook views: 48,000 → 86,000. TikTok: 22,000 → 41,000.",
        "Facebook followers: 210,000 → 238,000.",
        "Brand income: EGP 45,000 → EGP 72,000, against EGP 8,300 of costs."
       ]
      ],
      [
       9,
       [
        "Long YouTube videos stayed at around 3,000 views.",
        "The cost line started arguments over prices in different governorates."
       ]
      ],
      [
       10,
       "Series views not 30% above the old average by day 10 of Ramadan means go back to the old format. They were 60% above."
      ]
     ]
    }
   }
  ]
 },
 "ru": {
  "ui": {
   "h": "Бизнес, похожий на ваш.",
   "disc": "Смоделированные кейсы: типичные ситуации и цифры российского рынка, а не истории конкретных клиентов. Реальные истории добавляем с согласия клиентов.",
   "g": [
    "Отрасль",
    "Регион",
    "Ситуация"
   ],
   "labels": [
    "Нашла",
    "Результат",
    "Не сработало",
    "Ваше время"
   ],
   "open": "Открыть кейс целиком →",
   "count": [
    "{n} кейс",
    "{n} кейса",
    "{n} кейсов"
   ],
   "clear": "Сбросить фильтры",
   "empty": "Ни один кейс не подходит под все три фильтра. Уберите один или спросите её о своей ситуации.",
   "emptyB": "Спросить USHA вживую →",
   "story": [
    "Ситуация",
    "Что она прочитала",
    "Находка",
    "Ход",
    "Вы сказали «да»",
    "Вы сказали «нет»",
    "Ваш ритм",
    "Результат",
    "Расчёт",
    "Что не сработало",
    "Стоп-критерий",
    "Ваше время"
   ],
   "close": "Закрыть",
   "next": "Следующий кейс →",
   "last": [
    "Похожий бизнес? Спросите её о своём.",
    "Спросить USHA вживую"
   ],
   "spark": "До и после, в одном масштабе.",
   "tip": "Смоделированный кейс: типичная ситуация и цифры этого рынка, а не история конкретного клиента. Реальные истории добавляем с согласия клиентов."
  },
  "f": {
   "sector": [
    [
     "all",
     "Все"
    ],
    [
     "fmcg",
     "FMCG"
    ],
    [
     "fashion",
     "Одежда и обувь"
    ],
    [
     "ecom",
     "Онлайн-продажи"
    ],
    [
     "food",
     "Еда и напитки"
    ],
    [
     "beauty",
     "Красота"
    ],
    [
     "electronics",
     "Электроника"
    ],
    [
     "clinics",
     "Клиники"
    ],
    [
     "creators",
     "Блогеры"
    ]
   ],
   "country": [
    [
     "all",
     "Все"
    ],
    [
     "moscow",
     "Москва"
    ],
    [
     "spb",
     "Санкт-Петербург"
    ],
    [
     "russia",
     "Вся Россия"
    ]
   ],
   "sit": [
    [
     "s1",
     "Ценовая война"
    ],
    [
     "s2",
     "Рост затрат и комиссий"
    ],
    [
     "s3",
     "Сезоны и праздники"
    ],
    [
     "s4",
     "Распродажи и акции"
    ],
    [
     "s5",
     "Возвраты и размеры"
    ],
    [
     "s6",
     "Отзывы"
    ],
    [
     "s7",
     "Остатки и позиции"
    ],
    [
     "s8",
     "Реклама дорожает"
    ],
    [
     "s9",
     "Блогеры"
    ],
    [
     "s10",
     "Новый маркетплейс"
    ],
    [
     "s11",
     "Сервисы доставки"
    ],
    [
     "s12",
     "Заявки"
    ],
    [
     "s13",
     "Оформление заказа"
    ]
   ]
  },
  "cards": [
   {
    "id": 5,
    "title": "Творожные десерты в дарксторах, Москва",
    "sector": "fmcg",
    "country": "moscow",
    "sit": [
     "s7",
     "s11"
    ],
    "found": "Три поставки в неделю: в начале недели товар списывают, к выходным его нет на полке.",
    "result": "Списания 11% → 7%. +108 800 ₽ в месяц после затрат на доставку.",
    "nope": "Упаковка 200 г по-прежнему даёт треть списаний.",
    "time": "4 мин в день",
    "spark": [
     11,
     7
    ]
   },
   {
    "id": 31,
    "title": "Чай в пирамидках на Ozon и в федеральной сети",
    "sector": "fmcg",
    "country": "russia",
    "sit": [
     "s2"
    ],
    "found": "При 1,6 пачки на магазин в неделю вход в сеть окупается около двух месяцев. Новую комиссию дешевле закрыть большой пачкой на Ozon.",
    "result": "Вернули 77% того, что съела комиссия. Пилоту в 150 магазинах осталось 45 520 ₽ до окупаемости входа.",
    "nope": "Промо-неделя продала 3,4 пачки на магазин, следующие две недели по 0,7: покупатели запаслись.",
    "time": "6 мин в день",
    "spark": [
     546000,
     671500
    ]
   },
   {
    "id": 32,
    "title": "Гель для стирки на Wildberries",
    "sector": "fmcg",
    "country": "russia",
    "sit": [
     "s2",
     "s7"
    ],
    "found": "СПП от продавца не зависит, а логистика зависит. В Москве гель зарабатывал, за Волгой терял.",
    "result": "Индекс локализации 41% → 74%. Логистика 168 → 127 ₽ за бутылку. Маржа в месяц 270 400 → 506 850 ₽.",
    "nope": "Слот в Новосибирске подорожал до x3 (+23 000 ₽), и 600 бутылок ждали приёмки 9 дней.",
    "time": "4 мин в день",
    "spark": [
     270400,
     506850
    ]
   },
   {
    "id": 33,
    "title": "Детские батончики на Яндекс Маркете, в Лавке и Самокате, Москва",
    "sector": "fmcg",
    "country": "moscow",
    "sit": [
     "s3",
     "s11"
    ],
    "found": "В Лавке берут один батончик, когда ребёнок голоден сейчас. На Маркете покупают запас на неделю, и буст там всё ещё платил ставку запуска.",
    "result": "Маржа: 134 900 ₽ в июле, 274 600 ₽ в августе. Без изменений, по её оценке, было бы 165 000 ₽.",
    "nope": "Экспресс дал только 9% заказов на Маркете в августе, и большая часть запаса так и лежит.",
    "time": "5 мин в день",
    "spark": [
     134900,
     274600
    ]
   },
   {
    "id": 10,
    "title": "Мужская обувь на Ozon и Wildberries",
    "sector": "fashion",
    "country": "russia",
    "sit": [
     "s2",
     "s5"
    ],
    "found": "Комиссию не отменить, а возвраты по полноте можно убрать. Реклама оплачивала пары, которые потом возвращались.",
    "result": "Возвраты 28% → 20%. Маржа с пары 552 → 652 ₽, в месяц 496 800 → 625 920 ₽.",
    "nope": "Широкая серия продала 210 пар из 600.",
    "time": "5 мин в день",
    "spark": [
     496800,
     625920
    ]
   },
   {
    "id": 11,
    "title": "Трикотаж на Wildberries",
    "sector": "fashion",
    "country": "russia",
    "sit": [
     "s6",
     "s5"
    ],
    "found": "Одна партия с новой фабрики маломерит на размер. Рейтинг и реклама расплачивались за брак.",
    "result": "Выкуп 36% → 41%, рейтинг 4,7. Вернули 57% потерянной маржи.",
    "nope": "Через 8 недель ИИ-сводка отзывов WB всё ещё показывала «маломерит».",
    "time": "7 мин в день",
    "spark": [
     36,
     41
    ]
   },
   {
    "id": 34,
    "title": "Нарядные платья на Wildberries: 11.11, Новый год, 8 Марта",
    "sector": "fashion",
    "country": "russia",
    "sit": [
     "s4",
     "s3"
    ],
    "found": "11.11 только сдвигал продажи раньше и приносил заказы, которые потом возвращались. Деньги делают декабрь и 8 Марта, когда платье ищут без скидки.",
    "result": "С 11.11 до Нового года маржа +27% при заказах −9%. Маржа к 8 Марта +51%.",
    "nope": "Два из шести нарядных платьев продали в декабре меньше 200 штук каждое при ДРР 26%.",
    "time": "7 мин в день",
    "spark": [
     1090000,
     1380000
    ]
   },
   {
    "id": 35,
    "title": "Мужская одежда: из Instagram во ВКонтакте",
    "sector": "fashion",
    "country": "russia",
    "sit": [
     "s8",
     "s9"
    ],
    "found": "Почти весь охват держался на двух ограниченных площадках, а платные посты грозили штрафами. Тех же мужчин 28–45 лет можно найти во ВКонтакте.",
    "result": "Доля визитов из VK 9% → 31%. Маржа −3%, риск штрафов снят.",
    "nope": "Зеркало канала в MAX за 10 недель набрало 1 900 подписчиков и 0,4% заказов.",
    "time": "6 мин в день",
    "spark": [
     9,
     31
    ]
   },
   {
    "id": 36,
    "title": "Домашние комплекты на Lamoda",
    "sector": "fashion",
    "country": "russia",
    "sit": [
     "s5"
    ],
    "found": "Комплект заказывали сразу в двух размерах: сетка только в буквах, а модель большемерит.",
    "result": "Выкуп 47% → 58%. Около +140 340 ₽ в месяц.",
    "nope": "3XL шьёт другой цех, и его по-прежнему возвращают в 49% случаев.",
    "time": "5 мин в день",
    "spark": [
     47,
     58
    ]
   },
   {
    "id": 16,
    "title": "Термосы на Ozon перед Новым годом",
    "sector": "ecom",
    "country": "russia",
    "sit": [
     "s7",
     "s3"
    ],
    "found": "Спрос был на месте. Товар лежал не в тех городах, и реклама на востоке платила за клики, которые не могли стать заказами.",
    "result": "В месяц задержки 2 450 заказов против 2 100 без действий. Около +28 700 ₽ чистыми.",
    "nope": "Автоакция Ozon продала 210 термосов с маржой 70 ₽ вместо 233 ₽: минус 34 230 ₽.",
    "time": "6 мин в день",
    "spark": [
     2100,
     2450
    ]
   },
   {
    "id": 37,
    "title": "Керамическая посуда, свой интернет-магазин",
    "sector": "ecom",
    "country": "russia",
    "sit": [
     "s8",
     "s13"
    ],
    "found": "Бюджет Директа уходил на запросы вроде «тарелки дешево», а настоящие покупатели бросали корзину, увидев доставку за 690 ₽.",
    "result": "Стоимость заказа 2 180 → 1 780 ₽. +109 500 ₽ в месяц при том же бюджете.",
    "nope": "Ретаргетинг стоил 3 100 ₽ за заказ, больше, чем заказ приносит. Отключили на 5-й неделе.",
    "time": "4 мин в день",
    "spark": [
     2180,
     1780
    ]
   },
   {
    "id": 38,
    "title": "Сыворотка с витамином С на Ozon",
    "sector": "beauty",
    "country": "russia",
    "sit": [
     "s6"
    ],
    "found": "19 одинаковых отзывов «вызвала аллергию» за 48 часов через 2 пункта выдачи. Такие Ozon удаляет, если показать доказательства.",
    "result": "Ozon удалил 14 из 19. Рейтинг 4,4 → 4,7, место в поиске 11 → 5. Вернули 71% потерянной маржи.",
    "nope": "Ozon отреагировал только на одну из трёх карточек конкурентов с накрученными отзывами.",
    "time": "6 мин в день",
    "spark": [
     4.4,
     4.7
    ]
   },
   {
    "id": 39,
    "title": "Органайзеры для хранения: выход на Яндекс Маркет",
    "sector": "ecom",
    "country": "russia",
    "sit": [
     "s2",
     "s10"
    ],
    "found": "На Маркете коробка приносит в 4 раза больше, чем на WB, но только когда у карточки есть отзывы.",
    "result": "Маркет: 16% продаж и 44% маржи. Маржа в месяц 307 500 → 551 100 ₽.",
    "nope": "Четыре большие коробки проиграли основное предложение продавцу с экспресс-доставкой.",
    "time": "5 мин в день",
    "spark": [
     307500,
     551100
    ]
   },
   {
    "id": 21,
    "title": "Протеиновые батончики на Wildberries и Ozon",
    "sector": "food",
    "country": "russia",
    "sit": [
     "s2",
     "s1"
    ],
    "found": "Цена для покупателя выросла, потому что WB убрал свою скидку. Конкурировать ценой теперь выгоднее на Ozon.",
    "result": "Заказы на WB 2 900 → 3 300, на Ozon 900 → 1 350. Вернули 36% потерянной маржи.",
    "nope": "40% покупателей набора из 6 раньше брали упаковку из 12.",
    "time": "5 мин в день",
    "spark": [
     2900,
     3300
    ]
   },
   {
    "id": 40,
    "title": "Поке на доставке, Санкт-Петербург",
    "sector": "food",
    "country": "spb",
    "sit": [
     "s11",
     "s4"
    ],
    "found": "Скидка за счёт кухни покупала разовые заказы. Постоянные клиенты приходили в обед и платили полную цену.",
    "result": "Маржа с заказа 64 → 98 ₽. +196 560 ₽ в месяц.",
    "nope": "Добавили 15 г рыбы: +31 ₽ на боул, а жалоб «мало рыбы» стало 9 вместо 14 на 60 отзывов.",
    "time": "5 мин в день",
    "spark": [
     64,
     98
    ]
   },
   {
    "id": 41,
    "title": "Шоколад в подарок: корпоративный Новый год",
    "sector": "food",
    "country": "russia",
    "sit": [
     "s3"
    ],
    "found": "Компании выбирают новогодние подарки с конца октября до середины ноября. Бренд отвечал им в декабре, когда производство уже было загружено.",
    "result": "Корпоративных коробок 380 → 1 640. Маржа сезона +70%.",
    "nope": "Из 212 заявок с Директа 151 просили коробку дешевле 500 ₽, а таких бренд не делает.",
    "time": "8 мин в день",
    "spark": [
     380,
     1640
    ]
   },
   {
    "id": 42,
    "title": "Пельмени ручной лепки в январе",
    "sector": "food",
    "country": "russia",
    "sit": [
     "s7",
     "s4"
    ],
    "found": "Дефицитом были январские мощности, а промо в сети тратило их с самой низкой маржой.",
    "result": "Дней без товара на Ozon Fresh 11 → 0. Маржа января +23% при объёме на 11% меньше.",
    "nope": "После урезанного промо сеть отдала февральское место в листовке конкуренту.",
    "time": "4 мин в день",
    "spark": [
     11,
     0
    ]
   },
   {
    "id": 43,
    "title": "Зарядки и кабели на WB и Ozon: Чёрная пятница",
    "sector": "electronics",
    "country": "russia",
    "sit": [
     "s4",
     "s7"
    ],
    "found": "Регионы терялись на сроке доставки: в Сибирь 6–8 дней. Скидка −20% на всё досталась бы в основном московским заказам, которые пришли бы и так.",
    "result": "Около +355 100 ₽ за ноябрь против сценария «−20% на всё». Пауэрбанки +61% в неделю Чёрной пятницы.",
    "nope": "На Дальний Восток отправили 600 штук, в ноябре продали 140. Остатка хватит на 80 дней.",
    "time": "6 мин в день",
    "spark": [
     1720000,
     2150000
    ]
   },
   {
    "id": 26,
    "title": "Стоматология, импланты, Москва",
    "sector": "clinics",
    "country": "moscow",
    "sit": [
     "s12"
    ],
    "found": "Треть платных заявок оставалась без ответа: после 19:00 не брали 40% звонков.",
    "result": "Стоимость консультации 17 550 → 12 100 ₽. Около +143 000 ₽ в месяц.",
    "nope": "Лид-формы VK дали 60 заявок и 2 записи. Их остановили.",
    "time": "7 мин в день",
    "spark": [
     17550,
     12100
    ]
   },
   {
    "id": 30,
    "title": "Блогер о ремонте: из Telegram во ВКонтакте",
    "sector": "creators",
    "country": "russia",
    "sit": [
     "s9"
    ],
    "found": "Аудиторию можно пересобрать во ВКонтакте. Деньги так быстро не переедут: рекламодатели там платят меньше за просмотр.",
    "result": "Просмотры клипа 40 000 → 210 000. Доход 120 000 → 114 000 ₽ в месяц.",
    "nope": "Просмотры выросли в пять с лишним раз, доход нет. Копии на Rutube собирали 2 000–4 000 просмотров.",
    "time": "8 мин в день",
    "spark": [
     40000,
     210000
    ]
   }
  ]
 },
 "ar": {
  "ui": {
   "h": "أعمال تشبه عملك.",
   "disc": "حالات توضيحية: مواقف وأرقام معتادة في كل سوق. نضيف قصص العملاء الحقيقية بعد إذنهم.",
   "g": [
    "القطاع",
    "الدولة",
    "التحدي"
   ],
   "labels": [
    "ما رصدته",
    "النتيجة",
    "ما لم ينجح",
    "وقتك"
   ],
   "open": "اقرأ القصة كاملة ←",
   "count": [
    "الحالات: {n}"
   ],
   "clear": "امسح الفلاتر",
   "empty": "لا توجد حالة تطابق الفلاتر الثلاثة. أزل فلترًا واحدًا، أو اسألها عن وضعك بالتحديد.",
   "emptyB": "اسأل USHA مباشرة ←",
   "story": [
    "الوضع",
    "ما قرأته",
    "ما رصدته",
    "الخطوة",
    "ما وافقتَ عليه",
    "ما رفضته",
    "إيقاعك",
    "النتيجة",
    "الحسابات",
    "ما لم ينجح",
    "نقطة التوقف",
    "وقتك"
   ],
   "close": "إغلاق",
   "next": "الحالة التالية ←",
   "last": [
    "عملك يشبه هذا؟ اسألها عنه.",
    "اسأل USHA مباشرة"
   ],
   "spark": "قبل وبعد، بالمقياس الحقيقي.",
   "tip": "حالة توضيحية: موقف وأرقام معتادة في هذا السوق. نضيف قصص العملاء الحقيقية بعد إذنهم."
  },
  "f": {
   "sector": [
    [
     "all",
     "الكل"
    ],
    [
     "fmcg",
     "السلع الاستهلاكية"
    ],
    [
     "fashion",
     "الأزياء"
    ],
    [
     "ecom",
     "التجارة الإلكترونية"
    ],
    [
     "food",
     "الأغذية والمشروبات"
    ],
    [
     "beauty",
     "التجميل"
    ],
    [
     "electronics",
     "الإلكترونيات"
    ],
    [
     "home",
     "المنزل"
    ],
    [
     "gold",
     "الذهب"
    ],
    [
     "realestate",
     "العقارات"
    ],
    [
     "creators",
     "صنّاع المحتوى"
    ]
   ],
   "country": [
    [
     "all",
     "الكل"
    ],
    [
     "uae",
     "الإمارات"
    ],
    [
     "ksa",
     "السعودية"
    ],
    [
     "egypt",
     "مصر"
    ]
   ],
   "sit": [
    [
     "s1",
     "حرب أسعار"
    ],
    [
     "s2",
     "ارتفاع التكلفة"
    ],
    [
     "s3",
     "رمضان والعيد"
    ],
    [
     "s4",
     "مواسم التخفيضات"
    ],
    [
     "s5",
     "المرتجعات والمقاسات"
    ],
    [
     "s6",
     "نفاد المخزون والترتيب"
    ],
    [
     "s7",
     "إعلانات أغلى"
    ],
    [
     "s8",
     "صنّاع المحتوى"
    ],
    [
     "s9",
     "منصة بيع جديدة"
    ],
    [
     "s10",
     "تطبيقات التوصيل"
    ],
    [
     "s11",
     "الإلغاءات"
    ],
    [
     "s12",
     "العملاء المحتملون"
    ],
    [
     "s13",
     "إتمام الشراء"
    ]
   ]
  },
  "cards": [
   {
    "id": 1,
    "title": "علامة سناك على noon، السعودية",
    "sector": "fmcg",
    "country": "ksa",
    "sit": [
     "s1"
    ],
    "found": "المنافس كان يصرّف مخزونًا قريب الانتهاء، وسعره المنخفض سينتهي معه.",
    "result": "السعر بقي 39 ر.س. العودة إلى المركز 3 خلال 6 أسابيع. 7,674 ر.س ربحًا، مقابل 4,704 ر.س لو جارت المنافس.",
    "nope": "صورة «مخبوز هذا الشهر». النقرات لم تتحرّك.",
    "time": "6 دقائق يوميًا",
    "spark": [
     265,
     290
    ]
   },
   {
    "id": 2,
    "title": "علامة شاي مثلّج، الإمارات",
    "sector": "fmcg",
    "country": "uae",
    "sit": [
     "s8"
    ],
    "found": "المشترون روّاد صالات رياضية وعمّال ورديات، يطلبون العلب الباردة عبر التطبيقات بين 2 و5 عصرًا.",
    "result": "العلب +15%. تكلفة العلبة الإضافية 3.71 د.إ بعد أن كانت 27.80 د.إ. وفي الأسبوع 8 كان ينقصها 10,420 د.إ لتسترد ما أنفقته.",
    "nope": "خمسة صنّاع محتوى لايف ستايل جلبوا 14 كود خصم مجتمعين.",
    "time": "7 دقائق يوميًا",
    "spark": [
     27.8,
     3.71
    ]
   },
   {
    "id": 3,
    "title": "علامة سائل لغسيل الصحون، مصر",
    "sector": "fmcg",
    "country": "egypt",
    "sit": [
     "s2"
    ],
    "found": "المنافسون صغّروا عبواتهم ولاحظ المشترون. ورفع السعر بوضوح بقي أرخص لكل مل.",
    "result": "65 ج.م للعبوة الكاملة 750 مل. والهامش عاد إلى 680,000 ج.م شهريًا.",
    "nope": "البقالات الصغيرة لم تجد مكانًا على الرف لكيس الـ1.25 لتر.",
    "time": "5 دقائق يوميًا",
    "spark": [
     512400,
     680040
    ]
   },
   {
    "id": 4,
    "title": "علامة معطّر للجسم، السعودية",
    "sector": "fmcg",
    "country": "ksa",
    "sit": [
     "s4"
    ],
    "found": "كل عرض ترويجي كلّف 46,000 ر.س مقابل 18,000 ر.س من الهامش. كان يسحب مبيعات الأسابيع التالية إلى أسبوع العرض.",
    "result": "العروض من 12 إلى 6 سنويًا. نحو 38,600 ر.س إضافية في 12 أسبوعًا.",
    "nope": "منافس أخذ المساحة الفارغة في نشرة العروض، فخسرت العلامة 6% من حصتها في تلك السلسلة.",
    "time": "5 دقائق يوميًا",
    "spark": [
     12,
     6
    ]
   },
   {
    "id": 6,
    "title": "علامة علب تمور للهدايا، السعودية",
    "sector": "fmcg",
    "country": "ksa",
    "sit": [
     "s3"
    ],
    "found": "لا سعر يناسب الهايبرماركت، ومواعيد رفوف رمضان وطلبات الشركات على وشك أن تُغلق.",
    "result": "العلب من 9,000 إلى 14,600. الهامش +10%.",
    "nope": "سلسلة واحدة باعت 55% فقط. و900 علبة تعود بعد العيد.",
    "time": "8 دقائق يوميًا",
    "spark": [
     9000,
     14600
    ]
   },
   {
    "id": 7,
    "title": "علامة عبايات، السعودية",
    "sector": "fashion",
    "country": "ksa",
    "sit": [
     "s3",
     "s5"
    ],
    "found": "المشتريات يخترن العباية حسب الطول، والعلامة تبيع S وM وL.",
    "result": "مرتجعات Namshi من 31% إلى 22%. نحو 21,300 ر.س إضافية.",
    "nope": "تعديل الطول استغرق 5 أيام، فوصلت 40 طلبًا بعد العيد.",
    "time": "8 دقائق يوميًا",
    "spark": [
     31,
     22
    ]
   },
   {
    "id": 8,
    "title": "علامة ملابس رياضية على Amazon.ae وnoon، الإمارات",
    "sector": "fashion",
    "country": "uae",
    "sit": [
     "s1"
    ],
    "found": "مخزون قديم من منافذ التصفية تسرّب إلى بائعين آخرين. ومجاراتهم كانت ستخفض سعر التشكيلة كلها.",
    "result": "حصة صندوق الشراء من 38% إلى 61%. نحو 6,400 د.إ إضافية شهريًا.",
    "nope": "طلب حماية العلامة على noon كان ما زال مفتوحًا في الأسبوع 8.",
    "time": "5 دقائق يوميًا",
    "spark": [
     38,
     61
    ]
   },
   {
    "id": 9,
    "title": "علامة ملابس أطفال، مصر",
    "sector": "fashion",
    "country": "egypt",
    "sit": [
     "s5"
    ],
    "found": "جدول المقاسات كان بالعمر، والأطفال ينمون بالطول.",
    "result": "المرتجعات من 22% إلى 16%. 59,800 ج.م إضافية في الموسم.",
    "nope": "عرض الـ3 قمصان بولو وصل إلى 11% فقط من الطلبات.",
    "time": "6 دقائق يوميًا",
    "spark": [
     22,
     16
    ]
   },
   {
    "id": 12,
    "title": "علامة مفارش سرير بمتجرها الخاص، مصر",
    "sector": "ecom",
    "country": "egypt",
    "sit": [
     "s7"
    ],
    "found": "أسعار الإعلانات ارتفعت على الجميع. أما رفض الاستلام عند الدفع نقدًا فكان مشكلة العلامة نفسها: كل طلب مُسلَّم كلّفها 309 ج.م.",
    "result": "رفض الاستلام من 24% إلى 15%. 17,500 ج.م إضافية شهريًا.",
    "nope": "العربون خفّض طلبات الصعيد 35%، فأُلغي.",
    "time": "8 دقائق يوميًا",
    "spark": [
     24,
     15
    ]
   },
   {
    "id": 13,
    "title": "صندوق اشتراك لطعام الحيوانات الأليفة، الإمارات",
    "sector": "ecom",
    "country": "uae",
    "sit": [
     "s11"
    ],
    "found": "أصحاب القطط ألغوا لأن الصندوق يرسل أكثر مما تأكله القطة.",
    "result": "الإلغاءات من 11% إلى 7.5% شهريًا. وكل عميل يبقى أطول بـ32%. وربح هذا الشهر −2.6%.",
    "nope": "ربح المدى القصير انخفض. والمكسب يحتاج أن تبقى الإلغاءات منخفضة.",
    "time": "4 دقائق يوميًا",
    "spark": [
     11,
     7.5
    ]
   },
   {
    "id": 14,
    "title": "بائع أدوات منزل ومطبخ على noon، الإمارات",
    "sector": "ecom",
    "country": "uae",
    "sit": [
     "s6"
    ],
    "found": "noon ترتّب المنتجات حسب المبيعات الأخيرة. فاشترِ تلك المبيعات بالإعلانات، وحافظ على السعر.",
    "result": "من المركز 19 إلى 3 دون خفض السعر. 4,170 د.إ إضافية.",
    "nope": "إعلانات «صندوق تخزين» أهدرت 410 د.إ.",
    "time": "4 دقائق يوميًا",
    "spark": [
     19,
     3
    ]
   },
   {
    "id": 15,
    "title": "بائع معدات رياضة منزلية جديد على Amazon.sa، السعودية",
    "sector": "ecom",
    "country": "ksa",
    "sit": [
     "s9"
    ],
    "found": "صفحات منتجات بعربية أصيلة كسبت البحث بتكلفة قليلة. والمنتجات الثقيلة لم تحتمل الرسوم.",
    "result": "من 0 إلى 41,000 ر.س شهريًا. تكلفة الإعلان من المبيعات من 42% إلى 14%.",
    "nope": "الدمبلز خسرت 14 ر.س في القطعة، فسُحبت.",
    "time": "6 دقائق يوميًا",
    "spark": [
     0,
     41000
    ]
   },
   {
    "id": 17,
    "title": "مطبخ سحابي (توصيل فقط)، دبي",
    "sector": "food",
    "country": "uae",
    "sit": [
     "s10"
    ],
    "found": "Talabat فسّرت إيقاف الطلبات وقت الغداء على أنه عدم التزام. والخروج من الخدمة كلّف من الترتيب أكثر مما وفّر من طلبات متأخرة.",
    "result": "الترتيب من 22 إلى 9. الطلبات من 95 إلى 112 يوميًا.",
    "nope": "عرض Talabat Pro بخصم 20% اقترحته هي. أُوقف في الأسبوع 5.",
    "time": "6 دقائق يوميًا",
    "spark": [
     95,
     112
    ]
   },
   {
    "id": 18,
    "title": "مطبخ سحابي (توصيل فقط)، القاهرة",
    "sector": "food",
    "country": "egypt",
    "sit": [
     "s10"
    ],
    "found": "قائمة طويلة مسعّرة كأنها لمطعم بصالة، على تطبيق يأخذ خُمس كل طلب.",
    "result": "هامش الطلب من 58 إلى 71 ج.م. والطلبات +15% يوميًا.",
    "nope": "وجبة العائلة لم تنجح.",
    "time": "4 دقائق يوميًا",
    "spark": [
     58,
     71
    ]
   },
   {
    "id": 19,
    "title": "علامة بن، السعودية",
    "sector": "food",
    "country": "ksa",
    "sit": [
     "s8"
    ],
    "found": "من يحضّرون القهوة في البيت يثقون بأمثالهم. والبن المُهدى يصلهم بتكلفة أقل من المنشورات المدفوعة.",
    "result": "15,650 ر.س إضافية.",
    "nope": "42 من 60 أُهدوا البن لم ينشروا شيئًا.",
    "time": "5 دقائق يوميًا",
    "spark": [
     1300,
     1520
    ]
   },
   {
    "id": 20,
    "title": "علامة جرانولا، مصر",
    "sector": "food",
    "country": "egypt",
    "sit": [
     "s2"
    ],
    "found": "سعر العبوة كان فوق الحد الذي يقبله المتسوّق. والمنتج نفسه لا عيب فيه.",
    "result": "العبوات من 3,200 إلى 4,100 شهريًا. 7,500 ج.م إضافية شهريًا.",
    "nope": "ثلاجات 12 صالة رياضية باعت 6 عبوات أسبوعيًا مجتمعة.",
    "time": "4 دقائق يوميًا",
    "spark": [
     3200,
     4100
    ]
   },
   {
    "id": 22,
    "title": "علامة عطور عود، الإمارات",
    "sector": "beauty",
    "country": "uae",
    "sit": [
     "s3"
    ],
    "found": "أطقم الهدايا نزلت متأخرة، وبسعر واحد أعلى من ميزانية معظم من يشترون الهدايا.",
    "result": "المباع من المخزون من 73% إلى 90%. الربح ثابت. ومخزون متبقٍّ أقل بـ30,800 د.إ.",
    "nope": "صفحة طلبات الشركات جلبت 3 طلبات.",
    "time": "10 دقائق يوميًا",
    "spark": [
     73,
     90
    ]
   },
   {
    "id": 23,
    "title": "علامة قلّايات هوائية، مصر",
    "sector": "electronics",
    "country": "egypt",
    "sit": [
     "s4"
    ],
    "found": "المتسوّقون قارنوا القسط الشهري، ونسبة الخصم بالكاد لفتت انتباههم.",
    "result": "الجمعة البيضاء انتقلت من خسارة 232,700 ج.م إلى ربح 258,900 ج.م، ببيع وحدات أقل بـ37%.",
    "nope": "رفضت noon نص التقسيط على الصورة الرئيسية.",
    "time": "8 دقائق يوميًا",
    "spark": [
     -232700,
     258900
    ]
   },
   {
    "id": 24,
    "title": "علامة كنب، السعودية",
    "sector": "home",
    "country": "ksa",
    "sit": [
     "s13"
    ],
    "found": "المشترون يغادرون عند خطوة موعد التوصيل. والسعر لم يكن المشكلة.",
    "result": "نسبة التحويل من 0.9% إلى 1.15%. 14,200 ر.س إضافية شهريًا.",
    "nope": "المخمل الرمادي باع 3 قطع في 10 أسابيع.",
    "time": "5 دقائق يوميًا",
    "spark": [
     0.9,
     1.15
    ]
   },
   {
    "id": 25,
    "title": "تاجر مجوهرات ذهب، الإمارات",
    "sector": "gold",
    "country": "uae",
    "sit": [
     "s4"
    ],
    "found": "المشترون ما زالوا يريدون الشراء في ذانتيراس (موسم ذهب ديوالي)، لكن بوزن أخف.",
    "result": "استلم المشترون 269 حجزًا. والهامش من 34,400 إلى 47,900 د.إ.",
    "nope": "حين انخفض سعر الذهب، استردّ 41 مشتريًا دفعاتهم المقدّمة.",
    "time": "6 دقائق يوميًا",
    "spark": [
     34400,
     47900
    ]
   },
   {
    "id": 27,
    "title": "مطوّر شقق، القاهرة الجديدة",
    "sector": "realestate",
    "country": "egypt",
    "sit": [
     "s12"
    ],
    "found": "نماذج التسجيل الرخيصة جلبت أعدادًا لا مشترين. وأفضل المشترين كانوا يراسلون ليلًا، ولا أحد يرد.",
    "result": "تكلفة البيعة الواحدة من 72,300 إلى 45,700 ج.م.",
    "nope": "3 ندوات أونلاين لمشتري الخليج جذبت 28 شخصًا، ولا بيعة واحدة.",
    "time": "6 دقائق يوميًا",
    "spark": [
     72300,
     45700
    ]
   },
   {
    "id": 28,
    "title": "صانعة محتوى تجميل، السعودية",
    "sector": "creators",
    "country": "ksa",
    "sit": [],
    "found": "جمهورها يسأل عن السعر ونوع البشرة، وفيديوهاتها لا تبدأ بأيٍّ منهما.",
    "result": "المشاهدات من 18,000 إلى 31,000. الدخل من 7,000 إلى 12,600 ر.س.",
    "nope": "راعٍ واحد لم يناسب السلسلة، فلم يجدّد.",
    "time": "12 دقيقة يوميًا",
    "spark": [
     7000,
     12600
    ]
   },
   {
    "id": 29,
    "title": "صانع محتوى طبخ، مصر",
    "sector": "creators",
    "country": "egypt",
    "sit": [
     "s3"
    ],
    "found": "مع غلاء الأسعار، يريد المشاهدون معرفة تكلفة الطبق. والعلامات تدفع أكثر مقابل سلسلة.",
    "result": "المشاهدات من 48,000 إلى 86,000. الدخل من 45,000 إلى 72,000 ج.م.",
    "nope": "فيديوهات YouTube الطويلة بقيت قرب 3,000 مشاهدة.",
    "time": "12 دقيقة يوميًا",
    "spark": [
     45000,
     72000
    ]
   }
  ]
 }
};
