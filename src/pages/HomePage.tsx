import { useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import {
  CONTACT_CONFIG,
  HERO_VIDEO_URL,
  IMAGES,
  NEWS_ARTICLES,
  PRIMARY_VENTURE,
  SUSTAINABILITY_PILLARS,
  type Venture,
} from '../data/ecosystem';
import { MonochromeImage } from '../components/MonochromeImage';
import {
  AnimatedCounter,
  ClipImageReveal,
  RevealSection,
} from '../components/Reveal';
import { VentureDetailModal } from '../components/VentureDetailModal';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [selectedVenture, setSelectedVenture] = useState<Venture | null>(null);
  const [videoError, setVideoError] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  const leadArticle = NEWS_ARTICLES[0];
  const secondaryArticles = NEWS_ARTICLES.slice(1, 3);

  const scrollToAbout = () => {
    const el = document.getElementById('tentang-kami');
    if (el) {
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <div className="w-full overflow-x-clip">
      {/* BAGIAN 01 — HERO (HITAM) */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen w-full flex-col justify-end overflow-hidden bg-black text-white"
      >
        <motion.div
          style={prefersReducedMotion ? undefined : { y: heroImageY }}
          className="absolute inset-0 will-change-transform"
        >
          {!prefersReducedMotion && !videoError ? (
            <video
              ref={heroVideoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={IMAGES.hero}
              onError={() => setVideoError(true)}
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-center grayscale contrast-[1.08]"
            >
              <source src={HERO_VIDEO_URL} type="video/mp4" />
            </video>
          ) : (
            <MonochromeImage
              src={IMAGES.hero}
              alt="Atrium arsitektural monokromatik yang merepresentasikan Nafa.id"
              priority
              slowZoom
              className="h-full w-full"
            />
          )}
        </motion.div>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pt-32 pb-16 md:pb-24 lg:px-12">
          <div className="max-w-4xl">
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 text-sm font-medium tracking-[0.06em] text-white/75"
            >
              Nafa.id
            </motion.p>

            <h1 className="font-display text-[2.75rem] font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[5rem]">
              <motion.span
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Membangun ide.
              </motion.span>
              <motion.span
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="mt-1 block text-white/90"
              >
                Menciptakan usaha.
              </motion.span>
            </h1>

            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-base leading-[1.6] tracking-[0.015em] text-white/80 sm:text-lg"
            >
              Satu visi yang dimulai dengan langkah nyata. Rumah bagi gagasan
              kreatif dan usaha digital yang menghadirkan nilai bermakna.
            </motion.p>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <button
                type="button"
                onClick={scrollToAbout}
                className="group inline-flex items-center gap-3 bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-black transition-all duration-200 hover:bg-[#E5E5E5]"
              >
                <span>Jelajahi Nafa.id</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-14 flex items-center justify-between border-t border-white/15 pt-6 text-xs text-white/60 md:mt-20"
          >
            <span>Satu visi. Langkah nyata.</span>
            <button
              type="button"
              onClick={scrollToAbout}
              className="group inline-flex items-center gap-3 text-white/75 transition-colors hover:text-white"
            >
              <span>Gulir untuk menjelajahi</span>
              <span
                aria-hidden="true"
                className="relative h-5 w-px overflow-hidden bg-white/30"
              >
                <motion.span
                  animate={
                    prefersReducedMotion ? undefined : { y: ['-100%', '100%'] }
                  }
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-x-0 top-0 h-1/2 bg-white"
                />
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* BAGIAN 02 — TENTANG KAMI (PUTIH) */}
      <section
        id="tentang-kami"
        className="relative flex min-h-[600px] w-full items-center overflow-hidden bg-white text-black lg:min-h-[680px]"
      >
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-full lg:block lg:w-[62%]">
          <ClipImageReveal className="h-full w-full">
            <MonochromeImage
              src={IMAGES.about}
              alt="Garis arsitektural yang saling berpotongan sebagai simbol fondasi Nafa.id"
              className="h-full w-full"
            />
          </ClipImageReveal>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/70 to-transparent"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-20 md:py-28 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <RevealSection className="lg:col-span-6">
              <p className="text-sm font-medium text-[#888888]">Tentang Kami</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] tracking-tight text-black md:text-5xl lg:text-[3.5rem]">
                Segalanya berawal dari sebuah ide.
              </h2>

              <div className="mt-7 space-y-5 text-[17px] leading-[1.6] tracking-[0.015em] text-[#171717] md:text-[18px]">
                <p>
                  Nafa.id dibangun dari gagasan yang sederhana: menciptakan,
                  mengembangkan, dan menumbuhkan usaha yang menghadirkan nilai
                  nyata bagi masyarakat.
                </p>
                <p>
                  Saat ini kami memusatkan seluruh perhatian pada satu usaha
                  aktif kami, yaitu{' '}
                  <span className="font-semibold text-black">
                    digitalinvitation
                  </span>
                  —menjadikannya pijakan utama yang kokoh sebelum melangkah ke
                  peluang berikutnya.
                </p>
              </div>

              <div className="mt-9">
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/about');
                  }}
                  className="group inline-flex items-center gap-3 border border-black px-7 py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-black hover:text-white"
                >
                  <span>Telusuri Kisah Kami</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </RevealSection>

            <div className="lg:hidden">
              <ClipImageReveal>
                <MonochromeImage
                  src={IMAGES.about}
                  alt="Garis arsitektural yang saling berpotongan sebagai simbol fondasi Nafa.id"
                  className="aspect-[4/3] w-full"
                />
              </ClipImageReveal>
            </div>
          </div>
        </div>
      </section>

      {/* BAGIAN 03 — IKHTISAR USAHA (HITAM) */}
      <section className="w-full bg-black py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <RevealSection className="max-w-3xl">
            <p className="text-sm font-medium text-[#888888]">
              Fokus Saat Ini
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
              Satu usaha aktif. Fokus penuh.
            </h2>
            <p className="mt-4 text-base leading-[1.6] text-white/75 md:text-lg">
              Kami percaya kualitas lahir dari fokus. Nafa.id mendedikasikan
              energinya untuk membangun pengalaman terbaik melalui satu layanan
              yang berjalan nyata saat ini.
            </p>
          </RevealSection>

          <div className="mt-14 grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
            <RevealSection
              delay={0.05}
              className="border-b border-white/15 py-8 sm:border-r sm:pr-8 lg:border-b-0"
            >
              <div className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                <AnimatedCounter target={1} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                Usaha Aktif
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#888888]">
                digitalinvitation, jasa undangan pernikahan digital yang elegan
                dan eksklusif di digitalinvitation.biz.id.
              </p>
            </RevealSection>

            <RevealSection
              delay={0.12}
              className="border-b border-white/15 py-8 sm:pl-8 lg:border-r lg:px-8 lg:border-b-0"
            >
              <div className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                Rp50rb
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                Paket Mulai Dari
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#888888]">
                Akses desain undangan digital yang indah dan personal dengan
                pilihan paket yang ramah dan transparan.
              </p>
            </RevealSection>

            <RevealSection
              delay={0.19}
              className="border-b border-white/15 py-8 sm:border-r sm:pr-8 sm:border-b-0 lg:px-8"
            >
              <div className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                Nusantara
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                Modern hingga Adat
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#888888]">
                Koleksi tema mulai dari gaya modern minimalis hingga sentuhan
                tradisi adat Jawa dan Nusantara.
              </p>
            </RevealSection>

            <RevealSection delay={0.26} className="py-8 sm:pl-8">
              <div className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                100%
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                Praktis Dibagikan
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#888888]">
                Satu tautan undangan digital yang personal, ringan dibuka di
                ponsel tamu, dan siap dibagikan kapan saja.
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* BAGIAN 04 — USAHA KAMI / MEREK (PUTIH) */}
      <section className="w-full bg-white py-20 text-black md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <RevealSection className="flex flex-col justify-between gap-8 border-b border-[#E5E5E5] pb-12 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#888888]">Merek</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] tracking-tight text-black md:text-5xl">
                Usaha kami.
              </h2>
              <p className="mt-3 font-display text-xl font-medium text-[#171717] md:text-2xl">
                {PRIMARY_VENTURE.tagline}
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#888888] md:text-[17px]">
                Di bawah naungan Nafa.id, kami mengoperasikan satu layanan
                unggulan yang dirancang untuk merayakan momen paling berharga
                dalam hidup dengan cara yang lebih elegan dan berkesan.
              </p>
            </div>

            <a
              href="/brands"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/brands');
              }}
              className="group inline-flex items-center gap-2 self-start text-sm font-semibold text-black transition-opacity hover:opacity-70 lg:self-end"
            >
              <span>Lihat Detail Merek</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </RevealSection>

          {/* Kartu Utama Satu-Satunya Usaha Aktif: digitalinvitation */}
          <RevealSection className="mt-14">
            <div className="group grid items-stretch border border-[#E5E5E5] bg-[#F5F5F5] lg:grid-cols-12">
              <div className="flex items-center justify-center overflow-hidden bg-[#EAEAEA] p-6 md:p-10 lg:col-span-6 lg:border-r lg:border-[#E5E5E5]">
                <MonochromeImage
                  src={PRIMARY_VENTURE.image}
                  alt={PRIMARY_VENTURE.name}
                  hoverZoom
                  className="h-[460px] w-full max-w-[260px] bg-white border border-[#D4D4D4] sm:h-[520px] sm:max-w-[290px]"
                  imgClassName="object-contain"
                />
              </div>

              <div className="flex flex-col justify-between p-8 md:p-12 lg:col-span-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#888888]">
                    <span className="font-semibold text-black">
                      {PRIMARY_VENTURE.status}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{PRIMARY_VENTURE.category}</span>
                  </div>

                  <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-black md:text-4xl">
                    {PRIMARY_VENTURE.name}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-[#171717]">
                    {PRIMARY_VENTURE.longDescription}
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-[#E5E5E5] pt-6">
                  <a
                    href={PRIMARY_VENTURE.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2.5 bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#171717]"
                  >
                    <span>Kunjungi digitalinvitation</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedVenture(PRIMARY_VENTURE)}
                    className="group/detail inline-flex items-center gap-2 text-sm font-semibold text-black transition-opacity hover:opacity-70"
                  >
                    <span>Pelajari Lebih Lanjut</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/detail:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Tiga Keunggulan Utama digitalinvitation */}
          <div className="mt-12 grid gap-8 border-t border-[#E5E5E5] pt-12 md:grid-cols-3">
            {PRIMARY_VENTURE.highlights.map((item, idx) => (
              <RevealSection key={item.title} delay={idx * 0.08}>
                <span className="font-display text-xs tracking-[0.2em] text-[#888888]">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-black">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#171717]/80">
                  {item.detail}
                </p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* BAGIAN 05 — KEBERLANJUTAN (HITAM) */}
      <section className="w-full bg-black text-white">
        <div className="relative flex min-h-[620px] w-full flex-col justify-end overflow-hidden md:min-h-[700px] md:justify-center">
          <ClipImageReveal className="absolute inset-0">
            <MonochromeImage
              src={IMAGES.sustainability}
              alt="Pelataran arsitektural yang tenang sebagai simbol visi jangka panjang Nafa.id"
              className="h-full w-full"
            />
          </ClipImageReveal>

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25"
          />

          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-16 md:py-24 lg:px-12">
            <RevealSection className="max-w-[580px] border border-white/15 bg-black/75 p-8 backdrop-blur-md md:p-12">
              <p className="text-sm font-medium text-white/65">Keberlanjutan</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Membangun untuk masa depan.
              </h2>

              <div className="mt-5 space-y-4 text-base leading-[1.6] text-white/85">
                <p>
                  Kami percaya bisnis tidak dibangun hanya untuk hari ini.
                  Setiap gagasan, keputusan, dan kualitas layanan hari ini
                  menjadi fondasi bagi masa depan Nafa.id.
                </p>
                <p>
                  Dengan merawat digitalinvitation secara sungguh-sungguh, kami
                  menciptakan nilai yang relevan, hemat sumber daya, dan
                  bermanfaat bagi banyak pasangan.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="/sustainability"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/sustainability');
                  }}
                  className="group inline-flex items-center gap-3 bg-white px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-[#E5E5E5]"
                >
                  <span>Jelajahi Visi Kami</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </RevealSection>
          </div>
        </div>

        {/* Tiga Pilar */}
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:py-20 lg:px-12">
          <div className="grid gap-10 border-t border-white/15 pt-12 md:grid-cols-3">
            {SUSTAINABILITY_PILLARS.map((pillar, idx) => (
              <RevealSection key={pillar.title} delay={idx * 0.08}>
                <span className="font-display text-xs tracking-[0.2em] text-[#888888]">
                  {pillar.index}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/75">
                  {pillar.description}
                </p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* BAGIAN 06 — BERITA (PUTIH) */}
      <section className="w-full bg-white py-20 text-black md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <RevealSection className="flex flex-col justify-between gap-6 border-b border-[#E5E5E5] pb-10 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-[#888888]">Berita</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] tracking-tight text-black md:text-5xl">
                Kisah terbaru.
              </h2>
            </div>

            <a
              href="/news"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/news');
              }}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-black transition-opacity hover:opacity-70"
            >
              <span>Semua Berita</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </RevealSection>

          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            {/* Berita Utama */}
            <RevealSection className="lg:col-span-7">
              <article
                onClick={() => onNavigate(`/news/${leadArticle.slug}`)}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden bg-[#F5F5F5]">
                  <MonochromeImage
                    src={leadArticle.image}
                    alt={leadArticle.title}
                    hoverZoom
                    className="aspect-[16/10] w-full"
                  />
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-[#888888]">
                  <span className="font-medium text-black">
                    {leadArticle.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{leadArticle.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{leadArticle.readTime}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-black transition-opacity group-hover:opacity-75 md:text-3xl">
                  {leadArticle.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#171717]/80">
                  {leadArticle.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-black">
                  <span>Baca selengkapnya</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </article>
            </RevealSection>

            {/* Berita Sekunder */}
            <div className="flex flex-col justify-between gap-10 lg:col-span-5 lg:border-l lg:border-[#E5E5E5] lg:pl-10">
              {secondaryArticles.map((article, idx) => (
                <RevealSection key={article.id} delay={idx * 0.1}>
                  <article
                    onClick={() => onNavigate(`/news/${article.slug}`)}
                    className="group cursor-pointer border-b border-[#E5E5E5] pb-8 last:border-b-0 last:pb-0"
                  >
                    <div className="grid gap-5 sm:grid-cols-5 sm:items-center">
                      <div className="overflow-hidden bg-[#F5F5F5] sm:col-span-2">
                        <MonochromeImage
                          src={article.image}
                          alt={article.title}
                          hoverZoom
                          className="aspect-[4/3] w-full"
                        />
                      </div>
                      <div className="sm:col-span-3">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#888888]">
                          <span className="font-medium text-black">
                            {article.category}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{article.date}</span>
                        </div>
                        <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-black transition-opacity group-hover:opacity-75">
                          {article.title}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#171717]/80">
                          {article.summary}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-black">
                          <span>Baca selengkapnya</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </article>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BAGIAN 07 — HUBUNGI KAMI (HITAM) */}
      <section className="w-full bg-black py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
            <RevealSection className="lg:col-span-7">
              <p className="text-sm font-medium text-[#888888]">Hubungi Kami</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
                Mari membangun sesuatu yang bermakna.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-[1.6] text-white/75 md:text-lg">
                Kami terbuka untuk kolaborasi, kemitraan, pemesanan layanan
                digitalinvitation, maupun gagasan baru.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
                {CONTACT_CONFIG.categories.map((category, index) => (
                  <span key={category} className="inline-flex items-center gap-6">
                    <span>{category}</span>
                    {index < CONTACT_CONFIG.categories.length - 1 && (
                      <span aria-hidden="true" className="text-white/25">
                        /
                      </span>
                    )}
                  </span>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact');
                  }}
                  className="group inline-flex items-center gap-3 bg-white px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-[#E5E5E5]"
                >
                  <span>Hubungi Nafa.id</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </RevealSection>

            <RevealSection delay={0.1} className="lg:col-span-5">
              <div className="border-t border-white/15">
                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="group flex items-center justify-between border-b border-white/15 py-5 transition-colors hover:border-white/40"
                >
                  <div>
                    <span className="block text-xs text-[#888888]">Email</span>
                    <span className="mt-1 block font-display text-lg font-semibold text-white">
                      {CONTACT_CONFIG.email}
                    </span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </a>

                <a
                  href={CONTACT_CONFIG.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-white/15 py-5 transition-colors hover:border-white/40"
                >
                  <div>
                    <span className="block text-xs text-[#888888]">
                      WhatsApp
                    </span>
                    <span className="mt-1 block font-display text-lg font-semibold text-white">
                      {CONTACT_CONFIG.whatsappDisplay}
                    </span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </a>

                <a
                  href={CONTACT_CONFIG.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-white/15 py-5 transition-colors hover:border-white/40"
                >
                  <div>
                    <span className="block text-xs text-[#888888]">
                      Instagram
                    </span>
                    <span className="mt-1 block font-display text-lg font-semibold text-white">
                      {CONTACT_CONFIG.instagramHandle}
                    </span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </a>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      <VentureDetailModal
        venture={selectedVenture}
        onClose={() => setSelectedVenture(null)}
        onContactNavigate={() => onNavigate('/contact')}
      />
    </div>
  );
}
