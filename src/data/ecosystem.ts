export type VentureCategory = 'Digital & Kreatif';

export type VentureStatus = 'Bisnis Aktif';

export interface Venture {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: VentureCategory;
  description: string;
  longDescription: string;
  highlights: { title: string; detail: string }[];
  image: string;
  websiteUrl: string;
  status: VentureStatus;
  featured: boolean;
  indexLabel: string;
  focusAreas: string[];
}

export type NewsCategory = 'Semua' | 'Nafa.id' | 'Usaha';

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: Exclude<NewsCategory, 'Semua'>;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  image: string;
  featured?: boolean;
  isPlaceholder: boolean;
}

export const LOGO_URL = '/assets/aistudio/NAFA_bulat_394a1e1b.png';
export const HERO_VIDEO_URL = '/assets/hero-video.mp4';

export const IMAGES = {
  hero: '/src/assets/images/hero_architecture_1795593674582.jpg',
  about: '/src/assets/images/about_vision_1795593675939.jpg',
  brandInvitation:
    '/assets/aistudio/_0FE5B4A3-111D-4330-AC8A-1B22E0239F97__11d9c215.png',
  brandFutureTech: '/src/assets/images/brand_future_tech_1795593676318.jpg',
  sustainability: '/src/assets/images/sustainability_future_1795593676788.jpg',
  newsEditorial: '/src/assets/images/news_editorial_1795593677196.jpg',
} as const;

export const NAV_ITEMS = [
  { label: 'Tentang Kami', path: '/about' },
  { label: 'Merek', path: '/brands' },
  { label: 'Keberlanjutan', path: '/sustainability' },
  { label: 'Berita', path: '/news' },
  { label: 'Hubungi Kami', path: '/contact' },
] as const;

export const PRIMARY_VENTURE: Venture = {
  id: 'digitalinvitation',
  slug: 'digitalinvitation',
  name: 'digitalinvitation',
  tagline: 'Jasa Undangan Pernikahan Digital Elegan & Eksklusif',
  category: 'Digital & Kreatif',
  description:
    'Hadirkan undangan pernikahan digital yang indah, personal, dan mudah dibagikan dalam satu tautan. Tersedia pilihan tema modern minimalis hingga adat Nusantara dengan paket mulai dari Rp50.000.',
  longDescription:
    'digitalinvitation adalah usaha aktif satu-satunya yang saat ini dijalankan di bawah naungan Nafa.id. Layanan ini dirancang untuk membantu pasangan menghadirkan undangan pernikahan digital yang berkelas, personal, dan praktis dibagikan kepada seluruh tamu hanya melalui satu tautan. Mengusung kurasi desain mulai dari gaya modern minimalis yang bersih hingga kekayaan estetika adat Nusantara seperti adat Jawa, setiap undangan dirancang agar terasa eksklusif dengan pilihan paket mulai dari Rp50.000.',
  highlights: [
    {
      title: 'Estetika Modern hingga Adat Nusantara',
      detail:
        'Kurasi tema yang fleksibel menyesuaikan kisah setiap pasangan—mulai dari nuansa modern minimalis hingga keanggunan adat Jawa dan Nusantara.',
    },
    {
      title: 'Personal & Mudah Dibagikan',
      detail:
        'Setiap undangan hadir dalam bentuk situs web khusus yang ringan diakses di berbagai perangkat dan praktis disebarkan melalui pesan singkat.',
    },
    {
      title: 'Eksklusif Mulai Rp50.000',
      detail:
        'Menawarkan standar tampilan premium dengan pilihan paket yang terjangkau dan transparan untuk berbagai kebutuhan acara.',
    },
  ],
  image: IMAGES.brandInvitation,
  websiteUrl: 'https://digitalinvitation.biz.id/',
  status: 'Bisnis Aktif',
  featured: true,
  indexLabel: '01',
  focusAreas: [
    'Undangan Pernikahan Digital Eksklusif',
    'Tema Modern Minimalis & Adat Nusantara',
    'Paket Terjangkau Mulai Rp50.000',
  ],
};

export const VENTURES: Venture[] = [PRIMARY_VENTURE];

