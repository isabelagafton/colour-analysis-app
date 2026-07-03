// ══════════════════════════════════════════════════════════════════════════════
// EXTENDED PALETTE DATA
// ══════════════════════════════════════════════════════════════════════════════

const EXTENDED = {
  lightSpring: [
    // Neutrals
    {key:'ivory', label:'Ivory', hex:'#FFF8E7', group:'neutrals', wear:'Foundation neutral, use for shirts, dresses, layering', avoid:'Pure white (too stark)'},
    {key:'cream', label:'Cream', hex:'#F5F0E6', group:'neutrals', wear:'Soft alternative to white, great for knitwear', avoid:'Bright white'},
    {key:'camel', label:'Camel', hex:'#C4A277', group:'neutrals', wear:'Warm neutral for coats, trousers, shoes', avoid:'Cool grey, charcoal'},
    {key:'warmbeige', label:'Warm Beige', hex:'#D4C5B0', group:'neutrals', wear:'Everyday neutral, excellent for basics', avoid:'Cool taupe'},
    {key:'softnavy', label:'Soft Navy', hex:'#5B6E7D', group:'neutrals', wear:'Alternative to black, great for bottoms', avoid:'True black'},
    {key:'warmgrey', label:'Warm Grey', hex:'#B3A89C', group:'neutrals', wear:'Soft neutral for layering', avoid:'Cool grey'},
    // Pinks & Corals
    {key:'peach', label:'Peach Pink', hex:'#FFB69B', group:'pinks', wear:'Universally flattering, perfect for blouses and dresses', avoid:'Cool pink, hot pink'},
    {key:'coral', label:'Light Coral', hex:'#FF8C7A', group:'pinks', wear:'Signature Light Spring shade, excellent for statement pieces', avoid:'Deep burgundy'},
    {key:'salmon', label:'Salmon', hex:'#FA9A85', group:'pinks', wear:'Warm pink alternative, great for tops', avoid:'Cool rose'},
    {key:'blush', label:'Warm Blush', hex:'#F5CAC3', group:'pinks', wear:'Delicate pink for feminine looks', avoid:'Cool baby pink'},
    {key:'watermelon', label:'Watermelon', hex:'#FF6B7A', group:'pinks', wear:'Bright accent, use in accessories or prints', avoid:'Fuchsia'},
    // Yellows & Golds
    {key:'golden', label:'Golden Yellow', hex:'#F5C242', group:'yellows', wear:'Signature warm yellow, excellent for summer pieces', avoid:'Lemon yellow (too cool)'},
    {key:'butter', label:'Butter Yellow', hex:'#F9E79F', group:'yellows', wear:'Soft sunny shade, flattering near face', avoid:'Neon yellow'},
    {key:'daffodil', label:'Daffodil', hex:'#FFE66D', group:'yellows', wear:'Cheerful spring shade for dresses and accessories', avoid:'Mustard (too deep)'},
    {key:'honey', label:'Honey Gold', hex:'#E8B449', group:'yellows', wear:'Warm metallic tone, great for eveningwear', avoid:'Cool gold'},
    // Greens
    {key:'pistachio', label:'Pistachio Green', hex:'#A9D48C', group:'greens', wear:'Fresh spring green, excellent for casual wear', avoid:'Forest green (too dark)'},
    {key:'mint', label:'Mint Green', hex:'#A8E6CF', group:'greens', wear:'Cool-toned but still warm enough, great for summer', avoid:'Emerald'},
    {key:'applegreen', label:'Apple Green', hex:'#B8D989', group:'greens', wear:'Vibrant spring shade for statement pieces', avoid:'Olive (too muted)'},
    {key:'sage', label:'Warm Sage', hex:'#C4D1B8', group:'greens', wear:'Sophisticated green, perfect for workwear', avoid:'Cool sage'},
    {key:'seagreen', label:'Light Sea Green', hex:'#96D8C8', group:'greens', wear:'Aqua-green hybrid, flattering for all occasions', avoid:'Teal (too cool)'},
    // Blues & Aquas
    {key:'skyblue', label:'Sky Blue', hex:'#A8D8F0', group:'blues', wear:'Classic Light Spring blue, universally flattering', avoid:'Royal blue (too deep)'},
    {key:'aqua', label:'Light Aqua', hex:'#A0E7E5', group:'blues', wear:'Warm-toned blue-green, excellent for summer', avoid:'Cool turquoise'},
    {key:'periwinkle', label:'Periwinkle', hex:'#B79FE0', group:'blues', wear:'Soft purple-blue, great for blouses', avoid:'Navy (too dark)'},
    {key:'turquoise', label:'Warm Turquoise', hex:'#76D7C4', group:'blues', wear:'Vibrant blue-green for statement pieces', avoid:'Cool turquoise'},
    {key:'powderblue', label:'Powder Blue', hex:'#C1E1EC', group:'blues', wear:'Delicate pale blue, perfect for layering', avoid:'Ice blue (too cool)'},
    // Purples, Reds & Accents
    {key:'lavender', label:'Light Lavender', hex:'#D8BFD8', group:'purples', wear:'Soft purple for romantic looks', avoid:'Deep purple, violet'},
    {key:'mauve', label:'Warm Mauve', hex:'#D8A8B5', group:'purples', wear:'Dusty pink-purple, sophisticated for eveningwear', avoid:'Plum'},
    {key:'apricot', label:'Apricot Orange', hex:'#F2A65A', group:'accents', wear:'Warm orange for bold statements', avoid:'Burnt orange (too deep)'},
    {key:'tomato', label:'Soft Tomato Red', hex:'#E85D5D', group:'accents', wear:'Warm red alternative, great for lipstick shades too', avoid:'True red, burgundy'},
    {key:'tangerine', label:'Light Tangerine', hex:'#FFB347', group:'accents', wear:'Cheerful orange for playful looks', avoid:'Rust'},
  ],
};

