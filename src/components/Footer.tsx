import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import {
  CONTACT_CONFIG,
  LOGO_URL,
  NAV_ITEMS,
  PRIMARY_VENTURE,
} from '../data/ecosystem';
import { RevealSection } from './Reveal';

interface FooterProps {
  onNavigate: (path: string) => void;
}

type LegalModalType = 'privacy' | 'terms' | null;

export function Footer({ onNavigate }: FooterProps) {
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);

  return (
    <>
      <footer className="relative overflow-hidden bg-black text-white border-t border-white/15">
        <svg
          aria-hidden="true"
          viewBox="0 0 360 360"
          className="pointer-events-none absolute right-0 bottom-0 h-[260px] w-[260px] opacity-[0.07] md:h-[340px] md:w-[340px]"
          fill="none"
        >
          <path
            d="M360 40C200 40 80 160 80 360"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
          <path
            d="M360 110C238 110 150 198 150 360"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
          <path
            d="M360 180C276 180 220 236 220 360"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
        </svg>

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 md:py-20 lg:px-12">
          <RevealSection>
            <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-2 lg:grid-cols-12">
              {/* Kolom Merek */}
              <div className="lg:col-span-5">
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/');
                  }}
                  aria-label="Beranda Nafa.id"
                  className="inline-flex items-center gap-3.5 transition-opacity hover:opacity-85"
                >
                  <img
                    src={LOGO_URL}
                    alt="Logo Nafa.id"
                    className="h-12 w-12 rounded-full object-cover ring-1 ring-white/20"
                  />
                  <span className="font-display text-xl font-bold tracking-tight text-white">
                    Nafa.id
                  </span>
                </a>
                <p className="mt-5 max-w-sm text-base leading-relaxed text-white/75">
                  Satu visi. Membangun gagasan bermakna dan mengembangkannya
                  menjadi usaha yang berkelas melalui digitalinvitation.
                </p>
                <p className="mt-4 text-sm text-[#888888]">
                  Membangun ide. Menciptakan usaha.
                </p>
              </div>

              {/* Navigasi Utama */}
              <div className="lg:col-span-2">
                <h3 className="font-display text-sm font-semibold tracking-wide text-white">
                  Navigasi
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.path}>
                      <a
                        href={item.path}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(item.path);
                        }}
                        className="transition-colors hover:text-white"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Usaha Aktif */}
              <div className="lg:col-span-2">
                <h3 className="font-display text-sm font-semibold tracking-wide text-white">
                  Usaha Kami
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  <li>
                    <a
                      href={PRIMARY_VENTURE.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-white"
                    >
                      <span>{PRIMARY_VENTURE.name}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Kontak & Media Sosial */}
              <div className="lg:col-span-3">
                <h3 className="font-display text-sm font-semibold tracking-wide text-white">
                  Hubungi
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  <li>
                    <a
                      href={`mailto:${CONTACT_CONFIG.email}`}
                      className="transition-colors hover:text-white"
                    >
                      {CONTACT_CONFIG.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={CONTACT_CONFIG.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-white"
                    >
                      WhatsApp · {CONTACT_CONFIG.whatsappDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={CONTACT_CONFIG.instagramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-white"
                    >
                      Instagram · {CONTACT_CONFIG.instagramHandle}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Baris Hukum Bawah */}
            <div className="flex flex-col justify-between gap-4 pt-8 text-xs text-[#888888] sm:flex-row sm:items-center">
              <p>
                © {new Date().getFullYear()} Nafa.id. Seluruh hak cipta
                dilindungi.
              </p>
              <div className="flex items-center gap-6">
                <button
                  type="button"
                  onClick={() => setLegalModal('privacy')}
                  className="transition-colors hover:text-white"
                >
                  Kebijakan Privasi
                </button>
                <button
                  type="button"
                  onClick={() => setLegalModal('terms')}
                  className="transition-colors hover:text-white"
                >
                  Syarat &amp; Ketentuan
                </button>
              </div>
            </div>
          </RevealSection>
        </div>
      </footer>

      {/* Dialog Kebijakan */}
      {legalModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="w-full max-w-xl bg-white p-8 text-black border border-[#E5E5E5]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4">
              <h3 id="legal-modal-title" className="font-display text-2xl font-bold">
                {legalModal === 'privacy'
                  ? 'Kebijakan Privasi'
                  : 'Syarat & Ketentuan'}
              </h3>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                aria-label="Tutup dialog"
                className="inline-flex h-10 w-10 items-center justify-center text-black hover:bg-[#F5F5F5]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#171717]">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    Nafa.id menghormati privasi setiap pengunjung, mitra, dan
                    calon kolaborator. Informasi yang dikirimkan melalui saluran
                    kontak kami hanya digunakan untuk menanggapi pertanyaan
                    bisnis, diskusi kemitraan, dan korespondensi resmi.
                  </p>
                  <p>
                    Kami tidak menjual, menyewakan, atau membagikan data kontak
                    pribadi kepada pihak ketiga yang tidak terkait. Untuk
                    pertanyaan terkait privasi, silakan hubungi{' '}
                    <span className="font-medium underline">
                      {CONTACT_CONFIG.email}
                    </span>
                    .
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Seluruh materi visual, identitas merek, dan naskah editorial
                    yang ditampilkan pada situs ini merupakan milik Nafa.id
                    serta unit usaha kami, digitalinvitation, kecuali dinyatakan
                    lain.
                  </p>
                  <p>
                    Layanan pemesanan undangan pernikahan digital tersedia
                    secara langsung melalui situs resmi{' '}
                    <span className="font-medium underline">
                      {PRIMARY_VENTURE.websiteUrl}
                    </span>
                    .
                  </p>
                </>
              )}
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="bg-black px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#171717]"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
