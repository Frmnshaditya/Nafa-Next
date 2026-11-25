import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/ecosystem';
import { MonochromeImage } from '../components/MonochromeImage';
import { ClipImageReveal, RevealSection } from '../components/Reveal';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

const JOURNEY_STAGES = [
  {
    phase: 'Tahap 01',
    title: 'Lahirnya Gagasan',
    description:
      'Nafa.id berawal dari keinginan menghadirkan karya digital yang rapi, bermakna, dan mudah diakses oleh siapa saja.',
  },
  {
    phase: 'Tahap 02',
    title: 'Fokus pada Usaha Pertama',
    description:
      'Meluncurkan digitalinvitation (digitalinvitation.biz.id) untuk membantu pasangan membagikan momen pernikahan secara elegan dan personal.',
  },
  {
    phase: 'Tahap 03',
    title: 'Menjaga Standar Kualitas',
    description:
      'Memusatkan seluruh perhatian pada pengembangan tema, kenyamanan tamu, dan pelayanan pelanggan di digitalinvitation.',
  },
  {
    phase: 'MASA DEPAN',
    title: 'Terbuka untuk Peluang Baru',
    description:
      'Tetap membuka ruang bertumbuh secara alami ketika ide dan kesiapan usaha berikutnya telah matang.',
  },
];

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="w-full pt-16 md:pt-20">
      {/* Header Halaman (Putih) */}
      <section className="w-full bg-white py-16 text-black md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <RevealSection className="max-w-4xl">
            <p className="text-sm font-medium text-[#888888]">Tentang Kami</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Segalanya berawal dari sebuah ide.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-[1.6] text-[#171717]">
              Nafa.id adalah rumah bagi gagasan yang dijalankan secara nyata.
              Saat ini kami berfokus penuh pada satu usaha aktif di ranah
              digital, yaitu digitalinvitation.
            </p>
          </RevealSection>

          <ClipImageReveal className="mt-12 md:mt-16">
            <MonochromeImage
              src={IMAGES.hero}
              alt="Ruang arsitektural monokrom yang merepresentasikan Nafa.id"
              priority
              className="aspect-[16/8] w-full"
            />
          </ClipImageReveal>
        </div>
      </section>

      {/* Kisah Kami (Hitam) */}
      <section className="w-full bg-black py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <RevealSection className="lg:col-span-5">
              <p className="text-sm font-medium text-[#888888]">Kisah Kami</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-4xl">
                Melangkah terarah dari satu usaha yang kokoh.
              </h2>
            </RevealSection>

            <RevealSection
              delay={0.1}
              className="space-y-6 text-base leading-[1.7] text-white/80 md:text-lg lg:col-span-7"
            >
              <p>
                Nafa.id dibangun dari keyakinan sederhana: menciptakan,
                mengembangkan, dan menumbuhkan usaha yang membawa manfaat nyata
                bagi orang banyak. Daripada membagi fokus ke terlalu banyak hal
                sekaligus, kami memilih membesarkan satu usaha secara sungguh-sungguh.
              </p>
              <p>
                Usaha kami saat ini adalah{' '}
                <span className="font-semibold text-white">
                  digitalinvitation
                </span>{' '}
                (digitalinvitation.biz.id), layanan undangan pernikahan digital
                yang menghadirkan pilihan tema modern minimalis hingga adat
                Nusantara dengan harga terjangkau mulai dari Rp50.000.
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Visi, Misi & Filosofi (Putih) */}
      <section className="w-full bg-white py-20 text-black md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <RevealSection className="max-w-2xl">
            <p className="text-sm font-medium text-[#888888]">
              Arah &amp; Prinsip
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-black md:text-5xl">
              Satu visi. Langkah nyata.
            </h2>
          </RevealSection>

          <div className="mt-14 grid gap-10 border-t border-[#E5E5E5] pt-12 md:grid-cols-3">
            <RevealSection delay={0.05}>
              <span className="text-xs font-medium tracking-[0.15em] text-[#888888]">
                01
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-black">
                Visi
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#171717]">
                Menjadikan Nafa.id rumah usaha yang terpercaya, dimulai dari
                membangun digitalinvitation sebagai layanan undangan digital
                pilihan masyarakat Indonesia.
              </p>
            </RevealSection>

            <RevealSection delay={0.12}>
              <span className="text-xs font-medium tracking-[0.15em] text-[#888888]">
                02
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-black">
                Misi
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#171717]">
                Menghadirkan produk digital yang estetik, mudah digunakan,
                personal, serta dapat dijangkau oleh berbagai kalangan dengan
                pelayanan yang responsif.
              </p>
            </RevealSection>

            <RevealSection delay={0.19}>
              <span className="text-xs font-medium tracking-[0.15em] text-[#888888]">
                03
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-black">
                Filosofi
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#171717]">
                Membangun ide. Menciptakan usaha. Kami percaya kualitas dan
                kepercayaan pelanggan jauh lebih bermakna daripada sekadar
                banyaknya proyek.
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Perjalanan & Arah Masa Depan (Hitam) */}
      <section className="w-full bg-black py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <RevealSection>
                <p className="text-sm font-medium text-[#888888]">
                  Perjalanan &amp; Arah
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-4xl">
                  Dari gagasan pertama menuju layanan nyata.
                </h2>
              </RevealSection>
              <ClipImageReveal className="mt-8">
                <MonochromeImage
                  src={IMAGES.about}
                  alt="Perspektif arsitektural beton monokrom"
                  className="aspect-[4/3] w-full"
                />
              </ClipImageReveal>
            </div>

            <div className="border-t border-white/15 lg:col-span-7">
              {JOURNEY_STAGES.map((stage, idx) => (
                <RevealSection
                  key={stage.phase}
                  delay={idx * 0.08}
                  className="grid gap-4 border-b border-white/15 py-8 sm:grid-cols-12"
                >
                  <div className="sm:col-span-3">
                    <span className="font-display text-sm font-semibold tracking-[0.12em] text-[#888888]">
                      {stage.phase}
                    </span>
                  </div>
                  <div className="sm:col-span-9">
                    <h3 className="font-display text-xl font-bold text-white">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-white/75">
                      {stage.description}
                    </p>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ajakan Langkah Berikutnya (Putih) */}
      <section className="w-full bg-white py-20 text-black md:py-24">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 px-6 md:flex-row md:items-center lg:px-12">
          <RevealSection className="max-w-xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-black md:text-4xl">
              Kenali lebih dekat usaha kami.
            </h2>
            <p className="mt-3 text-base text-[#171717]/80">
              Pelajari keunggulan digitalinvitation yang hadir untuk membuat
              momen pernikahan Anda lebih berkesan.
            </p>
          </RevealSection>

          <RevealSection delay={0.1}>
            <a
              href="/brands"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/brands');
              }}
              className="group inline-flex items-center gap-3 bg-black px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#171717]"
            >
              <span>Lihat digitalinvitation</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