const PALETTE_GROUPS = {
  neutrals: 'Neutrals',
  pinks: 'Pinks & Corals',
  yellows: 'Yellows & Golds',
  greens: 'Greens',
  blues: 'Blues & Aquas',
  purples: 'Purples & Mauves',
  accents: 'Reds & Oranges',
};

// ══════════════════════════════════════════════════════════════════════════════
// SEASON DATA
// ══════════════════════════════════════════════════════════════════════════════

const SEASONS = {
  lightSpring: {
    label: 'Light Spring',
    sub: 'A curated edit of pieces in your warm, light, clear palette — pulled from Zara, H&M, Mango and Next so you don\'t have to dig for them.',
    palette: [
      {key:'pistachio', label:'Apple / Pistachio Green', hex:'#A9D48C'},
      {key:'apricot', label:'Apricot Orange', hex:'#F2A65A'},
      {key:'peach', label:'Peach Pink', hex:'#FFB69B'},
      {key:'skyblue', label:'Light Sky Blue', hex:'#A8D8F0'},
      {key:'periwinkle', label:'Light Periwinkle Purple', hex:'#B79FE0'},
      {key:'golden', label:'Golden Yellow', hex:'#F5C242'},
      {key:'coral', label:'Light Coral / Watermelon', hex:'#FF8C7A'},
      {key:'mint', label:'Mint Green', hex:'#A8E6CF'},
      {key:'aqua', label:'Light Aqua', hex:'#A0E7E5'},
      {key:'ivory', label:'Ivory', hex:'#FFF8E7'},
    ],
  },
  warmSpring: {
    label: 'Warm Spring',
    sub: 'Sunlit, golden, and fully warm — your palette skips cool blues entirely in favor of turquoise, camel, and clear warm hues.',
    palette: [
      {key:'goldenyellow', label:'Golden Yellow', hex:'#F0B429'},
      {key:'coral', label:'Coral', hex:'#FF6F5C'},
      {key:'peach', label:'Peach', hex:'#FFB07A'},
      {key:'turquoise', label:'Warm Turquoise', hex:'#2FBFAE'},
      {key:'leafgreen', label:'Leaf Green', hex:'#6FB645'},
      {key:'camel', label:'Camel', hex:'#C69A5F'},
      {key:'ivory', label:'Ivory', hex:'#FFF6E0'},
      {key:'poppyred', label:'Poppy Red', hex:'#E8452C'},
      {key:'mango', label:'Mango Orange', hex:'#F2861A'},
      {key:'cobalt', label:'Warm Periwinkle Blue', hex:'#4A6FE0'},
    ],
  },
  brightSpring: {
    label: 'Bright Spring',
    sub: 'High-chroma and warm — the most vivid of the Spring seasons, at home in saturated, clear color-blocked pieces.',
    palette: [
      {key:'vividcoral', label:'Vivid Coral', hex:'#FF6F5E'},
      {key:'hotpink', label:'Hot Pink', hex:'#FF3D8A'},
      {key:'brightturquoise', label:'Bright Turquoise', hex:'#1FCFC7'},
      {key:'electricgold', label:'Electric Gold', hex:'#F4C10F'},
      {key:'clearorange', label:'Clear Orange', hex:'#FF7A1A'},
      {key:'vividgreen', label:'Vivid Green', hex:'#3FC142'},
      {key:'warmmagenta', label:'Warm Magenta', hex:'#E8308A'},
      {key:'lime', label:'Lime', hex:'#C7E639'},
      {key:'brighttomato', label:'Bright Tomato', hex:'#FF4433'},
      {key:'clearyellow', label:'Clear Warm Yellow', hex:'#FFDA3D'},
    ],
  },
  softAutumn: {
    label: 'Soft Autumn',
    sub: 'Muted, warm, and low-contrast — the gentlest Autumn, built on dusty, blended earth tones rather than anything vivid.',
    palette: [
      {key:'camel', label:'Camel', hex:'#C4A277'},
      {key:'sagegreen', label:'Sage Green', hex:'#9CAF88'},
      {key:'dustyrose', label:'Dusty Rose', hex:'#C98A82'},
      {key:'mutedterracotta', label:'Muted Terracotta', hex:'#C1694F'},
      {key:'warmtaupe', label:'Warm Taupe', hex:'#A68A72'},
      {key:'olivegreen', label:'Olive Green', hex:'#7D7A4F'},
      {key:'dustyblue', label:'Dusty Blue', hex:'#7C93A0'},
      {key:'marsala', label:'Marsala', hex:'#7A4A42'},
      {key:'softivory', label:'Soft Ivory', hex:'#F1E9D8'},
      {key:'khaki', label:'Khaki', hex:'#B4A369'},
    ],
  },
  warmAutumn: {
    label: 'Warm Autumn',
    sub: 'Rich and golden — the warmest, most saturated Autumn, built on burnt oranges, mustards, and deep golden browns.',
    palette: [
      {key:'burntorange', label:'Burnt Orange', hex:'#CC5A28'},
      {key:'mustardyellow', label:'Mustard Yellow', hex:'#D4A017'},
      {key:'oliveforest', label:'Olive / Forest Green', hex:'#5C6B2E'},
      {key:'goldenbrown', label:'Golden Brown', hex:'#8B5A2B'},
      {key:'tomatored', label:'Tomato Red', hex:'#C6452A'},
      {key:'terracotta', label:'Terracotta', hex:'#C1694F'},
      {key:'caramel', label:'Caramel', hex:'#A9713C'},
      {key:'warmteal', label:'Warm Teal', hex:'#3E7C6B'},
      {key:'corngold', label:'Corn Gold', hex:'#D9A441'},
      {key:'rust', label:'Rust', hex:'#A0522D'},
    ],
  },
  deepAutumn: {
    label: 'Deep Autumn',
    sub: 'The darkest, most dramatic Autumn — warm and rich but with real depth, touched by Winter\'s intensity.',
    palette: [
      {key:'deepchocolate', label:'Deep Chocolate Brown', hex:'#4A2E1F'},
      {key:'forestgreen', label:'Forest Green', hex:'#33472E'},
      {key:'burgundy', label:'Burgundy / Wine', hex:'#6E1E2C'},
      {key:'curryyellow', label:'Curry Yellow', hex:'#C79A1E'},
      {key:'pumpkin', label:'Pumpkin', hex:'#C05A1E'},
      {key:'aubergine', label:'Aubergine', hex:'#4B2142'},
      {key:'rust', label:'Rust', hex:'#A0431E'},
      {key:'deepteal', label:'Deep Teal', hex:'#1F5C57'},
      {key:'paprika', label:'Paprika / Brick Red', hex:'#9B3222'},
      {key:'bronze', label:'Bronze / Copper Gold', hex:'#A9702E'},
    ],
  },
  lightSummer: {
    label: 'Light Summer',
    sub: 'The airiest, most delicate Summer — cool and light, like a pastel sky just after rain.',
    palette: [
      {key:'powderblue', label:'Powder Blue', hex:'#B0E0E6'},
      {key:'lavender', label:'Lavender', hex:'#C9B8E8'},
      {key:'lightorchid', label:'Light Orchid', hex:'#DBBAD9'},
      {key:'dustyblue', label:'Dusty Blue', hex:'#A9BBC9'},
      {key:'balletpink', label:'Ballet Pink', hex:'#F0C4CB'},
      {key:'aquagreen', label:'Aqua Green', hex:'#A9D9C9'},
      {key:'periwinkle', label:'Periwinkle', hex:'#A6B4E0'},
      {key:'softoffwhite', label:'Soft Off-White', hex:'#F2F0EC'},
      {key:'lightruby', label:'Light Ruby', hex:'#D65C6E'},
      {key:'chiffonyellow', label:'Chiffon Yellow', hex:'#F5E6A8'},
    ],
  },
  coolSummer: {
    label:'Cool Summer',
    sub: 'The purest, fully cool Summer — no warmth at all, like grey river rocks and calm blue waters.',
    palette: [
      {key:'blushpink', label:'Cool Blush Pink', hex:'#E8B4C0'},
      {key:'lavender', label:'Lavender', hex:'#B9A6D9'},
      {key:'powderblue', label:'Powder Blue', hex:'#A9C9E0'},
      {key:'seagreen', label:'Sea / Ocean Green', hex:'#7CB8A8'},
      {key:'slateblue', label:'Slate Blue', hex:'#6B7FA3'},
      {key:'raspberry', label:'Cool Raspberry', hex:'#B85C7A'},
      {key:'softgrey', label:'Soft Grey', hex:'#A8A8AC'},
      {key:'steelblue', label:'Steel Blue', hex:'#5C7A94'},
      {key:'coolplum', label:'Cool Plum', hex:'#7A5A7E'},
      {key:'coolyellow', label:'Cool Soft Yellow', hex:'#E8DDA8'},
    ],
  },
  softSummer: {
    label: 'Soft Summer',
    sub: 'The darkest, most muted Summer — gray-based, blended, quiet-luxury elegance.',
    palette: [
      {key:'dustyrose', label:'Dusty Rose', hex:'#C98A93'},
      {key:'duskyblue', label:'Dusky Blue', hex:'#7C93AB'},
      {key:'sagegreen', label:'Sage Green', hex:'#9CAF9C'},
      {key:'mauve', label:'Mauve', hex:'#A67F94'},
      {key:'softplum', label:'Soft Plum', hex:'#6B4A5E'},
      {key:'cadetbluegreen', label:'Cadet Blue-Green', hex:'#5A8A8C'},
      {key:'taupe', label:'Taupe / Mushroom', hex:'#9C8F80'},
      {key:'dovegrey', label:'Dove Grey', hex:'#A8A6A0'},
      {key:'softnavy', label:'Soft Navy', hex:'#3F4A5C'},
      {key:'coolpink', label:'Cool Pink', hex:'#C97A8A'},
    ],
  },
  brightWinter: {
    label: 'Bright Winter',
    sub: 'The highest-chroma Winter, warmed slightly by Spring — icy light meets neon vibrancy.',
    palette: [
      {key:'emeraldgreen', label:'Emerald Green', hex:'#0F9D6E'},
      {key:'rubyred', label:'Ruby Red', hex:'#C41E3A'},
      {key:'sapphireblue', label:'Sapphire Blue', hex:'#1B4F9C'},
      {key:'amethyst', label:'Amethyst Purple', hex:'#7B3FA0'},
      {key:'hotpink', label:'Hot Pink', hex:'#FF2D8A'},
      {key:'turquoise', label:'Turquoise', hex:'#0FBFC4'},
      {key:'icylavender', label:'Icy Lavender', hex:'#C9B8F0'},
      {key:'lemonice', label:'Lemon Ice', hex:'#F5F27A'},
      {key:'magenta', label:'Magenta / Fuchsia', hex:'#E0189A'},
      {key:'icywhite', label:'Icy White', hex:'#F2F6F8'},
    ],
  },
  coolWinter: {
    label: 'Cool Winter',
    sub: 'The purest, fully cool Winter — crisp, bold, and blue-based with no warmth allowed.',
    palette: [
      {key:'royalblue', label:'Royal Blue', hex:'#1E3F8C'},
      {key:'icyblue', label:'Icy Blue', hex:'#B8D8E8'},
      {key:'purewhite', label:'Pure White', hex:'#FAFAFA'},
      {key:'clearmagenta', label:'Clear Magenta', hex:'#D6127A'},
      {key:'navy', label:'Navy', hex:'#1B2A4A'},
      {key:'coolpink', label:'Cool Pink', hex:'#E88AA8'},
      {key:'icylavender', label:'Icy Lavender', hex:'#C9B8E8'},
      {key:'slateblue', label:'Slate Blue', hex:'#5C6F94'},
      {key:'periwinkle', label:'Periwinkle', hex:'#7C88D9'},
      {key:'truered', label:'True Red', hex:'#C41230'},
    ],
  },
  deepWinter: {
    label: 'Deep Winter',
    sub: 'The darkest, most dramatic Winter — jewel tones against near-black neutrals.',
    palette: [
      {key:'darkpurple', label:'Dark Purple', hex:'#5F2566'},
      {key:'deepindigo', label:'Deep Indigo', hex:'#4A4482'},
      {key:'richplum', label:'Rich Plum / Burgundy', hex:'#7D1B4D'},
      {key:'emeraldgreen', label:'Emerald Green', hex:'#0D5C3F'},
      {key:'sapphireblue', label:'Sapphire Blue', hex:'#1E4D8C'},
      {key:'trueruby', label:'True Red / Ruby', hex:'#B71C3A'},
      {key:'deepteal', label:'Deep Teal', hex:'#0F5C5C'},
      {key:'magenta', label:'Magenta / Fuchsia', hex:'#C41E7A'},
      {key:'lemonyellow', label:'Lemon Yellow', hex:'#F0E23C'},
      {key:'whitesmoke', label:'White Smoke', hex:'#F5F5F5'},
    ],
  },
};