export const SUSTAINABILITY_PILLARS = [
  {
    index: '01',
    title: 'Pertumbuhan',
    description:
      'Memperkuat fondasi usaha yang ada agar terus berkembang secara sehat dan konsisten.',
    detail:
      'Saat ini fokus utama Nafa.id adalah membesarkan kualitas layanan dan jangkauan digitalinvitation sebelum melangkah menuju peluang usaha baru.',
  },
  {
    index: '02',
    title: 'Inovasi',
    description:
      'Menghadirkan pengalaman digital yang relevan, rapi, dan mempermudah momen penting masyarakat.',
    detail:
      'Melalui pendekatan digital tanpa cetak berlebih, undangan pernikahan menjadi lebih cepat dibagikan, hemat sumber daya, dan tetap terasa personal.',
  },
  {
    index: '03',
    title: 'Dampak',
    description:
      'Menciptakan nilai nyata yang memudahkan pelanggan dalam merayakan hari bersejarah mereka.',
    detail:
      'Kami mengukur keberhasilan dari kepuasan pasangan dan kemudahan tamu saat mengakses undangan dengan tampilan yang elegan dan terstruktur.',
  },
] as const;

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'beginning-of-nafa',
    slug: 'awal-mula-nafa',
    title: 'Awal Mula Nafa.id',
    category: 'Nafa.id',
    date: 'Artikel Contoh Editorial · 2026',
    readTime: '3 menit baca',
    summary:
      'Memperkenalkan Nafa.id sebagai rumah korporat yang berfokus membangun usaha dari gagasan nyata, dimulai dari satu lini bisnis yang terarah.',
    content: [
      'Setiap perjalanan usaha besar berawal dari satu langkah yang fokus. Nafa.id hadir sebagai rumah utama yang menaungi inisiatif bisnis dengan perhatian penuh pada kualitas eksekusi dan nilai guna bagi masyarakat.',
      'Saat ini, Nafa.id menjalankan satu unit usaha aktif, yaitu digitalinvitation (digitalinvitation.biz.id), sebagai fondasi nyata untuk membuktikan standar karya dan pelayanan kami.',
      'Catatan: Artikel ini merupakan konten contoh editorial untuk menampilkan struktur berita Nafa.id hingga rilis resmi dipublikasikan.',
    ],
    image: IMAGES.hero,
    featured: true,
    isPlaceholder: true,
  },
  {
    id: 'our-first-venture',
    slug: 'mengenal-digitalinvitation',
    title: 'Mengenal digitalinvitation: Undangan Digital Elegan & Personal',
    category: 'Usaha',
    date: 'Artikel Contoh Editorial · 2026',
    readTime: '3 menit baca',
    summary:
      'Bagaimana digitalinvitation membantu pasangan membagikan momen pernikahan secara praktis dengan tema modern minimalis hingga adat Nusantara mulai Rp50.000.',
    content: [
      'Merencanakan pernikahan membutuhkan perhatian pada banyak detail, termasuk bagaimana kabar bahagia dibagikan kepada keluarga dan sahabat. digitalinvitation hadir menjawab kebutuhan tersebut melalui undangan pernikahan berbasis web yang rapi, indah, dan mudah diakses.',
      'Dengan pilihan desain mulai dari gaya modern minimalis hingga sentuhan tradisi seperti adat Jawa dan Nusantara, setiap pasangan dapat memilih tampilan yang paling mencerminkan cerita mereka—dengan paket mulai dari Rp50.000.',
      'Catatan: Artikel ini merupakan konten contoh editorial untuk memperkenalkan usaha aktif Nafa.id.',
    ],
    image: IMAGES.brandInvitation,
    featured: false,
    isPlaceholder: true,
  },
  {
    id: 'future-horizon',
    slug: 'fokus-berkembang-bertahap',
    title: 'Fokus Bertumbuh dari Satu Usaha yang Kuat',
    category: 'Nafa.id',
    date: 'Artikel Contoh Editorial · 2026',
    readTime: '2 menit baca',
    summary:
      'Mengapa Nafa.id memilih memusatkan energi pada kualitas satu usaha aktif terlebih dahulu sebelum membuka lini bisnis baru.',
    content: [
      'Membangun fondasi yang kokoh jauh lebih penting daripada sekadar memperbanyak daftar proyek. Dengan memfokuskan seluruh perhatian pada digitalinvitation, setiap pembaruan desain, pengalaman pengguna, dan pelayanan pelanggan dapat dijaga dengan cermat.',
      'Seiring waktu, ketika pengalaman dan kesiapan semakin matang, Nafa.id tetap terbuka untuk menjajaki kolaborasi maupun peluang baru yang sejalan dengan standar kami.',
      'Catatan: Artikel ini merupakan konten contoh editorial.',
    ],
    image: IMAGES.newsEditorial,
    featured: false,
    isPlaceholder: true,
  },
];

export const CONTACT_CONFIG = {
  email: 'hello@nafa.id',
  whatsappDisplay: '+62 812 0000 0000',
  whatsappHref: 'https://wa.me/6281200000000',
  instagramHandle: '@nafa.id',
  instagramHref: 'https://instagram.com/nafa.id',
  categories: [
    'Pertanyaan Bisnis',
    'Kemitraan',
    'Kolaborasi',
    'Pertanyaan Umum',
  ] as const,
};
