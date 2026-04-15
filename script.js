/* ============================================
   SUZUKI NJS CIMAHI BANDUNG – FULL SCRIPT
   ============================================ */

// ================= DATA PRODUK =================
const products = [
  {
    id: 'xl7',
    name: 'Suzuki XL7',
    category: 'passenger',
    tagline: '7-Seater SUV Hybrid',
    description: 'SUV 7 penumpang dengan teknologi Smart Hybrid, ground clearance tinggi, dan desain maskulin. Cocok untuk keluarga aktif yang butuh kenyamanan dan efisiensi BBM.',
    image: 'xl7-kuro.png',
    gallery: [
      'xl7-kuro1.png',
    ],
    variants: [
      { name: 'XL7 Zeta MT', price: 271800000 },
      { name: 'XL7 Zeta AT', price: 282800000 },
      { name: 'XL7 Beta MT Hybrid', price: 299300000 },
      { name: 'XL7 Beta AT Hybrid', price: 310300000 },
      { name: 'XL7 Alpha MT Hybrid', price: 310300000 },
      { name: 'XL7 Alpha MT Hybrid 2 Tone', price: 312300000 },
      { name: 'XL7 Alpha AT Hybrid', price: 321800000 },
      { name: 'XL7 Alpha AT Hybrid 2 Tone', price: 323800000 },
      { name: 'XL7 Alpha AT Hybrid Kuro', price: 325800000 },
      { name: 'XL7 Alpha AT Hybrid 2 Tone Kuro', price: 327800000 }
    ],
    colors: [
      { name: 'Pearl White', hex: '#F5F5F0' },
      { name: 'Magma Red', hex: '#8B1A1A' },
      { name: 'Silky Silver', hex: '#B8B8B8' },
      { name: 'Prime Black', hex: '#1A1A1A' }
    ],
    briefSpecs: ['Smart Hybrid', '7-Seater', 'Ground Clearance 200mm', 'Cruise Control', 'LED Headlamp'],
    specs: {
      'Mesin': 'K15B 1.5L Dualjet Hybrid',
      'Tenaga': '104 HP @ 6.000 rpm',
      'Torsi': '138 Nm @ 4.400 rpm',
      'Transmisi': '4AT / 5MT',
      'Bahan Bakar': 'Bensin RON 90+',
      'Kapasitas Tangki': '45 Liter',
      'Dimensi (P x L x T)': '4.450 x 1.775 x 1.710 mm',
      'Wheelbase': '2.740 mm',
      'Ground Clearance': '200 mm',
      'Kapasitas Penumpang': '7 Orang',
      'Keselamatan': 'Dual SRS Airbag, ABS, EBD, ESP',
      'Hiburan': '8" Touchscreen, Bluetooth, USB'
    }
  },
  {
    id: 'ertiga',
    name: 'Suzuki Ertiga',
    category: 'passenger',
    tagline: 'MPV Keluarga Hybrid',
    description: 'MPV keluarga terlaris dengan Smart Hybrid Technology. Irit BBM, kabin luas, dan berkarakter elegan untuk mobilitas keluarga sehari-hari.',
    image: 'SUZUKI_ERTIGA.png',
    gallery: [
      'SUZUKI_ERTIGA1.png',
    ],
    variants: [
      { name: 'All New Ertiga GA', price: 241750000 },
      { name: 'All New Ertiga MC GL MT', price: 265350000 },
      { name: 'All New Ertiga MC GL AT', price: 276400000 },
      { name: 'All New Ertiga MC GX MT', price: 282000000 },
      { name: 'All New Ertiga MC GX AT', price: 293000000 },
      { name: 'All New Ertiga Cruise MT', price: 294800000 },
      { name: 'All New Ertiga Cruise MT 2 Tone', price: 296800000 },
      { name: 'All New Ertiga Cruise AT', price: 305700000 },
      { name: 'All New Ertiga Cruise AT 2 Tone', price: 307700000 },
      { name: 'All New Ertiga MC GL MT (2026)', price: 266900000 },
      { name: 'All New Ertiga MC GL AT (2026)', price: 277900000 }
    ],
    colors: [
      { name: 'Pearl White', hex: '#F5F5F0' },
      { name: 'Magma Red', hex: '#8B1A1A' },
      { name: 'Silky Silver', hex: '#B8B8B8' },
      { name: 'Prime Black', hex: '#1A1A1A' },
      { name: 'Metallic Blue', hex: '#1E3A5F' }
    ],
    briefSpecs: ['Smart Hybrid', '7-Seater', 'Irit BBM', 'Kabin Luas', 'ABS + EBD'],
    specs: {
      'Mesin': 'K15B 1.5L Dualjet Hybrid',
      'Tenaga': '104 HP @ 6.000 rpm',
      'Torsi': '138 Nm @ 4.400 rpm',
      'Transmisi': '4AT / 5MT',
      'Bahan Bakar': 'Bensin RON 90+',
      'Kapasitas Tangki': '45 Liter',
      'Dimensi (P x L x T)': '4.395 x 1.735 x 1.690 mm',
      'Wheelbase': '2.740 mm',
      'Kapasitas Penumpang': '7 Orang',
      'Keselamatan': 'Dual Airbag, ABS, EBD, ISOFIX',
      'Hiburan': '8" Touchscreen, 4 Speaker'
    }
  },
  {
    id: 'carry',
    name: 'Suzuki Carry',
    category: 'commercial',
    tagline: 'Raja Niaga Indonesia',
    description: 'Pick up terlaris di Indonesia dengan daya angkut maksimal, mesin bandel, dan biaya operasional rendah. Pilihan tepat untuk usaha Anda.',
    image: 'carry-pu.png',
    gallery: [
      'carry-pu1.png',
    ],
    variants: [
      { name: 'New Carry PU FD', price: 178200000 },
      { name: 'New Carry PU FD AC PS', price: 186200000 },
      { name: 'New Carry PU WD', price: 179300000 },
      { name: 'New Carry PU WD AC PS', price: 187100000 }
    ],
    colors: [
      { name: 'Super White', hex: '#F5F5F0' },
      { name: 'Silky Silver', hex: '#B8B8B8' },
      { name: 'Black', hex: '#1A1A1A' }
    ],
    briefSpecs: ['Daya Angkut 1 Ton', 'Mesin Bandel', 'Rangka Kuat', 'Flat & Wide Deck', 'PS & AC'],
    specs: {
      'Mesin': 'K15B 1.5L',
      'Tenaga': '96 HP @ 6.000 rpm',
      'Torsi': '135 Nm @ 4.400 rpm',
      'Transmisi': '5MT',
      'Bahan Bakar': 'Bensin RON 90+',
      'Kapasitas Tangki': '42 Liter',
      'Dimensi (P x L x T)': '4.195 x 1.765 x 1.910 mm',
      'Wheelbase': '2.530 mm',
      'Daya Angkut': '± 1.000 kg',
      'Fitur': 'Power Steering, AC (tipe tertentu)'
    }
  },
  {
    id: 'jimny-3door',
    name: 'Suzuki Jimny 3 Door',
    category: 'passenger',
    tagline: 'Legendary 4x4 Compact',
    description: 'Ikon off-road legendaris dengan desain retro-modern. Jimny 3 Door yang compact dan agile, siap taklukkan segala medan.',
    image: 'jimny3.png',
    gallery: [
      'jimny3-1.png',
    ],
    variants: [
      { name: 'Jimny 3 Door MT', price: 511550000 },
      { name: 'Jimny 3 Door AT', price: 524000000 },
      { name: 'Jimny 3 Door MT 2 Tone', price: 514850000 },
      { name: 'Jimny 3 Door AT 2 Tone', price: 527300000 }
    ],
    colors: [
      { name: 'Kinetic Yellow', hex: '#E8D44D' },
      { name: 'Jungle Green', hex: '#2E5A2E' },
      { name: 'Pearl White', hex: '#F5F5F0' },
      { name: 'Brisk Blue', hex: '#2255AA' },
      { name: 'Sizzling Red', hex: '#C41E3A' },
      { name: 'Black', hex: '#1A1A1A' }
    ],
    briefSpecs: ['4WD Ladder Frame', '3 Door', 'Part-time 4WD', 'Differential Lock', 'Retro Modern'],
    specs: {
      'Mesin': 'K15B 1.5L',
      'Tenaga': '102 HP @ 6.000 rpm',
      'Torsi': '130 Nm @ 4.000 rpm',
      'Transmisi': '4AT / 5MT',
      'Penggerak': 'Part-time 4WD',
      'Bahan Bakar': 'Bensin RON 90+',
      'Dimensi (P x L x T)': '3.645 x 1.645 x 1.720 mm',
      'Wheelbase': '2.250 mm',
      'Ground Clearance': '210 mm',
      'Kapasitas Penumpang': '4 Orang',
      'Off-Road': '4H, 4L, Diff Lock'
    }
  },
  {
    id: 'jimny-5door',
    name: 'Suzuki Jimny 5 Door',
    category: 'passenger',
    tagline: 'Legendary 4x4 Family',
    description: 'Jimny legendaris kini hadir dengan 5 pintu untuk kenyamanan keluarga. Tetap tangguh di segala medan dengan kapasitas penumpang lebih banyak.',
    image: 'jimny5.png',
    gallery: [
      'jimny5-1.png',
    ],
    variants: [
      { name: 'Jimny 5 Door MT', price: 496100000 },
      { name: 'Jimny 5 Door AT', price: 508700000 },
      { name: 'Jimny 5 Door MT 2 Tone', price: 499350000 },
      { name: 'Jimny 5 Door AT 2 Tone', price: 511900000 }
    ],
    colors: [
      { name: 'Kinetic Yellow', hex: '#E8D44D' },
      { name: 'Jungle Green', hex: '#2E5A2E' },
      { name: 'Pearl White', hex: '#F5F5F0' },
      { name: 'Brisk Blue', hex: '#2255AA' },
      { name: 'Sizzling Red', hex: '#C41E3A' },
      { name: 'Black', hex: '#1A1A1A' }
    ],
    briefSpecs: ['4WD Ladder Frame', '5 Door', 'Part-time 4WD', 'Differential Lock', 'Keluarga Petualang'],
    specs: {
      'Mesin': 'K15B 1.5L',
      'Tenaga': '102 HP @ 6.000 rpm',
      'Torsi': '130 Nm @ 4.000 rpm',
      'Transmisi': '4AT / 5MT',
      'Penggerak': 'Part-time 4WD',
      'Bahan Bakar': 'Bensin RON 90+',
      'Dimensi (P x L x T)': '3.985 x 1.645 x 1.720 mm',
      'Wheelbase': '2.590 mm',
      'Ground Clearance': '210 mm',
      'Kapasitas Penumpang': '5 Orang',
      'Off-Road': '4H, 4L, Diff Lock'
    }
  },
  {
    id: 'grand-vitara',
    name: 'Suzuki Grand Vitara',
    category: 'passenger',
    tagline: 'SUV Hybrid Premium',
    description: 'SUV premium dengan teknologi ALLGRIP intelligent AWD dan Smart Hybrid. Desain mewah, berkendara nyaman di segala medan.',
    image: 'grand-vitara.png',
    gallery: [
      'grand-vitara1.png',
    ],
    variants: [
      { name: 'Grand Vitara GX MC AT', price: 421900000 },
      { name: 'Grand Vitara GX MC AT 2 Tone', price: 424900000 }
    ],
    colors: [
      { name: 'Pearl White', hex: '#F5F5F0' },
      { name: 'Sapphire Blue', hex: '#1E3A5F' },
      { name: 'Magma Red', hex: '#8B1A1A' },
      { name: 'Premium Silver', hex: '#B8B8B8' },
      { name: 'Black', hex: '#1A1A1A' }
    ],
    briefSpecs: ['ALLGRIP AWD', 'Smart Hybrid', 'Tectonic Body', 'Head-up Display', '360° Camera'],
    specs: {
      'Mesin': 'K15B 1.5L Dualjet Hybrid',
      'Tenaga': '103 HP @ 6.000 rpm',
      'Torsi': '134 Nm @ 4.400 rpm',
      'Transmisi': '6AT',
      'Penggerak': 'ALLGRIP (Alpha) / FWD',
      'Bahan Bakar': 'Bensin RON 90+',
      'Dimensi (P x L x T)': '4.345 x 1.785 x 1.645 mm',
      'Wheelbase': '2.600 mm',
      'Ground Clearance': '210 mm',
      'Kapasitas Penumpang': '5 Orang',
      'Keselamatan': '6 Airbag, ABS, EBD, ESP, Hill Descent'
    }
  },
  {
    id: 'spresso',
    name: 'Suzuki S-Presso',
    category: 'passenger',
    tagline: 'City Car Irit & Praktis',
    description: 'City car compact dengan ground clearance tinggi, irit BBM, dan harga terjangkau. Pilihan tepat untuk mobilitas harian di kota.',
    image: 'spresso.png',
    gallery: [
      'spresso1.png',
    ],
    variants: [
      { name: 'S-Presso MT', price: 176600000 },
      { name: 'S-Presso AT', price: 186600000 }
    ],
    colors: [
      { name: 'Sapphire Blue', hex: '#1E3A5F' },
      { name: 'Silky Silver', hex: '#B8B8B8' },
      { name: 'Pearl White', hex: '#F5F5F0' },
      { name: 'Fire Red', hex: '#C41E3A' },
      { name: 'Black', hex: '#1A1A1A' }
    ],
    briefSpecs: ['Ground Clearance 180mm', 'Irit BBM', 'AT Available', 'Compact', 'Harga Terjangkau'],
    specs: {
      'Mesin': 'K10B 1.0L',
      'Tenaga': '66 HP @ 5.500 rpm',
      'Torsi': '90 Nm @ 3.500 rpm',
      'Transmisi': 'AT / 5MT',
      'Bahan Bakar': 'Bensin RON 90+',
      'Kapasitas Tangki': '27 Liter',
      'Dimensi (P x L x T)': '3.565 x 1.520 x 1.565 mm',
      'Wheelbase': '2.380 mm',
      'Ground Clearance': '180 mm',
      'Kapasitas Penumpang': '5 Orang',
      'Fitur': 'Touchscreen, LED DRL'
    }
  },
  {
    id: 'fronx',
    name: 'Suzuki Fronx',
    category: 'passenger',
    tagline: 'Crossover Compact Stylish',
    description: 'Crossover compact dengan desain futuristik, fitur canggih, dan berkendara menyenangkan. Cocok untuk generasi muda yang berani tampil beda.',
    image: 'fronx.png',
    gallery: [
      'fronx1.png',
    ],
    variants: [
      { name: 'Fronx GL MT', price: 264300000 },
      { name: 'Fronx GL AT', price: 275300000 },
      { name: 'Fronx GX MT', price: 286700000 },
      { name: 'Fronx GX AT', price: 304900000 },
      { name: 'Fronx SGX AT', price: 331000000 },
      { name: 'Fronx SGX AT (Ivory & Putih)', price: 331000000 },
      { name: 'Fronx SGX AT 2 Tone', price: 333000000 },
      { name: 'Fronx GL AT (2026)', price: 277300000 }
    ],
    colors: [
      { name: 'Pearl White', hex: '#F5F5F0' },
      { name: 'Sapphire Blue', hex: '#1E3A5F' },
      { name: 'Magma Red', hex: '#8B1A1A' },
      { name: 'Silky Silver', hex: '#B8B8B8' },
      { name: 'Black', hex: '#1A1A1A' }
    ],
    briefSpecs: ['Turbo Engine', 'HUD Display', 'LED Headlamp', 'Cruise Control', '9" Touchscreen'],
    specs: {
      'Mesin': 'K15B 1.5L Turbo',
      'Tenaga': '140 HP @ 5.500 rpm',
      'Torsi': '200 Nm @ 1.500-3.000 rpm',
      'Transmisi': '6AT / 5MT',
      'Bahan Bakar': 'Bensin RON 90+',
      'Kapasitas Tangki': '44 Liter',
      'Dimensi (P x L x T)': '4.315 x 1.765 x 1.640 mm',
      'Wheelbase': '2.600 mm',
      'Ground Clearance': '195 mm',
      'Kapasitas Penumpang': '5 Orang',
      'Keselamatan': '6 Airbag, ABS, EBD, ESP',
      'Hiburan': '9" Touchscreen, Wireless Charging'
    }
  },
   {
    id: 'apv',
    name: 'Suzuki APV',
    category: 'passenger',
    tagline: 'MPV Keluarga Tangguh',
    description: 'MPV legendaris yang tangguh untuk segala kebutuhan keluarga. Kabin luas, mesin bandel, dan harga terjangkau untuk mobilitas harian.',
    image: 'apv.png',
    gallery: [
      'apv1.png',
    ],
    variants: [
      { name: 'APV GE PS MT AB', price: 229300000 },
      { name: 'APV GL MT AB', price: 237800000 },
      { name: 'APV GX MT AB', price: 251800000 },
      { name: 'APV SGX MT AB', price: 255300000 }
    ],
    colors: [
      { name: 'Silky Silver', hex: '#B8B8B8' },
      { name: 'Super White', hex: '#F5F5F0' },
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Blue', hex: '#1E3A5F' }
    ],
    briefSpecs: ['Kabin Luas', 'Mesin Bandel', '8 Penumpang', 'Harga Terjangkau', 'AC Double Blower'],
    specs: {
      'Mesin': 'G15A 1.5L',
      'Tenaga': '104 HP @ 6.000 rpm',
      'Torsi': '134 Nm @ 3.000 rpm',
      'Transmisi': '5MT',
      'Bahan Bakar': 'Bensin RON 90+',
      'Kapasitas Tangki': '43 Liter',
      'Dimensi (P x L x T)': '4.150 x 1.655 x 1.855 mm',
      'Wheelbase': '2.625 mm',
      'Kapasitas Penumpang': '8 Orang',
      'Fitur': 'AC Double Blower, Power Window'
    }
  },
  {
    id: 'apv-blind-van',
    name: 'Suzuki APV Blind Van',
    category: 'commercial',
    tagline: 'Van Niaga Andalan',
    description: 'APV Blind Van adalah solusi niaga terpercaya untuk pengiriman barang. Kabin tertutup tanpa jendela, muat banyak barang dengan biaya operasional rendah.',
    image: 'apv-blind-van.png',
    gallery: [
      'apv-blind-van1.png',
    ],
    variants: [
      { name: 'APV Blind Van', price: 187300000 }
    ],
    colors: [
      { name: 'Super White', hex: '#F5F5F0' },
      { name: 'Silky Silver', hex: '#B8B8B8' }
    ],
    briefSpecs: ['Kabin Tertutup', 'Daya Angkut Besar', 'Biaya Operasional Rendah', 'Mesin Bandel', 'Harga Terjangkau'],
    specs: {
      'Mesin': 'G15A 1.5L',
      'Tenaga': '104 HP @ 6.000 rpm',
      'Torsi': '134 Nm @ 3.000 rpm',
      'Transmisi': '5MT',
      'Bahan Bakar': 'Bensin RON 90+',
      'Kapasitas Tangki': '43 Liter',
      'Dimensi (P x L x T)': '4.150 x 1.655 x 1.855 mm',
      'Wheelbase': '2.625 mm',
      'Tipe': 'Blind Van (Tanpa Jendela Samping)',
      'Fitur': 'Kabin Tertutup, Rak Muatan'
    }
  },


// ================= DATA SERAH TERIMA =================
const deliveryPhotos = [
  { src: 'serah-terima.jpeg', caption: 'Serah Terima Suzuki XL7 Alpha AT' },
  { src: 'serah-terima1.jpeg', caption: 'Serah Terima Suzuki Ertiga GX Hybrid' },
  { src: 'serah-terima2.jpeg', caption: 'Serah Terima Suzuki Carry Wide Deck' },
  { src: 'serah-terima3.jpeg', caption: 'Serah Terima Suzuki Jimny 5 Door' },
  { src: 'serah-terima4.jpeg', caption: 'Serah Terima Grand Vitara Alpha' },
  { src: 'serah-terima5.jpeg', caption: 'Serah Terima S-Presso GX AGS' },
  { src: 'serah-terima6.jpeg', caption: 'Serah Terima Suzuki Fronx RX Turbo' },
  { src: 'serah-terima7.jpeg', caption: 'Serah Terima Suzuki Baleno Alpha AT' },
  { src: 'serah-terima8.jpeg', caption: 'Serah Terima Mobil Suzuki' },
  { src: 'serah-terima9.jpeg', caption: 'Serah Terima Mobil Suzuki' },
  { src: 'serah-terima10.jpeg', caption: 'Serah Terima Mobil Suzuki' },
  { src: 'serah-terima11.jpeg', caption: 'Serah Terima Mobil Suzuki' },
  { src: 'serah-terima12.jpeg', caption: 'Serah Terima Mobil Suzuki' },
  { src: 'serah-terima13.jpeg', caption: 'Serah Terima Mobil Suzuki' },
  { src: 'serah-terima14.jpeg', caption: 'Serah Terima Mobil Suzuki' },
  { src: 'serah-terima15.jpeg', caption: 'Serah Terima Mobil Suzuki' },
  { src: 'serah-terima16.jpeg', caption: 'Serah Terima Mobil Suzuki' },
  { src: 'serah-terima17.jpeg', caption: 'Serah Terima Mobil Suzuki' },
  { src: 'serah-terima18.jpeg', caption: 'Serah Terima Mobil Suzuki' },
  { src: 'serah-terima19.jpeg', caption: 'Serah Terima Mobil Suzuki' },
  { src: 'serah-terima20.jpeg', caption: 'Serah Terima Mobil Suzuki' },
  { src: 'serah-terima21.jpeg', caption: 'Serah Terima Mobil Suzuki' },
  { src: 'serah-terima22.jpeg', caption: 'Serah Terima Mobil Suzuki' }
];
// ================= VARIABEL GLOBAL =================
let currentFilter = 'all';
let currentProduct = null;
let landingPage = 1;
const landingPerPage = 6;

// ================= UTILITAS =================
function formatRupiah(angka) {
  if (!angka && angka !== 0) return '';
  const num = typeof angka === 'string' ? angka.replace(/\D/g, '') : angka;
  return 'Rp ' + parseInt(num).toLocaleString('id-ID');
}

function parseRupiah(str) {
  if (!str) return 0;
  return parseInt(str.replace(/\D/g, '')) || 0;
}

function hitungCicilan(harga, dp, tenor, bunga) {
  const pinjaman = harga - dp;
  if (pinjaman <= 0) return 0;
  const r = (bunga / 100) / 12;
  if (r === 0) return pinjaman / tenor;
  return pinjaman * (r * Math.pow(1 + r, tenor)) / (Math.pow(1 + r, tenor) - 1);
}

// ================= DOM READY =================
document.addEventListener('DOMContentLoaded', function () {
  initNavbar();
  initScrollReveal();
  initCategoryFilter();
  renderProducts();
  initGlobalSimulation();
  initModal();
  initFAQ();
  initContactForm();
  initButtonRipple();
  initStatsCounter();
  renderLandingPages();
  renderDeliveryGallery();
  initVideoFallback();
});

// ================= NAVBAR =================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  const overlay = document.getElementById('nav-overlay');
  const links = menu.querySelectorAll('a');

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', function () {
    const y = window.scrollY;
    if (y > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = y;

    // Active link berdasarkan scroll position
    updateActiveNav();
  }, { passive: true });

  // Mobile toggle
  function closeMenu() {
    toggle.classList.remove('active');
    menu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openMenu() {
    toggle.classList.add('active');
    menu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  toggle.addEventListener('click', function () {
    if (menu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);

  links.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
}

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#nav-menu a');
  let current = '';

  sections.forEach(function (section) {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

// ================= SCROLL REVEAL =================
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(function (el, i) {
    el.style.transitionDelay = (i % 4) * 0.08 + 's';
    observer.observe(el);
  });
}

// ================= KATEGORI FILTER =================
function initCategoryFilter() {
  const chips = document.querySelectorAll('.btn-chip[data-filter]');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      currentFilter = chip.getAttribute('data-filter');
      renderProducts();
    });
  });
}