// ══════════════════════════════════════════════════════════════════════════════
// RETAILERS & ICONS
// ══════════════════════════════════════════════════════════════════════════════

const RETAILERS = {
  zara: {name:'Zara', url:'https://www.zara.com'},
  hm: {name:'H&M', url:'https://www2.hm.com'},
  mango: {name:'Mango', url:'https://shop.mango.com'},
  next: {name:'Next', url:'https://www.next.ro'},
};

const ICONS = {
  top: (c) => `<svg viewBox="0 0 100 100" fill="${c}"><path d="M30 10 L15 25 L25 38 L32 32 L32 90 L68 90 L68 32 L75 38 L85 25 L70 10 L60 18 Q50 24 40 18 Z"/></svg>`,
  dress: (c) => `<svg viewBox="0 0 100 100" fill="${c}"><path d="M35 8 L25 22 L33 30 L30 40 L15 90 L85 90 L70 40 L67 30 L75 22 L65 8 L58 16 Q50 22 42 16 Z"/></svg>`,
  knit: (c) => `<svg viewBox="0 0 100 100" fill="${c}"><path d="M28 12 L10 24 L20 40 L28 34 L28 90 L72 90 L72 34 L80 40 L90 24 L72 12 L64 18 L64 26 L36 26 L36 18 Z"/></svg>`,
  outer: (c) => `<svg viewBox="0 0 100 100" fill="${c}"><path d="M32 8 L14 22 L24 38 L32 30 L28 92 L48 92 L48 40 L52 40 L52 92 L72 92 L68 30 L76 38 L86 22 L68 8 L58 16 Q50 22 42 16 Z"/></svg>`,
  accessory: (c) => `<svg viewBox="0 0 100 100" fill="${c}"><path d="M30 38 L30 28 Q30 14 50 14 Q70 14 70 28 L70 38 L80 38 L84 90 L16 90 L20 38 Z M38 28 Q38 22 50 22 Q62 22 62 28 L62 38 L38 38 Z"/></svg>`,
};

