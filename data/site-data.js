/* ============================================================
   SENHONG ATELIER — 全站内容数据源
   改这里 = 全站生效（品牌名 / 地址 / 电话 / 产品 / 导航文案）
   ============================================================ */
window.SITE_DATA = {
  brand: {
    first: 'SENHONG',
    accent: ' ATELIER',
    full: 'SENHONG ATELIER'
  },

  address: {
    city: 'Humen, Dongguan',
    full: 'Humen, Dongguan, Guangdong, China',
    country: 'China'
  },

  contact: {
    phone: '+86 138 0000 0000',
    phoneNote: 'Business hours: Mon–Fri 09:00–18:00 (GMT+8)',
    responseLabel: 'Response Time',
    responseValue: 'Within 24 hours',
    responseNote: 'Mon–Fri · Weekend inquiries replied Monday'
  },

  footer: {
    about: 'Premium OEM/ODM streetwear manufacturer. Humen, Dongguan, China. ISO 9001 & OEKO-TEX certified. Supplying global brands since 2010.',
    copyright: '© 2026 SENHONG ATELIER. All rights reserved.',
    certs: 'ISO 9001 · OEKO-TEX Standard 100',
    productLinks: ['Heavyweight Tees', 'Oversized Tees', 'Hoodie & Jogger Sets', 'Fabric & Craft Detail']
  },

  /* 供应商细节拼图上的英文卖点标签（原文照录） */
  features: ['Well-tailored fit', 'Wrinkle resistant', 'Skin-friendly & soft', 'Breathable, no stuffiness', 'Comfortable to wear', 'Durable & long-lasting'],

  /* 首页 3 个类目卡 */
  categories: [
    { label: 'Heavyweight T-Shirts', image: 'images/cat-tees.webp', href: 'products.html#group-tees' },
    { label: 'Hoodie & Jogger Sets', image: 'images/cat-hoodies.webp', href: 'products.html#group-sets' },
    { label: 'Fabric & Craft Detail', image: 'images/cat-craft.webp', href: 'products.html#group-craft' }
  ],

  /* 首页 New Arrivals 展示的产品（改这里即可换） */
  featured: ['tee-07', 'tee-06', 'hoodie-05', 'hoodie-01', 'tee-01', 'hoodie-02'],

  /* 产品页分组（顺序 = 页面上的 5 个分组） */
  groups: [
    { id: 'tees', title: 'Heavyweight T-Shirts', items: ['tee-01', 'tee-02', 'tee-03', 'tee-04'] },
    { id: 'oversized', title: 'Oversized Street Tees', items: ['tee-05', 'tee-06', 'tee-07', 'tee-08'] },
    { id: 'sets', title: 'Hoodie & Jogger Sets', items: ['hoodie-01', 'hoodie-02', 'hoodie-03', 'hoodie-04'] },
    { id: 'onmodel', title: 'Hoodie Sets — On Model', items: ['hoodie-05', 'hoodie-06', 'hoodie-07', 'hoodie-08'] },
    { id: 'craft', title: 'Fabric & Craft Detail', items: ['craft-01', 'craft-02', 'craft-03', 'craft-04'] }
  ],

  /* 页面标题（动态写入 <title>） */
  titles: {
    'index.html': 'SENHONG ATELIER | Custom Heavyweight T-Shirt & Hoodie Manufacturer',
    'products.html': 'Custom T-Shirts & Hoodies — SENHONG ATELIER',
    'product.html': 'Product — SENHONG ATELIER',
    'services.html': 'Custom Services — SENHONG ATELIER',
    'factory.html': 'Our Factory — SENHONG ATELIER',
    'about.html': 'About Us — SENHONG ATELIER',
    'contact.html': 'Contact — SENHONG ATELIER'
  },

  /* ============ 产品 ============ */
  products: {
    'tee-01': {
      name: 'Washed Coffee Heavyweight Tee', category: 'Heavyweight Tees', group: 'tees',
      weight: '260 GSM', moq: 50, badge: 'New',
      detail: 'Washed cotton jersey · tonal ribbed neck',
      image: 'images/tee-01.webp',
      gallery: ['images/tee-01-g1.webp', 'images/tee-01-g2.webp', 'images/tee-01-g3.webp', 'images/tee-01-g4.webp', 'images/tee-01-g5.webp'],
      imageAlts: ['Model shot', 'Garment on fabric', 'Fabric & stitch detail', 'Colour range', 'Size chart']
    },
    'tee-02': {
      name: 'Raglan Panel Graphic Tee', category: 'Heavyweight Tees', group: 'tees',
      weight: '200 GSM', moq: 50,
      detail: 'Contrast raglan sleeves · front graphic print',
      image: 'images/tee-02.webp',
      gallery: ['images/tee-02-g1.webp', 'images/tee-02-g2.webp', 'images/tee-02-g3.webp', 'images/tee-02-g4.webp', 'images/tee-02-g5.webp'],
      imageAlts: ['Model shot', 'Garment on fabric', 'Fabric & stitch detail', 'Colour range', 'Size chart']
    },
    'tee-03': {
      name: 'White Graphic Heavyweight Tee', category: 'Heavyweight Tees', group: 'tees',
      weight: '300 GSM', moq: 50, badge: 'Best Seller',
      detail: 'Heavy cotton jersey · screen-printed graphic',
      image: 'images/tee-03.webp',
      gallery: ['images/tee-03-g1.webp', 'images/tee-03-g2.webp', 'images/tee-03-g3.webp', 'images/tee-03-g4.webp', 'images/tee-03-g5.webp'],
      imageAlts: ['Model shot', 'Garment on fabric', 'Fabric & stitch detail', 'Colour range', 'Size chart']
    },
    'tee-04': {
      name: 'Washed Blue Graphic Tee', category: 'Heavyweight Tees', group: 'tees',
      weight: '250 GSM', moq: 50,
      detail: 'Washed finish · distressed hem detail',
      image: 'images/tee-04.webp',
      gallery: ['images/tee-04-g1.webp', 'images/tee-04-g2.webp', 'images/tee-04-g3.webp', 'images/tee-04-g4.webp', 'images/tee-04-g5.webp'],
      imageAlts: ['Model shot', 'Garment on fabric', 'Fabric & stitch detail', 'Colour range', 'Size chart']
    },

    'tee-05': {
      name: 'Oversized Contrast-Wash Graphic Tee', category: 'Oversized Tees', group: 'oversized',
      weight: '220 GSM', moq: 50,
      detail: 'Oversized fit · graduated black wash',
      image: 'images/tee-05.webp',
      gallery: ['images/tee-05-g1.webp', 'images/tee-05-g2.webp', 'images/tee-05-g3.webp', 'images/tee-05-g4.webp', 'images/tee-05-g5.webp'],
      imageAlts: ['Model shot', 'Garment on fabric', 'Fabric & stitch detail', 'Colour range', 'Size chart']
    },
    'tee-06': {
      name: 'Oversized Printed Tee (Green)', category: 'Oversized Tees', group: 'oversized',
      weight: '280 GSM', moq: 50,
      detail: 'Oversized fit · large front print',
      image: 'images/tee-06.webp',
      gallery: ['images/tee-06-g1.webp', 'images/tee-06-g2.webp', 'images/tee-06-g3.webp', 'images/tee-06-g4.webp', 'images/tee-06-g5.webp'],
      imageAlts: ['Model shot', 'Garment on fabric', 'Fabric & stitch detail', 'Colour range', 'Size chart']
    },
    'tee-07': {
      name: 'Oversized Printed Tee (Black)', category: 'Oversized Tees', group: 'oversized',
      weight: '240 GSM', moq: 50,
      detail: 'Oversized fit · contrast sleeve trim',
      image: 'images/tee-07.webp',
      gallery: ['images/tee-07-g1.webp', 'images/tee-07-g2.webp', 'images/tee-07-g3.webp', 'images/tee-07-g4.webp', 'images/tee-07-g5.webp'],
      imageAlts: ['Model shot', 'Garment on fabric', 'Fabric & stitch detail', 'Colour range', 'Size chart']
    },
    'tee-08': {
      name: 'Raglan Baseball Tee (Cream & Maroon)', category: 'Oversized Tees', group: 'oversized',
      weight: '280 GSM', moq: 50,
      detail: 'Colour-block raglan · front graphic print',
      image: 'images/tee-08.webp',
      gallery: ['images/tee-08-g1.webp', 'images/tee-08-g2.webp', 'images/tee-08-g3.webp', 'images/tee-08-g4.webp', 'images/tee-08-g5.webp'],
      imageAlts: ['Model shot', 'Garment on fabric', 'Fabric & stitch detail', 'Colour range', 'Size chart']
    },

    'hoodie-01': {
      name: 'Hoodie & Jogger Set (Pink)', category: 'Sets', group: 'sets',
      moq: 50, badge: 'Featured',
      detail: 'Matching 2-piece set · pullover hood',
      image: 'images/hoodie-01.webp',
      gallery: ['images/hoodie-01-g1.webp', 'images/hoodie-01-g2.webp', 'images/hoodie-01-g3.webp', 'images/hoodie-01-g4.webp'],
      imageAlts: ['Model shot', 'Fabric & stitch detail', 'Size chart', 'Flat lay']
    },
    'hoodie-02': {
      name: 'Hoodie & Jogger Set (Royal Blue)', category: 'Sets', group: 'sets',
      moq: 50,
      detail: 'Matching 2-piece set · pullover hood',
      image: 'images/hoodie-02.webp',
      gallery: ['images/hoodie-02-g1.webp', 'images/hoodie-02-g2.webp', 'images/hoodie-02-g3.webp', 'images/hoodie-02-g4.webp'],
      imageAlts: ['Model shot', 'Fabric & stitch detail', 'Size chart', 'Flat lay']
    },
    'hoodie-03': {
      name: 'Hoodie & Jogger Set (Yellow)', category: 'Sets', group: 'sets',
      moq: 50,
      detail: 'Matching 2-piece set · pullover hood',
      image: 'images/hoodie-03.webp',
      gallery: ['images/hoodie-03-g1.webp', 'images/hoodie-03-g2.webp', 'images/hoodie-03-g3.webp', 'images/hoodie-03-g4.webp'],
      imageAlts: ['Model shot', 'Fabric & stitch detail', 'Size chart', 'Flat lay']
    },
    'hoodie-04': {
      name: 'Hoodie & Jogger Set (Orange)', category: 'Sets', group: 'sets',
      moq: 50,
      detail: 'Matching 2-piece set · pullover hood',
      image: 'images/hoodie-04.webp',
      gallery: ['images/hoodie-04-g1.webp', 'images/hoodie-04-g2.webp', 'images/hoodie-04-g3.webp', 'images/hoodie-04-g4.webp'],
      imageAlts: ['Model shot', 'Fabric & stitch detail', 'Size chart', 'Flat lay']
    },

    'hoodie-05': {
      name: 'Maroon Hoodie Set (Dusk Look)', category: 'Sets', group: 'onmodel',
      moq: 50,
      detail: 'Hoodie + joggers · worn on model',
      image: 'images/hoodie-05.webp',
      gallery: ['images/hoodie-05-g1.webp', 'images/hoodie-05-g2.webp', 'images/hoodie-05-g3.webp', 'images/hoodie-05-g4.webp'],
      imageAlts: ['Model shot', 'Fabric & stitch detail', 'Size chart', 'Flat lay']
    },
    'hoodie-06': {
      name: 'Purple Hoodie Set (Golden Hour)', category: 'Sets', group: 'onmodel',
      moq: 50,
      detail: 'Hoodie + joggers · worn on model',
      image: 'images/hoodie-06.webp',
      gallery: ['images/hoodie-06-g1.webp', 'images/hoodie-06-g2.webp', 'images/hoodie-06-g3.webp', 'images/hoodie-06-g4.webp'],
      imageAlts: ['Model shot', 'Fabric & stitch detail', 'Size chart', 'Flat lay']
    },
    'hoodie-07': {
      name: 'Maroon Hoodie Set (City Walk)', category: 'Sets', group: 'onmodel',
      moq: 50,
      detail: 'Hoodie + joggers · worn on model',
      image: 'images/hoodie-07.webp',
      gallery: ['images/hoodie-07-g1.webp', 'images/hoodie-07-g2.webp', 'images/hoodie-07-g3.webp', 'images/hoodie-07-g4.webp'],
      imageAlts: ['Model shot', 'Fabric & stitch detail', 'Size chart', 'Flat lay']
    },
    'hoodie-08': {
      name: 'Black Hoodie Set (Studio Look)', category: 'Sets', group: 'onmodel',
      moq: 50,
      detail: 'Hoodie + joggers · worn on model',
      image: 'images/hoodie-08.webp',
      gallery: ['images/hoodie-08-g1.webp', 'images/hoodie-08-g2.webp', 'images/hoodie-08-g3.webp', 'images/hoodie-08-g4.webp'],
      imageAlts: ['Model shot', 'Fabric & stitch detail', 'Size chart', 'Flat lay']
    },

    'craft-01': {
      name: 'Fabric Detail (Printed Tee)', category: 'Craft Detail', group: 'craft',
      weight: '280 GSM', moq: 50, badge: 'New',
      detail: 'Print close-up · stitch and hem detail',
      image: 'images/craft-01.webp',
      gallery: ['images/craft-01-g1.webp', 'images/craft-01-g2.webp', 'images/craft-01-g3.webp', 'images/craft-01-g4.webp', 'images/craft-01-g5.webp'],
      imageAlts: ['Model shot', 'Fabric & stitch detail', 'Garment on fabric', 'Colour range', 'Size chart']
    },
    'craft-02': {
      name: 'Fabric Detail (Screen-Printed Tee)', category: 'Craft Detail', group: 'craft',
      weight: '300 GSM', moq: 50,
      detail: 'Screen-print close-up · fabric and stitch detail',
      image: 'images/craft-02.webp',
      gallery: ['images/craft-02-g1.webp', 'images/craft-02-g2.webp', 'images/craft-02-g3.webp', 'images/craft-02-g4.webp', 'images/craft-02-g5.webp'],
      imageAlts: ['Model shot', 'Fabric & stitch detail', 'Garment on fabric', 'Colour range', 'Size chart']
    },
    'craft-03': {
      name: 'Fabric Detail (Grey Hoodie Set)', category: 'Craft Detail', group: 'craft',
      moq: 50,
      detail: 'Stitch, cuff and pocket close-ups',
      image: 'images/craft-03.webp',
      gallery: ['images/craft-03-g1.webp', 'images/craft-03-g2.webp', 'images/craft-03-g3.webp', 'images/craft-03-g4.webp'],
      imageAlts: ['Model shot', 'Fabric & stitch detail', 'Size chart', 'Flat lay']
    },
    'craft-04': {
      name: 'Fabric Detail (Sky Blue Hoodie Set)', category: 'Craft Detail', group: 'craft',
      moq: 50,
      detail: 'Stitch, cuff and pocket close-ups',
      image: 'images/craft-04.webp',
      gallery: ['images/craft-04-g1.webp', 'images/craft-04-g2.webp', 'images/craft-04-g3.webp', 'images/craft-04-g4.webp'],
      imageAlts: ['Model shot', 'Fabric & stitch detail', 'Size chart', 'Flat lay']
    }
  }
};