// ================= RENDER PRODUK =================
function renderProducts() {
  const grid = document.getElementById('product-list');
  if (!grid) return;

  const filtered = currentFilter === 'all'
    ? products
    : products.filter(function (p) { return p.category === currentFilter; });

  grid.innerHTML = '';

  filtered.forEach(function (product, i) {
    const minPrice = product.variants.reduce(function (min, v) { return v.price < min ? v.price : min; }, Infinity);
    const card = document.createElement('div');
    card.className = 'product-card reveal revealed';
    card.style.animationDelay = (i * 0.08) + 's';
    card.setAttribute('data-product-id', product.id);

    card.innerHTML =
      '<div class="product-card-image-wrap">' +
        '<img src="' + product.image + '" alt="' + product.name + '" class="product-card-image" loading="lazy" />' +
        '<span class="product-card-category-badge">' + (product.category === 'passenger' ? 'Passenger' : 'Commercial') + '</span>' +
      '</div>' +
      '<div class="product-card-body">' +
        '<h3 class="product-card-name">' + product.name + '</h3>' +
        '<p class="product-card-tagline">' + product.tagline + '</p>' +
        '<p class="product-card-price">' + formatRupiah(minPrice) + ' <small>OTR mulai</small></p>' +
        '<div class="product-card-cta">Lihat Detail &rarr;</div>' +
      '</div>';

    card.addEventListener('click', function () {
      openModal(product.id);
    });

    grid.appendChild(card);
  });
}

