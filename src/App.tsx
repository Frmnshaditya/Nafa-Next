/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Footer } from './components/Footer';
import { IntroLoader } from './components/IntroLoader';
import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { BrandsPage } from './pages/BrandsPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { NewsPage } from './pages/NewsPage';
import { SustainabilityPage } from './pages/SustainabilityPage';

const PAGE_TITLES: Record<string, string> = {
  '/': 'Nafa.id — Satu Visi. Membangun Ide. Menciptakan Usaha.',
  '/about': 'Tentang Kami — Nafa.id',
  '/brands': 'Merek — digitalinvitation | Nafa.id',
  '/sustainability': 'Keberlanjutan — Nafa.id',
  '/news': 'Berita — Nafa.id',
  '/contact': 'Hubungi Kami — Nafa.id',
};

function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() =>
    normalizePath(window.location.pathname)
  );
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (currentPath.startsWith('/news/')) {
      document.title = 'Berita — Nafa.id';
    } else {
      document.title =
        PAGE_TITLES[currentPath] ?? 'Nafa.id — Membangun Ide. Menciptakan Usaha.';
    }
  }, [currentPath]);

  const navigate = useCallback(
    (targetPath: string) => {
      const normalized = normalizePath(targetPath);
      if (normalized === currentPath) {
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        });
        return;
      }
      window.history.pushState({}, '', normalized);
      setCurrentPath(normalized);
      window.scrollTo({ top: 0, behavior: 'auto' });
    },
    [currentPath, prefersReducedMotion]
  );

  const hasDarkHero = currentPath === '/' || currentPath === '/sustainability';

  const renderPage = () => {
    if (currentPath === '/about') {
      return <AboutPage onNavigate={navigate} />;
    }
    if (currentPath === '/brands') {
      return <BrandsPage onNavigate={navigate} />;
    }
    if (currentPath === '/sustainability') {
      return <SustainabilityPage onNavigate={navigate} />;
    }
    if (currentPath === '/news') {
      return <NewsPage onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/news/')) {
      const slug = currentPath.replace('/news/', '');
      return <NewsPage articleSlug={slug} onNavigate={navigate} />;
    }
    if (currentPath === '/contact') {
      return <ContactPage />;
    }
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <IntroLoader />
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        hasDarkHero={hasDarkHero}
      />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
