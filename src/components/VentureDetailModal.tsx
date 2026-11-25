import { useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import type { Venture } from '../data/ecosystem';
import { MonochromeImage } from './MonochromeImage';

interface VentureDetailModalProps {
  venture: Venture | null;
  onClose: () => void;
  onContactNavigate: () => void;
}

export function VentureDetailModal({
  venture,
  onClose,
}: VentureDetailModalProps) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!venture) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [venture, onClose]);

  return (
    <AnimatePresence>
      {venture && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="venture-modal-title"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-white text-black border border-[#E5E5E5]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup detail usaha"
              className="absolute top-4 right-4 z-10 inline-flex h-11 w-11 items-center justify-center bg-white text-black border border-[#E5E5E5] transition-colors hover:bg-black hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid md:grid-cols-12">
              <div className="flex items-center justify-center bg-[#EAEAEA] p-6 md:col-span-5 md:border-r md:border-[#E5E5E5]">
                <MonochromeImage
                  src={venture.image}
                  alt={venture.name}
                  className="h-[420px] w-full max-w-[235px] bg-white border border-[#D4D4D4]"
                  imgClassName="object-contain"
                />
              </div>

              <div className="flex flex-col justify-between p-8 md:col-span-7 md:p-10">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#888888]">
                    <span className="font-medium text-black">{venture.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{venture.status}</span>
                  </div>

                  <h3
                    id="venture-modal-title"
                    className="mt-4 font-display text-3xl font-bold tracking-tight text-black md:text-4xl"
                  >
                    {venture.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#888888]">
                    {venture.tagline}
                  </p>

                  <p className="mt-4 text-base leading-relaxed text-[#171717]">
                    {venture.longDescription}
                  </p>

                  <div className="mt-8 border-t border-[#E5E5E5] pt-6">
                    <h4 className="font-display text-xs font-semibold tracking-[0.12em] uppercase text-[#888888]">
                      Keunggulan Layanan
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {venture.focusAreas.map((area) => (
                        <li
                          key={area}
                          className="flex items-center justify-between border-b border-[#F5F5F5] pb-2 text-sm text-black"
                        >
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href={venture.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#171717]"
                  >
                    <span>Kunjungi digitalinvitation.biz.id</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-3 text-sm font-medium text-[#888888] transition-colors hover:text-black"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
