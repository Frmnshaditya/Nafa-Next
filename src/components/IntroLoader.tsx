import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { LOGO_URL } from '../data/ecosystem';

export function IntroLoader() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(() => !prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 720);

    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-4">
              <img
                src={LOGO_URL}
                alt="Logo Nafa.id"
                className="h-20 w-20 rounded-full object-cover ring-1 ring-white/20 sm:h-24 sm:w-24"
              />
              <span className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Nafa.id
              </span>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 h-px w-24 origin-left bg-white/50"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
