import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  NEWS_ARTICLES,
  type NewsArticle,
  type NewsCategory,
} from '../data/ecosystem';
import { MonochromeImage } from '../components/MonochromeImage';
import { ClipImageReveal, RevealSection } from '../components/Reveal';

interface NewsPageProps {
  articleSlug?: string;
  onNavigate: (path: string) => void;
}

const NEWS_CATEGORIES: NewsCategory[] = ['Semua', 'Nafa.id', 'Usaha'];

export function NewsPage({ articleSlug, onNavigate }: NewsPageProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<NewsCategory>('Semua');

  const activeArticle: NewsArticle | undefined = articleSlug
    ? NEWS_ARTICLES.find((a) => a.slug === articleSlug)
    : undefined;

  if (activeArticle) {
    const related = NEWS_ARTICLES.filter((a) => a.id !== activeArticle.id).slice(
      0,
      2
    );

    return (
      <div className="w-full pt-16 md:pt-20">
        <article className="w-full bg-white py-16 text-black md:py-24">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <button
              type="button"
              onClick={() => onNavigate('/news')}
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#888888] transition-colors hover:text-black"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Kembali ke Berita</span>
            </button>

            <RevealSection className="mt-8 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#888888]">
                <span className="font-semibold text-black">
                  {activeArticle.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.date}</span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] tracking-tight text-black sm:text-5xl">
                {activeArticle.title}
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-[#171717]/85">
                {activeArticle.summary}
              </p>
            </RevealSection>

            <ClipImageReveal className="mt-10 md:mt-14">
              <MonochromeImage
                src={activeArticle.image}
                alt={activeArticle.title}
                priority
                className="aspect-[16/8] w-full"
              />
            </ClipImageReveal>

            <div className="mx-auto mt-14 max-w-2xl space-y-6 text-[17px] leading-[1.78] text-[#171717]">
              {activeArticle.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0
                      ? 'first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:leading-none'
                      : ''
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>

        {/* Berita Terkait */}
        <section className="w-full bg-black py-20 text-white">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <div className="flex items-center justify-between border-b border-white/15 pb-6">
              <h2 className="font-display text-2xl font-bold text-white">
                Kisah Lainnya di Berita
              </h2>
              <button
                type="button"
                onClick={() => onNavigate('/news')}
                className="text-sm font-medium text-white/75 transition-colors hover:text-white"
              >
                Semua Berita
              </button>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {related.map((article) => (
                <article
                  key={article.id}
                  onClick={() => onNavigate(`/news/${article.slug}`)}
                  className="group cursor-pointer border-b border-white/15 pb-8"
                >
                  <div className="overflow-hidden bg-[#171717]">
                    <MonochromeImage
                      src={article.image}
                      alt={article.title}
                      hoverZoom
                      className="aspect-[16/10] w-full"
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-[#888888]">
                    <span className="text-white">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white transition-opacity group-hover:opacity-75">
                    {article.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-white">
                    <span>Baca selengkapnya</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  const filteredArticles =
    selectedCategory === 'Semua'
      ? NEWS_ARTICLES
      : NEWS_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="w-full pt-16 md:pt-20">
      <section className="w-full bg-white py-16 text-black md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <RevealSection className="max-w-3xl">
            <p className="text-sm font-medium text-[#888888]">Berita</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Kisah terbaru.
            </h1>
            <p className="mt-6 text-lg leading-[1.6] text-[#171717]">
              Pembaruan dan catatan seputar Nafa.id serta perkembangan usaha
              aktif kami, digitalinvitation. Entri di bawah merupakan penanda
              editorial sementara hingga pengumuman resmi diterbitkan.
            </p>
          </RevealSection>

          {/* Filter Kategori */}
          <div
            role="tablist"
            aria-label="Filter berita berdasarkan kategori"
            className="mt-12 flex flex-wrap items-center gap-2 border-t border-b border-[#E5E5E5] py-4"
          >
            {NEWS_CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-200 ${
                    active
                      ? 'bg-black text-white'
                      : 'bg-transparent text-[#171717] hover:bg-[#F5F5F5]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Daftar Artikel */}
          <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article, idx) => (
              <RevealSection
                key={article.id}
                delay={idx * 0.06}
                className={
                  idx === 0 && selectedCategory === 'Semua'
                    ? 'md:col-span-2 lg:col-span-2'
                    : ''
                }
              >
                <article
                  onClick={() => onNavigate(`/news/${article.slug}`)}
                  className="group flex h-full cursor-pointer flex-col justify-between border-b border-[#E5E5E5] pb-8"
                >
                  <div>
                    <div className="overflow-hidden bg-[#F5F5F5]">
                      <MonochromeImage
                        src={article.image}
                        alt={article.title}
                        hoverZoom
                        className={
                          idx === 0 && selectedCategory === 'Semua'
                            ? 'aspect-[16/9] w-full'
                            : 'aspect-[4/3] w-full'
                        }
                      />
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-[#888888]">
                      <span className="font-semibold text-black">
                        {article.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{article.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-black transition-opacity group-hover:opacity-75 md:text-3xl">
                      {article.title}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-[#171717]/80 md:text-base">
                      {article.summary}
                    </p>
                  </div>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black">
                    <span>Baca selengkapnya</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