// ================= SIMULASI KREDIT GLOBAL =================
function initGlobalSimulation() {
  const form = document.getElementById('global-simulation-form');
  const productSelect = document.getElementById('global-product-select');
  const variantSelect = document.getElementById('global-variant-select');
  const priceInput = document.getElementById('global-price-input');

  if (!form) return;

  // Isi dropdown produk
  products.forEach(function (p) {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.name;
    productSelect.appendChild(opt);
  });

  // Saat produk berubah, isi varian
  productSelect.addEventListener('change', function () {
    const prod = products.find(function (p) { return p.id === productSelect.value; });
    variantSelect.innerHTML = '';
    if (prod) {
      prod.variants.forEach(function (v) {
        const opt = document.createElement('option');
        opt.value = v.price;
        opt.textContent = v.name + ' — ' + formatRupiah(v.price);
        variantSelect.appendChild(opt);
      });
      priceInput.value = formatRupiah(prod.variants[0].price);
    }
  });

  // Saat varian berubah
  variantSelect.addEventListener('change', function () {
    priceInput.value = formatRupiah(variantSelect.value);
  });

  // Format rupiah otomatis
  setupRupiahInput(priceInput);
  setupRupiahInput(document.getElementById('global-dp-input'));

  // Trigger awal
  productSelect.dispatchEvent(new Event('change'));

  // Submit
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const harga = parseRupiah(priceInput.value);
    const dp = parseRupiah(document.getElementById('global-dp-input').value);
    const tenor = parseInt(document.getElementById('global-tenor-input').value);
    const bunga = parseFloat(document.getElementById('global-interest-input').value) || 0;

    if (harga <= 0) return alert('Masukkan harga mobil yang valid.');
    if (dp >= harga) return alert('DP harus lebih kecil dari harga mobil.');

    const cicilan = hitungCicilan(harga, dp, tenor, bunga);
    const totalBayar = dp + (cicilan * tenor);
    const totalBunga = totalBayar - harga;

    const resultEl = document.getElementById('global-simulation-result');
    resultEl.classList.remove('hidden');
    resultEl.innerHTML =
      '<div class="sim-result-grid">' +
        '<div class="sim-result-item"><p class="sim-result-value">' + formatRupiah(harga) + '</p><p class="sim-result-label">Harga Mobil</p></div>' +
        '<div class="sim-result-item"><p class="sim-result-value">' + formatRupiah(dp) + '</p><p class="sim-result-label">Uang Muka (DP)</p></div>' +
        '<div class="sim-result-item"><p class="sim-result-value">' + tenor + ' Bulan</p><p class="sim-result-label">Tenor</p></div>' +
        '<div class="sim-result-item"><p class="sim-result-value">' + bunga + '%</p><p class="sim-result-label">Bunga / Tahun</p></div>' +
      '</div>' +
      '<div class="sim-result-highlight">' +
        '<p class="sim-result-value">' + formatRupiah(Math.round(cicilan)) + '</p>' +
        '<p class="sim-result-label">Cicilan Per Bulan</p>' +
      '</div>' +
      '<div class="sim-result-grid" style="margin-top:16px;">' +
        '<div class="sim-result-item"><p class="sim-result-value">' + formatRupiah(Math.round(totalBayar)) + '</p><p class="sim-result-label">Total Pembayaran</p></div>' +
        '<div class="sim-result-item"><p class="sim-result-value">' + formatRupiah(Math.round(totalBunga)) + '</p><p class="sim-result-label">Total Bunga</p></div>' +
      '</div>' +
      '<p class="sim-disclaimer">* Simulasi ini hanya ilustrasi. Nilai cicilan aktual dapat berbeda sesuai kebijakan leasing dan dealer.</p>';

    resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

function setupRupiahInput(input) {
  if (!input) return;
  input.addEventListener('input', function () {
    const raw = input.value.replace(/\D/g, '');
    if (raw) {
      input.value = formatRupiah(parseInt(raw));
    } else {
      input.value = '';
    }
  });
  input.addEventListener('focus', function () {
    const raw = input.value.replace(/\D/g, '');
    if (raw) input.value = raw;
  });
  input.addEventListener('blur', function () {
    const raw = input.value.replace(/\D/g, '');
    if (raw) input.value = formatRupiah(parseInt(raw));
  });
}

// ================= MODAL PRODUK =================
function initModal() {
  const modal = document.getElementById('product-modal');
  const closeBtn = document.getElementById('modal-close');

  if (!modal) return;

  // Close
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  // Tabs
  const tabs = modal.querySelectorAll('.tab-button');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      const target = tab.getAttribute('data-tab');
      document.getElementById('tab-specs').classList.toggle('hidden', target !== 'specs');
      document.getElementById('tab-simulation').classList.toggle('hidden', target !== 'simulation');
    });
  });

  // Modal simulation form
  const modalSimForm = document.getElementById('modal-simulation-form');
  if (modalSimForm) {
    setupRupiahInput(document.getElementById('modal-price-input'));
    setupRupiahInput(document.getElementById('modal-dp-input'));

    modalSimForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const harga = parseRupiah(document.getElementById('modal-price-input').value);
      const dp = parseRupiah(document.getElementById('modal-dp-input').value);
      const tenor = parseInt(document.getElementById('modal-tenor-input').value);
      const bunga = parseFloat(document.getElementById('modal-interest-input').value) || 0;

      if (harga <= 0) return alert('Masukkan harga mobil yang valid.');
      if (dp >= harga) return alert('DP harus lebih kecil dari harga mobil.');

      const cicilan = hitungCicilan(harga, dp, tenor, bunga);
      const totalBayar = dp + (cicilan * tenor);
      const totalBunga = totalBayar - harga;

      const resultEl = document.getElementById('modal-simulation-result');
      resultEl.innerHTML =
        '<div class="sim-result-grid">' +
          '<div class="sim-result-item"><p class="sim-result-value">' + formatRupiah(harga) + '</p><p class="sim-result-label">Harga Mobil</p></div>' +
          '<div class="sim-result-item"><p class="sim-result-value">' + formatRupiah(dp) + '</p><p class="sim-result-label">Uang Muka</p></div>' +
          '<div class="sim-result-item"><p class="sim-result-value">' + tenor + ' Bulan</p><p class="sim-result-label">Tenor</p></div>' +
          '<div class="sim-result-item"><p class="sim-result-value">' + bunga + '%</p><p class="sim-result-label">Bunga</p></div>' +
        '</div>' +
        '<div class="sim-result-highlight">' +
          '<p class="sim-result-value">' + formatRupiah(Math.round(cicilan)) + '</p>' +
          '<p class="sim-result-label">Cicilan Per Bulan</p>' +
        '</div>' +
        '<div class="sim-result-grid" style="margin-top:16px;">' +
          '<div class="sim-result-item"><p class="sim-result-value">' + formatRupiah(Math.round(totalBayar)) + '</p><p class="sim-result-label">Total Pembayaran</p></div>' +
          '<div class="sim-result-item"><p class="sim-result-value">' + formatRupiah(Math.round(totalBunga)) + '</p><p class="sim-result-label">Total Bunga</p></div>' +
        '</div>' +
        '<p class="sim-disclaimer">* Simulasi ilustrasi, nilai aktual dapat berbeda.</p>';
    });
  }
}

