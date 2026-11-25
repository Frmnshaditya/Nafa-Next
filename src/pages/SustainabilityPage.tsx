import { ArrowRight } from 'lucide-react';
import { IMAGES, SUSTAINABILITY_PILLARS } from '../data/ecosystem';
import { MonochromeImage } from '../components/MonochromeImage';
import { ClipImageReveal, RevealSection } from '../components/Reveal';

interface SustainabilityPageProps {
  onNavigate: (path: string) => void;
}

const COMMITMENTS = [
  {
    index: '01',
    title: 'Solusi Digital Ramah Lingkungan',
    description:
      'Melalui digitalinvitation, pasangan dapat membagikan undangan secara daring tanpa ketergantungan pada pencetakan kertas dalam jumlah besar.',
  },
  {
    index: '02',
    title: 'Kualitas Desain yang Tahan Uji',
    description:
      'Setiap tema modern minimalis maupun adat Nusantara dirancang dengan perhatian pada keterbacaan, kecepatan akses, dan kenyamanan tamu.',
  },
  {
    index: '03',
    title: 'Aksesibilitas & Harga Terjangkau',
    description:
      'Paket mulai Rp50.000 memastikan tampilan undangan yang berkelas dan eksklusif tetap dapat dinikmati secara luas.',
  },
  {
    index: '04',
    title: 'Pertumbuhan Bertahap & Terukur',
    description:
      'Nafa.id berfokus memperkuat satu usaha aktif terlebih dahulu agar pondasi operasional dan kepuasan pelanggan selalu terjaga.',
  },
];

export function SustainabilityPage({ onNavigate }: SustainabilityPageProps) {
  return (
    <div className="w-full pt-16 md:pt-20">
      {/* Hero Halaman (Hitam) */}
      <section className="relative flex min-h-[540px] w-full items-end overflow-hidden bg-black text-white md:min-h-[620px]">
        <ClipImageReveal className="absolute inset-0">
          <MonochromeImage
            src={IMAGES.sustainability}
            alt="Kolonade beton minimalis dan air yang tenang sebagai simbol fondasi jangka panjang"
            priority
            className="h-full w-full"
          />
        </ClipImageReveal>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-16 md:py-24 lg:px-12">
          <RevealSection className="max-w-3xl">
            <p className="text-sm font-medium text-white/70">Keberlanjutan</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Membangun untuk masa depan.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-[1.6] text-white/85">
              Kami percaya bisnis tidak dibangun hanya untuk hari ini. Setiap
              keputusan dan kualitas layanan hari ini menjadi fondasi masa
              depan Nafa.id.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Perspektif Utama (Putih) */}
      <section className="w-full bg-white py-20 text-black md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <RevealSection className="lg:col-span-5">
              <p className="text-sm font-medium text-[#888888]">
                Perspektif Kami
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] tracking-tight text-black md:text-4xl">
                Kesinambungan, disiplin, dan nilai yang nyata.
              </h2>
            </RevealSection>

            <RevealSection
              delay={0.1}
              className="space-y-6 text-base leading-[1.7] text-[#171717] md:text-lg lg:col-span-7"
            >
              <p>
                Bagi Nafa.id, keberlanjutan dimulai dari langkah yang relevan dan
                bertanggung jawab. Melalui digitalinvitation, kami menghadirkan
                alternatif undangan pernikahan berbasis web yang mengurangi
                limbah cetak sekaligus memudahkan penyampaian informasi acara.
              </p>
              <p>
                Visi kami adalah menjaga agar usaha yang dijalankan hari ini
                tumbuh secara sehat, terpercaya, dan terus relevan dengan
                kebutuhan masyarakat.
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Tiga Pilar (Hitam) */}
      <section className="w-full bg-black py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <RevealSection className="max-w-2xl">
            <p className="text-sm font-medium text-[#888888]">Tiga Pilar</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
              Cara kami membangun agar bertahan.
            </h2>
          </RevealSection>

          <div className="mt-14 grid gap-10 border-t border-white/15 pt-12 md:grid-cols-3">
            {SUSTAINABILITY_PILLARS.map((pillar, idx) => (
              <RevealSection key={pillar.title} delay={idx * 0.08}>
                <span className="font-display text-xs tracking-[0.2em] text-[#888888]">
                  {pillar.index}
                </span>
                <h3 className="mt-3 font-display text-3xl font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-base font-medium leading-relaxed text-white/90">
                  {pillar.description}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#888888]">
                  {pillar.detail}
                </p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Komitmen Berkelanjutan (Putih) */}
      <section className="w-full bg-white py-20 text-black md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <RevealSection className="max-w-2xl">
            <p className="text-sm font-medium text-[#888888]">Komitmen Kami</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-black md:text-4xl">
              Prinsip yang menuntun layanan kami hari ini.
            </h2>
          </RevealSection>

          <div className="mt-12 grid gap-8 border-t border-[#E5E5E5] pt-12 md:grid-cols-2">
            {COMMITMENTS.map((item, idx) => (
              <RevealSection
                key={item.index}
                delay={idx * 0.06}
                className="border-b border-[#E5E5E5] pb-8"
              >
                <span className="font-display text-xs tracking-[0.2em] text-[#888888]">
                  {item.index}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-black">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#171717]/85">
                  {item.description}
                </p>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="mt-14 flex flex-col justify-between gap-6 bg-[#F5F5F5] p-8 border border-[#E5E5E5] md:flex-row md:items-center md:p-12">
            <div>
              <h3 className="font-display text-2xl font-bold text-black">
                Ingin berdiskusi atau berkolaborasi bersama Nafa.id?
              </h3>
              <p className="mt-2 text-sm text-[#171717]/80">
                Kami terbuka terhadap komunikasi bersama mitra maupun calon
                pelanggan.
              </p>
            </div>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contact');
              }}
              className="group inline-flex items-center gap-3 self-start bg-black px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#171717] md:self-auto shrink-0"
            >
              <span>Hubungi Kami</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
