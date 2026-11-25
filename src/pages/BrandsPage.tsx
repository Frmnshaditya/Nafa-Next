import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PRIMARY_VENTURE } from '../data/ecosystem';
import { MonochromeImage } from '../components/MonochromeImage';
import { ClipImageReveal, RevealSection } from '../components/Reveal';

interface BrandsPageProps {
  onNavigate: (path: string) => void;
}

export function BrandsPage({ onNavigate }: BrandsPageProps) {
  return (
    <div className="w-full pt-16 md:pt-20">
      {/* Bagian Header (Putih) */}
      <section className="w-full bg-white py-16 text-black md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <RevealSection className="max-w-3xl">
            <p className="text-sm font-medium text-[#888888]">Merek</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-6xl">
              {PRIMARY_VENTURE.name}
            </h1>
            <p className="mt-4 font-display text-xl font-medium text-[#171717] md:text-2xl">
              {PRIMARY_VENTURE.tagline}
            </p>
            <p className="mt-6 text-lg leading-[1.6] text-[#171717]">
              Saat ini Nafa.id memfokuskan seluruh perhatiannya pada satu usaha
              aktif di bidang undangan digital untuk memastikan setiap detail
              desain dan pengalaman tamu berjalan sempurna.
            </p>
          </RevealSection>

          {/* Spotlight Utama digitalinvitation */}
          <RevealSection className="mt-14">
            <article className="grid items-stretch border border-[#E5E5E5] bg-[#F5F5F5] lg:grid-cols-12">
              <div className="flex items-center justify-center overflow-hidden bg-[#EAEAEA] p-6 md:p-10 lg:col-span-5 lg:border-r lg:border-[#E5E5E5]">
                <ClipImageReveal className="flex w-full justify-center">
                  <MonochromeImage
                    src={PRIMARY_VENTURE.image}
                    alt={PRIMARY_VENTURE.name}
                    priority
                    className="h-[460px] w-full max-w-[260px] bg-white border border-[#D4D4D4] sm:h-[520px] sm:max-w-[290px]"
                    imgClassName="object-contain"
                  />
                </ClipImageReveal>
              </div>

              <div className="flex flex-col justify-between p-8 md:p-12 lg:col-span-7">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-[#888888]">
                      <span className="font-semibold text-black">
                        {PRIMARY_VENTURE.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{PRIMARY_VENTURE.status}</span>
                    </div>
                    <span className="font-display text-xs tracking-[0.2em] text-[#888888]">
                      {PRIMARY_VENTURE.indexLabel}
                    </span>
                  </div>

                  <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-black md:text-4xl">
                    Mengapa memilih digitalinvitation?
                  </h2>

                  <p className="mt-4 text-base leading-relaxed text-[#171717]">
                    {PRIMARY_VENTURE.longDescription}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#888888]">
                    {PRIMARY_VENTURE.focusAreas.map((area, areaIdx) => (
                      <span
                        key={area}
                        className="inline-flex items-center gap-5"
                      >
                        <span>{area}</span>
                        {areaIdx < PRIMARY_VENTURE.focusAreas.length - 1 && (
                          <span aria-hidden="true">/</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-[#E5E5E5] pt-6">
                  <a
                    href={PRIMARY_VENTURE.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2.5 bg-black px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#171717]"
                  >
                    <span>Kunjungi digitalinvitation.biz.id</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </article>
          </RevealSection>

          {/* Rincian Nilai Tambah */}
          <div className="mt-16 grid gap-10 border-t border-[#E5E5E5] pt-12 md:grid-cols-3">
            {PRIMARY_VENTURE.highlights.map((item, idx) => (
              <RevealSection key={item.title} delay={idx * 0.08}>
                <span className="font-display text-xs tracking-[0.2em] text-[#888888]">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-black">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#171717]/85">
                  {item.detail}
                </p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ajakan Kemitraan (Hitam) */}
      <section className="w-full bg-black py-20 text-white md:py-24">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 px-6 md:flex-row md:items-center lg:px-12">
          <RevealSection className="max-w-xl">
            <p className="text-sm font-medium text-[#888888]">Kolaborasi</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ingin bermitra atau memesan undangan digital?
            </h2>
            <p className="mt-3 text-base text-white/75">
              Kunjungi langsung situs digitalinvitation atau hubungi tim Nafa.id
              untuk peluang kerja sama.
            </p>
          </RevealSection>

          <RevealSection delay={0.1} className="flex flex-wrap gap-4">
            <a
              href={PRIMARY_VENTURE.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-[#E5E5E5]"
            >
              <span>Buka Website Usaha</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contact');
              }}
              className="group inline-flex items-center gap-3 border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
            >
              <span>Hubungi Nafa.id</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
