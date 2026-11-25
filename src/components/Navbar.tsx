import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { LOGO_URL, NAV_ITEMS } from '../data/ecosystem';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  hasDarkHero?: boolean;
}

export function Navbar({
  currentPath,
  onNavigate,
  hasDarkHero = false,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const useLightText = hasDarkHero && !isScrolled && !mobileOpen;

  const primaryNavLinks = NAV_ITEMS.slice(0, 4);
  const contactItem = NAV_ITEMS[4];

  const isActive = (path: string) => {
    if (path === '/news') {
      return currentPath === '/news' || currentPath.startsWith('/news/');
    }
    return currentPath === path;
  };

  const handleLinkClick = (path: string) => {
    setMobileOpen(false);
    onNavigate(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 text-black backdrop-blur-md border-b border-[#E5E5E5]'
            : useLightText
              ? 'bg-transparent text-white border-b border-white/10'
              : 'bg-white/95 text-black backdrop-blur-md border-b border-[#E5E5E5]'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-8 px-6 md:h-20 lg:px-12">
          {/* Zona 1: Logo + Tulisan Nafa.id */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/');
            }}
            aria-label="Beranda Nafa.id"
            className="inline-flex items-center gap-3 whitespace-nowrap shrink-0 transition-opacity duration-200 hover:opacity-85"
          >
            <img
              src={LOGO_URL}
              alt="Logo Nafa.id"
              className={`h-10 w-10 rounded-full object-cover md:h-11 md:w-11 ${
                useLightText || mobileOpen
                  ? 'ring-1 ring-white/25'
                  : 'ring-1 ring-black/10'
              }`}
            />
            <span className="font-display text-lg font-bold tracking-tight md:text-xl">
              Nafa.id
            </span>
          </a>

          {/* Zona 2: Tautan navigasi utama */}
          <nav
            aria-label="Navigasi utama"
            className="hidden items-center gap-7 lg:flex xl:gap-10"
          >
            {primaryNavLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.path);
                  }}
                  className={`group relative py-2 text-sm font-medium tracking-[0.02em] whitespace-nowrap shrink-0 transition-opacity duration-200 ${
                    active ? 'opacity-100 font-semibold' : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0.5 left-0 h-[1.5px] w-full origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      useLightText ? 'bg-white' : 'bg-black'
                    } ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zona 3: Aksi utama + menu seluler */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={contactItem.path}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(contactItem.path);
              }}
              className={`hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium tracking-[0.02em] whitespace-nowrap shrink-0 border transition-all duration-200 ${
                isActive(contactItem.path)
                  ? useLightText
                    ? 'bg-white text-black border-white'
                    : 'bg-black text-white border-black'
                  : useLightText
                    ? 'border-white/50 text-white hover:bg-white hover:text-black hover:border-white'
                    : 'border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              {contactItem.label}
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Seluler Layar Penuh */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-black px-6 pt-24 pb-10 text-white lg:hidden"
          >
            <nav aria-label="Navigasi seluler" className="flex flex-col border-t border-white/15">
              {NAV_ITEMS.map((item, idx) => {
                const active = isActive(item.path);
                return (
                  <motion.a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.path);
                    }}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: prefersReducedMotion ? 0 : idx * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`flex min-h-[56px] items-center justify-between border-b border-white/15 font-display text-2xl font-medium tracking-tight transition-colors ${
                      active ? 'text-white' : 'text-white/75 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-sans tracking-[0.2em] text-white/40">
                      0{idx + 1}
                    </span>
                  </motion.a>
                );
              })}
            </nav>

            <div className="border-t border-white/15 pt-6">
              <p className="font-display text-sm font-medium text-white">
                Nafa.id
              </p>
              <p className="mt-1 text-xs text-white/60">
                Membangun ide. Menciptakan usaha.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