const CATS = [
  {key:'all', label:'All'},
  {key:'top', label:'Tops'},
  {key:'dress', label:'Dresses'},
  {key:'knit', label:'Knitwear'},
  {key:'outer', label:'Outerwear'},
  {key:'accessory', label:'Accessories'},
];

const WHEEL_ORDER = [
  'lightSpring','warmSpring','brightSpring',
  'softSummer','coolSummer','lightSummer',
  'deepAutumn','warmAutumn','softAutumn',
  'brightWinter','coolWinter','deepWinter',
];

const FAMILIES = [
  {name:'Spring', desc:'Warm and light to bright — fresh, clear, sunlit colors.', seasons:['lightSpring','warmSpring','brightSpring']},
  {name:'Summer', desc:'Cool and soft to light — gentle, muted, blue-based colors.', seasons:['lightSummer','coolSummer','softSummer']},
  {name:'Autumn', desc:'Warm and muted to deep — earthy, rich, golden colors.', seasons:['softAutumn','warmAutumn','deepAutumn']},
  {name:'Winter', desc:'Cool and bright to deep — icy, jewel-toned, high-contrast colors.', seasons:['brightWinter','coolWinter','deepWinter']},
];

// ══════════════════════════════════════════════════════════════════════════════
// PRODUCTS
// ══════════════════════════════════════════════════════════════════════════════