function openModal(productId) {
  const product = products.find(function (p) { return p.id === productId; });
  if (!product) return;

  currentProduct = product;
  const modal = document.getElementById('product-modal');

  // Gambar utama
  document.getElementById('modal-product-image').src = product.image;
  document.getElementById('modal-product-image').alt = product.name;

  // Gallery
  const galleryEl = document.getElementById('modal-product-gallery');
  galleryEl.innerHTML = '';
  var allImages = [product.image].concat(product.gallery);
  allImages.forEach(function (src, i) {
    var img = document.createElement('img');
    img.src = src;
    img.alt = product.name + ' gallery ' + (i + 1);
    img.loading = 'lazy';
    if (i === 0) img.classList.add('active');
    img.addEventListener('click', function () {
      document.getElementById('modal-product-image').src = src;
      galleryEl.querySelectorAll('img').forEach(function (g) { g.classList.remove('active'); });
      img.classList.add('active');
    });
    galleryEl.appendChild(img);
  });

  // Info
  document.getElementById('modal-product-name').textContent = product.name;
  document.getElementById('modal-product-category').textContent = product.tagline;
  document.getElementById('modal-product-description').textContent = product.description;

  // Harga awal dari varian pertama
  var firstVariant = product.variants[0];
  document.getElementById('modal-price').textContent = formatRupiah(firstVariant.price);
  document.getElementById('modal-price-input').value = formatRupiah(firstVariant.price);
  document.getElementById('modal-dp-input').value = formatRupiah(Math.round(firstVariant.price * 0.2));

  // Brief specs
  var briefEl = document.getElementById('modal-brief-specs');
  briefEl.innerHTML = '';
  product.briefSpecs.forEach(function (s) {
    var li = document.createElement('li');
    li.textContent = s;
    briefEl.appendChild(li);
  });

  // Variants
  var varBtns = document.getElementById('variant-buttons');
  varBtns.innerHTML = '';
  product.variants.forEach(function (v, i) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'variant-btn' + (i === 0 ? ' active' : '');
    btn.textContent = v.name;
    btn.addEventListener('click', function () {
      varBtns.querySelectorAll('.variant-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      document.getElementById('modal-price').textContent = formatRupiah(v.price);
      document.getElementById('modal-price-input').value = formatRupiah(v.price);
      document.getElementById('modal-dp-input').value = formatRupiah(Math.round(v.price * 0.2));
    });
    varBtns.appendChild(btn);
  });

  // Colors
  var colorBtns = document.getElementById('color-buttons');
  colorBtns.innerHTML = '';
  product.colors.forEach(function (c, i) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'color-btn' + (i === 0 ? ' active' : '');
    btn.innerHTML = '<span class="color-swatch" style="background:' + c.hex + '"></span>' + c.name;
    btn.addEventListener('click', function () {
      colorBtns.querySelectorAll('.color-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
    });
    colorBtns.appendChild(btn);
  });

  // Specs table
  var specsEl = document.getElementById('modal-specs-detail');
  specsEl.innerHTML = '<table class="specs-table">';
  Object.keys(product.specs).forEach(function (key) {
    specsEl.innerHTML += '<tr><td>' + key + '</td><td>' + product.specs[key] + '</td></tr>';
  });
  specsEl.innerHTML += '</table>';

  // Reset tab
  var tabs = modal.querySelectorAll('.tab-button');
  tabs.forEach(function (t) { t.classList.remove('active'); });
  tabs[0].classList.add('active');
  document.getElementById('tab-specs').classList.remove('hidden');
  document.getElementById('tab-simulation').classList.add('hidden');

  // Clear result
  document.getElementById('modal-simulation-result').innerHTML = '';

  // Show
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  var modal = document.getElementById('product-modal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  currentProduct = null;
}

// ================= DELIVERY MODAL =================
function renderDeliveryGallery() {
  var grid = document.getElementById('delivery-gallery');
  if (!grid) return;

  grid.innerHTML = '';
  deliveryPhotos.forEach(function (photo) {
    var item = document.createElement('div');
    item.className = 'delivery-item';
    item.innerHTML = '<img src="' + photo.src + '" alt="' + photo.caption + '" loading="lazy" />';
    item.addEventListener('click', function () {
      var dModal = document.getElementById('delivery-modal');
      document.getElementById('delivery-modal-img').src = photo.src;
      document.getElementById('delivery-modal-img').alt = photo.caption;
      dModal.classList.remove('hidden');
      dModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
    grid.appendChild(item);
  });

  // Close delivery modal
  var closeBtn = document.getElementById('delivery-modal-close');
  var dModal = document.getElementById('delivery-modal');
  closeBtn.addEventListener('click', function () {
    dModal.classList.add('hidden');
    dModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
  dModal.addEventListener('click', function (e) {
    if (e.target === dModal) {
      dModal.classList.add('hidden');
      dModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });
}

// ================= FAQ ACCORDION =================
function initFAQ() {
  var items = document.querySelectorAll('.faq-item');
  items.forEach(function (item) {
    var btn = item.querySelector('.faq-question');
    btn.addEventListener('click', function () {
      var isActive = item.classList.contains('active');

      // Tutup semua
      items.forEach(function (i) {
        i.classList.remove('active');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Buka yang diklik (kalau sebelumnya tertutup)
      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ================= CONTACT FORM =================
function initContactForm() {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('contact-name').value.trim();
    var phone = document.getElementById('contact-phone').value.trim();
    var email = document.getElementById('contact-email').value.trim();
    var message = document.getElementById('contact-message').value.trim();

    if (!name || !phone || !message) {
      alert('Mohon isi Nama, No. HP, dan Pesan.');
      return;
    }

    // Kirim via WhatsApp
    var waText = 'Halo Sales Suzuki Naripan Bandung,\n\n';
    waText += 'Nama: ' + name + '\n';
    waText += 'No. HP: ' + phone + '\n';
    if (email) waText += 'Email: ' + email + '\n';
    waText += '\nPesan: ' + message;

    var waUrl = 'https://wa.me/6285724887779?text=' + encodeURIComponent(waText);
    window.open(waUrl, '_blank');
  });
}

// ================= BUTTON RIPPLE =================
function initButtonRipple() {
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.btn');
    if (!btn) return;

    var ripple = document.createElement('span');
    ripple.className = 'ripple';
    var rect = btn.getBoundingClientRect();
    var size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    btn.appendChild(ripple);

    ripple.addEventListener('animationend', function () {
      ripple.remove();
    });
  });
}

// ================= STATS COUNTER =================
function initStatsCounter() {
  var statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (!statNumbers.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(function (el) {
    observer.observe(el);
  });
}

function animateCounter(el) {
  var target = parseInt(el.getAttribute('data-target'));
  var duration = 2000;
  var start = 0;
  var startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = Math.min((timestamp - startTime) / duration, 1);
    // Easing
    var eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = target;
    }
  }

  requestAnimationFrame(step);
}

// ================= LANDING PAGES + PAGINATION =================
function renderLandingPages() {
  var grid = document.getElementById('landing-grid');
  var paginationEl = document.getElementById('landing-pagination');
  if (!grid) return;

  var cards = grid.querySelectorAll('.landing-card');
  var total = cards.length;
  var totalPages = Math.ceil(total / landingPerPage);

  function showPage(page) {
    landingPage = page;
    cards.forEach(function (card, i) {
      if (i >= (page - 1) * landingPerPage && i < page * landingPerPage) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });

    // Render pagination buttons
    if (totalPages <= 1) {
      paginationEl.innerHTML = '';
      return;
    }

    var html = '';
    html += '<button class="page-btn" data-page="' + (page - 1) + '"' + (page <= 1 ? ' disabled' : '') + '>&laquo;</button>';

    for (var p = 1; p <= totalPages; p++) {
      html += '<button class="page-btn' + (p === page ? ' active' : '') + '" data-page="' + p + '">' + p + '</button>';
    }

    html += '<button class="page-btn" data-page="' + (page + 1) + '"' + (page >= totalPages ? ' disabled' : '') + '>&raquo;</button>';
    paginationEl.innerHTML = html;

    // Event pagination
    paginationEl.querySelectorAll('.page-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var p = parseInt(btn.getAttribute('data-page'));
        if (p >= 1 && p <= totalPages) {
          showPage(p);
          grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  showPage(1);
}

// ================= VIDEO FALLBACK =================
function initVideoFallback() {
  var video = document.getElementById('hero-video');
  if (!video) return;

  video.addEventListener('error', function () {
    video.style.display = 'none';
    var wrap = video.closest('.hero-video-wrap');
    if (wrap) {
      wrap.style.background = 'linear-gradient(135deg, #ffffff 0%, #f0f3f7 50%, #ffffff 100%)';
    }
  });

  // Jika video tidak bisa diputar (autoplay blocked)
  video.addEventListener('suspend', function () {
    setTimeout(function () {
      if (video.readyState === 0) {
        video.style.display = 'none';
        var wrap = video.closest('.hero-video-wrap');
        if (wrap) {
          wrap.style.background = 'linear-gradient(135deg, #ffffff 0%, #f0f3f7 50%, #ffffff 100%)';
        }
      }
    }, 2000);
  });
}

// ================= CHECK DISTANCE (Google Maps) =================
function checkDistance() {
  if (!navigator.geolocation) {
    document.getElementById('distance-result').textContent = 'Browser Anda tidak mendukung geolokasi.';
    return;
  }

  document.getElementById('distance-result').textContent = 'Mengambil lokasi Anda...';

  navigator.geolocation.getCurrentPosition(
    function (position) {
      var userLat = position.coords.latitude;
      var userLng = position.coords.longitude;
      var dealerLat = -6.9208096;
      var dealerLng = 107.6157034;

      // Hitung jarak (Haversine formula)
      var R = 6371;
      var dLat = toRad(dealerLat - userLat);
      var dLng = toRad(dealerLng - userLng);
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(userLat)) * Math.cos(toRad(dealerLat)) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var distance = R * c;

      var distText = distance < 1
        ? Math.round(distance * 1000) + ' meter'
        : distance.toFixed(1) + ' km';

      document.getElementById('distance-result').textContent =
        'Jarak Anda ke Suzuki Naripan Bandung: sekitar ' + distText + '.';

      // Tampilkan tombol navigasi
      var navBtn = document.getElementById('nav-button');
      navBtn.href = 'https://www.google.com/maps/dir/?api=1&origin=' +
        userLat + ',' + userLng +
        '&destination=' + dealerLat + ',' + dealerLng +
        '&travelmode=driving';
      navBtn.style.display = 'inline-flex';
    },
    function (error) {
      var msg = 'Gagal mendapatkan lokasi. ';
      switch (error.code) {
        case 1: msg += 'Izin lokasi ditolak.'; break;
        case 2: msg += 'Lokasi tidak tersedia.'; break;
        case 3: msg += 'Waktu habis.'; break;
        default: msg += 'Terjadi kesalahan.';
      }
      document.getElementById('distance-result').textContent = msg;
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
  );
}

function toRad(deg) {
  return deg * (Math.PI / 180);
}