const PRODUCTS = [
  {season:'lightSpring', name:'Lipsy Pistachio Green Linen-Blend Shirt', retailer:'next', category:'top', shade:'pistachio', price:'253 LEI', url:'https://www.next.ro/en/style/su878498/y72754', confidence:'high', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/Y72754s.jpg'},
  {season:'lightSpring', name:'Love & Roses Apricot Lace Blouse', retailer:'next', category:'top', shade:'apricot', price:'298 LEI', url:'https://www.next.ro/en/style/su900137/v24764', confidence:'high', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/V24764s.jpg'},
  {season:'lightSpring', name:'Love & Roses Peach Pink Pointelle Cardigan', retailer:'next', category:'knit', shade:'peach', price:'253 LEI', url:'https://www.next.ro/en/style/sv028711/v76604', confidence:'high', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/V76604s.jpg'},
  {season:'lightSpring', name:'Love & Roses Blue Satin Jacquard Tea Top', retailer:'next', category:'top', shade:'skyblue', price:'283 LEI', url:'https://www.next.ro/en/style/sv000342/g83781', confidence:'high', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/G83781s.jpg'},
  {season:'lightSpring', name:'Love & Roses Coral Shell Cutwork Mini Kaftan', retailer:'next', category:'dress', shade:'coral', price:'343 LEI', url:'https://www.next.ro/ro/style/su845985/h97805', confidence:'high', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/H97805s.jpg'},
  {season:'lightSpring', name:'Love & Roses Yellow Floral Embroidered Knitted Top', retailer:'next', category:'knit', shade:'golden', price:'290 LEI', url:'https://www.next.ro/en/style/sv068672/y53931', confidence:'medium', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/Y53931s.jpg'},
  {season:'coolSummer', name:'Lipsy Floral Embroidered Short Sleeve Shirt', retailer:'next', category:'top', shade:'powderblue', price:'313 LEI', url:'https://www.next.ro/ro/style/sv148115/y88147', confidence:'high', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/Y88147s.jpg'},
  {season:'brightSpring', name:'Love & Roses Floral Embroidered Notch Neck Blouse', retailer:'next', category:'top', shade:'brighttomato', price:'313 LEI', url:'https://www.next.ro/ro/style/sv029298/g97246', confidence:'medium', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/G97246s.jpg'},
  {season:'coolWinter', name:'Love & Roses Broderie Shell Top', retailer:'next', category:'top', shade:'truered', price:'283 LEI', url:'https://www.next.ro/ro/style/sv000353/v49906', confidence:'high', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/V49906s.jpg'},
  {season:'softSummer', name:'Love & Roses Roll Sleeve Button Through Embroidered Shirt', retailer:'next', category:'top', shade:'duskyblue', price:'290 LEI', url:'https://www.next.ro/ro/style/su998885/g82823', confidence:'high', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/G82823s.jpg'},
  {season:'brightWinter', name:'Love & Roses Bib Detail Shell Top', retailer:'next', category:'top', shade:'icywhite', price:'283 LEI', url:'https://www.next.ro/ro/style/su964603/g63881', confidence:'medium', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/G63881s.jpg'},
  {season:'deepAutumn', name:'River Island Cutwork Tie Neck Blouse', retailer:'next', category:'top', shade:'paprika', price:'313 LEI', url:'https://www.next.ro/ro/style/sv192017/d89699', confidence:'medium', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D89699s.jpg'},
  {season:'lightSummer', name:'Love & Roses Crew Neck Crochet Insert Embroidered Blouse', retailer:'next', category:'top', shade:'chiffonyellow', price:'290 LEI', url:'https://www.next.ro/ro/style/sv077905/v79520', confidence:'high', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/V79520s.jpg'},
  {season:'lightSummer', name:'Love & Roses Lace Trim Flutter Sleeve Blouse', retailer:'next', category:'top', shade:'powderblue', price:'290 LEI', url:'https://www.next.ro/ro/style/su999003/g82814', confidence:'medium', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/G82814s.jpg'},
  {season:'deepAutumn', name:'Lipsy Textured Jersey Midi Dress', retailer:'next', category:'dress', shade:'rust', price:'372 LEI', url:'https://www.next.ro/ro/style/su897655/w10862', confidence:'medium', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/W10862s.jpg'},
  {season:'warmSpring', name:'Lipsy Broderie Flutter Sleeve Midi Dress (Orange)', retailer:'next', category:'dress', shade:'mango', price:'439 LEI', url:'https://www.next.ro/ro/style/su858407/g10322', confidence:'medium', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/G10322s.jpg'},
  {season:'warmSpring', name:'Lipsy Broderie Flutter Sleeve Midi Dress (Turquoise)', retailer:'next', category:'dress', shade:'turquoise', price:'439 LEI', url:'https://www.next.ro/ro/style/su858407/y10978', confidence:'high', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/Y10978s.jpg'},
  {season:'warmSpring', name:'Love & Roses Lace Drop Waist Sleeveless Midi Dress', retailer:'next', category:'dress', shade:'mango', price:'663 LEI', url:'https://www.next.ro/ro/style/su898190/v41947', confidence:'medium', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/V41947s.jpg'},
  {season:'lightSpring', name:'Sosandar Popper Front Denim Dress', retailer:'next', category:'dress', shade:'coral', price:'588 LEI', url:'https://www.next.ro/ro/style/su311352/l41771', confidence:'medium', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/L41771s.jpg'},
  {season:'lightSpring', name:'Friends Like These Draped Off The Shoulder Top (Yellow)', retailer:'next', category:'top', shade:'golden', price:'238 LEI', url:'https://www.next.ro/ro/style/su721640/v10799', confidence:'high', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/V10799s.jpg'},
  {season:'lightSpring', name:'Friends Like These Draped Off The Shoulder Top (Pistachio Green)', retailer:'next', category:'top', shade:'pistachio', price:'238 LEI', url:'https://www.next.ro/ro/style/su721640/v10809', confidence:'high', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/V10809s.jpg'},
  {season:'lightSpring', name:'Friends Like These Short Sleeve Ruffle Mini Dress', retailer:'next', category:'dress', shade:'coral', price:'335 LEI', url:'https://www.next.ro/ro/style/su883300/y17055', confidence:'medium', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/Y17055s.jpg'},
  {season:'lightSpring', name:'Lipsy 3/4 Sleeve Embroidered Grandad Blouse', retailer:'next', category:'top', shade:'mint', price:'313 LEI', url:'https://www.next.ro/ro/style/su901245/y35898', confidence:'high', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/Y35898s.jpg'},
  {season:'brightSpring', name:'Love & Roses Embellished V-Neck Jersey T-Shirt (Mint)', retailer:'next', category:'top', shade:'vividgreen', price:'194 LEI', url:'https://www.next.ro/ro/style/sv144388/y35543', confidence:'medium', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/Y35543s.jpg'},
  {season:'brightSpring', name:'Love & Roses Tie Shoulder Lace Broderie Midi Dress', retailer:'next', category:'dress', shade:'brightturquoise', price:'737 LEI', url:'https://www.next.ro/ro/style/su894622/y26953', confidence:'high', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/Y26953s.jpg'},
  {season:'lightSpring', name:'Love & Roses Sequin V-Neck Printed Vest', retailer:'next', category:'top', shade:'mint', price:'216 LEI', url:'https://www.next.ro/ro/style/su924156/y97048', confidence:'high', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/Y97048s.jpg'},
  {season:'lightSpring', name:'Love & Roses Embellished V-Neck Jersey T-Shirt (Yellow)', retailer:'next', category:'top', shade:'golden', price:'179 LEI', url:'https://www.next.ro/ro/style/su918259/w19381', confidence:'medium', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/W19381s.jpg'},
  {season:'coolSummer', name:'Love & Roses Lace Trim Top', retailer:'next', category:'top', shade:'blushpink', price:'238 LEI', url:'https://www.next.ro/ro/style/su998882/g82820', confidence:'high', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/G82820s.jpg'},
  {season:'brightSpring', name:'Lipsy Lace Detail Frill Crochet Knitted Vest', retailer:'next', category:'knit', shade:'hotpink', price:'268 LEI', url:'https://www.next.ro/ro/style/su961742/g76631', confidence:'medium', img:'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/G76631s.jpg'},
];

// ══════════════════════════════════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════════════════════════════════

let currentSeason = 'lightSpring';
let currentPaletteSeason = 'lightSpring';
let activeShades = new Set();
let activeCat = 'all';

function getPalette() { return SEASONS[currentSeason].palette; }
function getHex() { return Object.fromEntries(getPalette().map(p => [p.key, p.hex])); }
function itemCount(key) { return PRODUCTS.filter(p => p.season === key).length; }

// ══════════════════════════════════════════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════════════════════════════════════════

function showView(view) {
  ['homeView', 'paletteView', 'shopView'].forEach(id => {
    document.getElementById(id).style.display = id === view ? 'block' : 'none';
  });
  document.querySelectorAll('.nav-link').forEach(el => {
    el.classList.toggle('active', el.dataset.view === view.replace('View', ''));
  });
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function navigate(view, seasonKey) {
  let hash = '#' + view;
  if (seasonKey) hash += '/' + seasonKey;
  window.location.hash = hash;
}

function handleHash() {
  const hash = window.location.hash.slice(1);
  const [view, seasonKey] = hash.split('/');
  
  if (view === 'palette') {
    if (seasonKey && SEASONS[seasonKey]) currentPaletteSeason = seasonKey;
    showView('paletteView');
    renderPaletteExplorer();
  } else if (view === 'shop') {
    if (seasonKey && SEASONS[seasonKey]) {
      currentSeason = seasonKey;
      activeShades = new Set();
      activeCat = 'all';
    }
    showView('shopView');
    renderSeasonSwitcher();
    renderFan();
    renderChips();
    renderGrid();
  } else {
    showView('homeView');
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// HOME VIEW
// ══════════════════════════════════════════════════════════════════════════════

function polarToCartesian(cx, cy, r, angleDeg) {
  const a = (angleDeg - 90) * Math.PI / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function donutPath(cx, cy, outerR, innerR, start, end) {
  const so = polarToCartesian(cx, cy, outerR, end);
  const eo = polarToCartesian(cx, cy, outerR, start);
  const si = polarToCartesian(cx, cy, innerR, end);
  const ei = polarToCartesian(cx, cy, innerR, start);
  const la = end - start <= 180 ? 0 : 1;
  return `M ${so.x} ${so.y} A ${outerR} ${outerR} 0 ${la} 0 ${eo.x} ${eo.y} L ${ei.x} ${ei.y} A ${innerR} ${innerR} 0 ${la} 1 ${si.x} ${si.y} Z`;
}

function buildWheel() {
  const svg = document.getElementById('wheelSvg');
  const cx = 260, cy = 260, outerR = 210, labelR = 130, hubR = 62, arcR = 242, step = 30;
  
  const wedges = WHEEL_ORDER.map((key, i) => {
    const start = i * step, end = (i + 1) * step, mid = start + step / 2;
    const hero = SEASONS[key].palette[0].hex;
    const d = donutPath(cx, cy, outerR, 0, start, end);
    const pos = polarToCartesian(cx, cy, labelR, mid);
    let rot = mid + 90;
    if (mid > 0 && mid < 180) rot += 180;
    const short = SEASONS[key].label.split(' ')[0];
    return `<g><path class="wedge" d="${d}" fill="${hero}" data-key="${key}"><title>${SEASONS[key].label}</title></path>
    <text class="wedge-label" x="${pos.x}" y="${pos.y}" transform="rotate(${rot} ${pos.x} ${pos.y})" text-anchor="middle" dominant-baseline="middle">${short}</text></g>`;
  }).join('');
  
  const dividers = [0, 90, 180, 270].map(a => {
    const o = polarToCartesian(cx, cy, outerR + 2, a);
    const i = polarToCartesian(cx, cy, hubR, a);
    return `<line x1="${i.x}" y1="${i.y}" x2="${o.x}" y2="${o.y}" stroke="#2C2622" stroke-width="2.5" stroke-linecap="round" style="pointer-events:none"/>`;
  }).join('');
  
  const fLabels = FAMILIES.map((f, i) => {
    const mid = i * 90 + 45;
    const pos = polarToCartesian(cx, cy, arcR, mid);
    let rot = mid;
    if (mid > 90 && mid < 270) rot += 180;
    return `<text class="family-label" x="${pos.x}" y="${pos.y}" transform="rotate(${rot} ${pos.x} ${pos.y})" text-anchor="middle" dominant-baseline="middle">${f.name.toUpperCase()}</text>`;
  }).join('');
  
  const hub = `<circle cx="${cx}" cy="${cy}" r="${hubR}" fill="#FAF3EC" stroke="#E8DED2" stroke-width="2" style="pointer-events:none"/>`;
  
  svg.innerHTML = `${wedges}${dividers}${fLabels}${hub}`;
  
  svg.querySelectorAll('.wedge').forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.getElementById('wheelCenterLabel').textContent = SEASONS[el.dataset.key].label;
    });
    el.addEventListener('mouseleave', () => {
      document.getElementById('wheelCenterLabel').textContent = 'Tap a season';
    });
    el.addEventListener('click', () => navigate('shop', el.dataset.key));
  });
}

function buildFamilies() {
  const wrap = document.getElementById('families');
  wrap.innerHTML = FAMILIES.map(f => `
    <div class="family-card">
      <div class="family-name">${f.name}</div>
      <div class="family-desc">${f.desc}</div>
      <div class="family-seasons">
        ${f.seasons.map(key => {
          const n = itemCount(key);
          return `<button class="season-pill ${n > 0 ? 'has-items' : ''}" data-key="${key}">
            <span class="dot" style="background:${SEASONS[key].palette[0].hex}"></span>
            ${SEASONS[key].label}
            <span class="pcount">${n > 0 ? `· ${n} to shop` : ''}</span>
          </button>`;
        }).join('')}
      </div>
    </div>
  `).join('');
  
  wrap.querySelectorAll('.season-pill').forEach(el => {
    el.addEventListener('click', () => navigate('shop', el.dataset.key));
  });
}

function buildProofStrip() {
  const wrap = document.getElementById('proofStrip');
  wrap.innerHTML = PRODUCTS.slice(0, 5).map(p => {
    const r = RETAILERS[p.retailer].name;
    const shade = SEASONS[p.season].palette.find(s => s.key === p.shade);
    return `<a class="proof-card" href="${p.url}" target="_blank" rel="noopener">
      <img class="proof-img" src="${p.img}" alt="${p.name}" loading="lazy"
           onerror="this.src='';this.style.background='${shade?.hex || '#eee'}22';">
      <div class="proof-caption"><b>${r}</b>${shade?.label || ''} · real link</div>
    </a>`;
  }).join('');
}

function buildWheelStatus() {
  const shoppable = WHEEL_ORDER.filter(k => itemCount(k) > 0).map(k => SEASONS[k].label);
  document.getElementById('wheelStatus').textContent = shoppable.length
    ? `✓ Shoppable now: ${shoppable.join(', ')} — rest coming soon`
    : 'Palettes ready — shopping lists coming soon';
}

// ══════════════════════════════════════════════════════════════════════════════
// PALETTE EXPLORER
// ══════════════════════════════════════════════════════════════════════════════

function renderPaletteExplorer() {
  document.getElementById('paletteSeasionName').textContent = SEASONS[currentPaletteSeason].label;
  const hasExtended = !!EXTENDED[currentPaletteSeason];
  document.getElementById('paletteSeasonSub').textContent = hasExtended
    ? '30 colours across every family — from your best neutrals to your boldest accents.'
    : '10 hero shades — full extended palette coming soon.';
  
  // Season bar
  const bar = document.getElementById('paletteSeasonBar');
  bar.innerHTML = Object.entries(SEASONS).map(([key, s]) =>
    `<button class="palette-season-tab ${key === currentPaletteSeason ? 'active' : ''}" data-key="${key}">${s.label}</button>`
  ).join('');
  bar.querySelectorAll('.palette-season-tab').forEach(el => {
    el.addEventListener('click', () => {
      currentPaletteSeason = el.dataset.key;
      navigate('palette', currentPaletteSeason);
    });
  });
  
  renderPaletteContent();
}

function renderPaletteContent() {
  const container = document.getElementById('paletteContent');
  const swatches = EXTENDED[currentPaletteSeason] || SEASONS[currentPaletteSeason].palette.map(p => ({...p, group: 'neutrals'}));
  
  if (!EXTENDED[currentPaletteSeason]) {
    container.innerHTML = `
      <p class="palette-coming">Full extended palette coming soon — showing the 10 hero shades for now.</p>
      <div class="palette-groups"><div>
        <div class="group-label">Hero Shades</div>
        <div class="swatch-grid">${swatches.map(s => `
          <div class="swatch-tile">
            <div class="swatch-blob" style="background:${s.hex}"></div>
            <div class="swatch-name">${s.label}</div>
          </div>`).join('')}
        </div>
      </div></div>`;
    return;
  }
  
  // Group swatches
  const grouped = {};
  Object.keys(PALETTE_GROUPS).forEach(g => { grouped[g] = []; });
  swatches.forEach(s => { if (grouped[s.group]) grouped[s.group].push(s); });
  
  const groupsHtml = Object.entries(PALETTE_GROUPS)
    .filter(([key]) => grouped[key]?.length)
    .map(([key, label]) => `
      <div>
        <div class="group-label">${label}</div>
        <div class="swatch-grid">
          ${grouped[key].map(s => `
            <div class="swatch-tile">
              <div class="swatch-blob" style="background:${s.hex}"></div>
              <div class="swatch-name">${s.label}</div>
            </div>`).join('')}
        </div>
      </div>`).join('');
  
  container.innerHTML = `<div class="palette-groups">${groupsHtml}</div>`;
}

// ══════════════════════════════════════════════════════════════════════════════
// SHOP VIEW
// ══════════════════════════════════════════════════════════════════════════════

function renderSeasonSwitcher() {
  const wrap = document.getElementById('seasonSwitcher');
  document.getElementById('seasonName').textContent = SEASONS[currentSeason].label;
  document.getElementById('seasonSub').textContent = SEASONS[currentSeason].sub;
  
  wrap.innerHTML = Object.entries(SEASONS).map(([key, s]) =>
    `<button class="season-tab ${key === currentSeason ? 'active' : ''}" data-key="${key}">${s.label}</button>`
  ).join('');
  
  wrap.querySelectorAll('.season-tab').forEach(el => {
    el.addEventListener('click', () => {
      currentSeason = el.dataset.key;
      activeShades = new Set();
      activeCat = 'all';
      navigate('shop', currentSeason);
    });
  });
}

function renderFan() {
  const fan = document.getElementById('fan');
  fan.innerHTML = getPalette().map(p => `
    <div class="swatch" data-key="${p.key}" style="background:${p.hex}">
      <span>${p.label}</span>
    </div>
  `).join('');
  
  fan.querySelectorAll('.swatch').forEach(el => {
    el.addEventListener('click', () => {
      const key = el.dataset.key;
      if (activeShades.has(key)) {
        activeShades.delete(key);
        el.classList.remove('active');
      } else {
        activeShades.add(key);
        el.classList.add('active');
      }
      renderGrid();
    });
  });
}

function renderChips() {
  const wrap = document.getElementById('catChips');
  wrap.style.cssText = 'display:flex;gap:10px;flex-wrap:wrap;';
  wrap.innerHTML = CATS.map(c =>
    `<button class="chip ${c.key === activeCat ? 'active' : ''}" data-key="${c.key}">${c.label}</button>`
  ).join('');
  
  wrap.querySelectorAll('.chip').forEach(el => {
    el.addEventListener('click', () => {
      activeCat = el.dataset.key;
      wrap.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      el.classList.add('active');
      renderGrid();
    });
  });
}

function renderGrid() {
  const grid = document.getElementById('grid');
  const HEX = getHex();
  let items = PRODUCTS.filter(p =>
    p.season === currentSeason &&
    (activeCat === 'all' || p.category === activeCat) &&
    (activeShades.size === 0 || activeShades.has(p.shade))
  );
  
  document.getElementById('countLabel').textContent = `${items.length} piece${items.length !== 1 ? 's' : ''}`;
  
  if (!items.length) {
    const none = !PRODUCTS.some(p => p.season === currentSeason);
    grid.innerHTML = `<div class="empty">${none
      ? `No real products curated for ${SEASONS[currentSeason].label} yet — palette's ready, shopping list is next.`
      : 'Nothing in that combination yet — try clearing a filter.'}</div>`;
    return;
  }
  
  grid.innerHTML = items.map(p => {
    const hex = HEX[p.shade] || '#eee';
    const shadeLabel = getPalette().find(s => s.key === p.shade)?.label || p.shade;
    const retailer = RETAILERS[p.retailer];
    const fallback = ICONS[p.category](hex).replace(/"/g, '&quot;');
    const confBadge = p.confidence
      ? `<div class="confidence ${p.confidence}">${p.confidence === 'high' ? '✓ verified' : '? check color'}</div>`
      : '';
    const media = p.img
      ? `<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.replaceWith(Object.assign(document.createElement('div'),{className:'iconfallback',innerHTML:'${fallback}'}));">`
      : ICONS[p.category](hex);
    
    return `<div class="card">
      <div class="swatchblock" style="background:${hex}22">
        <div class="retailer-tag">${retailer.name}</div>
        <div class="shade-tag">${shadeLabel}</div>
        ${confBadge}${media}
      </div>
      <div class="info">
        <div class="name">${p.name}</div>
        <div class="meta">
          <span class="price">${p.price}</span>
          <a class="shop-btn" href="${p.url || retailer.url}" target="_blank" rel="noopener">Shop at ${retailer.name} →</a>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════════════════════════════════════════
// INITIALIZATION
// ══════════════════════════════════════════════════════════════════════════════

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  // Set up navigation
  window.addEventListener('hashchange', handleHash);
  document.querySelectorAll('.nav-link, .nav-logo').forEach(el => {
    el.addEventListener('click', (e) => {
      // Let the hash navigation happen naturally via href
    });
  });

  // Build home view
  buildWheel();
  buildFamilies();
  buildProofStrip();
  buildWheelStatus();

  // Initialize routing
  if (window.location.hash) {
    handleHash();
  } else {
    showView('homeView');
  }
});
