import { type FormEvent, useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CONTACT_CONFIG } from '../data/ecosystem';
import { RevealSection } from '../components/Reveal';

type InquiryCategory = (typeof CONTACT_CONFIG.categories)[number];

export function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState<InquiryCategory>(
    CONTACT_CONFIG.categories[0]
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      setError('Mohon masukkan nama lengkap Anda.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Mohon masukkan alamat email yang valid.');
      return;
    }
    if (trimmedMessage.length < 10) {
      setError('Mohon tuliskan pesan singkat (minimal 10 karakter).');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setOrganization('');
    setMessage('');
    setError('');
    setSubmitted(false);
  };

  return (
    <div className="w-full pt-16 md:pt-20">
      {/* Header Halaman (Putih) */}
      <section className="w-full bg-white py-16 text-black md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <RevealSection className="max-w-3xl">
            <p className="text-sm font-medium text-[#888888]">Hubungi Kami</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Mari membangun sesuatu yang bermakna.
            </h1>
            <p className="mt-6 text-lg leading-[1.6] text-[#171717]">
              Kami terbuka untuk kolaborasi, kemitraan, peluang bisnis, dan
              gagasan baru. Hubungi kami secara langsung atau kirimkan pesan
              melalui formulir di bawah ini.
            </p>
          </RevealSection>

          <div className="mt-16 grid gap-14 border-t border-[#E5E5E5] pt-14 lg:grid-cols-12">
            {/* Saluran Langsung */}
            <RevealSection className="lg:col-span-5">
              <h2 className="font-display text-2xl font-bold text-black">
                Saluran Resmi
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#888888]">
                Terhubung langsung dengan tim Nafa.id melalui saluran komunikasi
                resmi kami.
              </p>

              <div className="mt-8 border-t border-[#E5E5E5]">
                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="group flex items-center justify-between border-b border-[#E5E5E5] py-5 transition-colors hover:border-black"
                >
                  <div>
                    <span className="block text-xs text-[#888888]">Email</span>
                    <span className="mt-1 block font-display text-lg font-semibold text-black">
                      {CONTACT_CONFIG.email}
                    </span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-[#888888] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black" />
                </a>

                <a
                  href={CONTACT_CONFIG.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-[#E5E5E5] py-5 transition-colors hover:border-black"
                >
                  <div>
                    <span className="block text-xs text-[#888888]">
                      WhatsApp
                    </span>
                    <span className="mt-1 block font-display text-lg font-semibold text-black">
                      {CONTACT_CONFIG.whatsappDisplay}
                    </span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-[#888888] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black" />
                </a>

                <a
                  href={CONTACT_CONFIG.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-[#E5E5E5] py-5 transition-colors hover:border-black"
                >
                  <div>
                    <span className="block text-xs text-[#888888]">
                      Instagram
                    </span>
                    <span className="mt-1 block font-display text-lg font-semibold text-black">
                      {CONTACT_CONFIG.instagramHandle}
                    </span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-[#888888] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black" />
                </a>
              </div>
            </RevealSection>

            {/* Formulir Pertanyaan */}
            <RevealSection delay={0.1} className="lg:col-span-7">
              {submitted ? (
                <div className="border border-black bg-[#F5F5F5] p-10 md:p-12">
                  <CheckCircle2 className="h-8 w-8 text-black" />
                  <h2 className="mt-5 font-display text-3xl font-bold text-black">
                    Pesan Anda telah diterima.
                  </h2>
                  <p className="mt-3 max-w-lg text-base leading-relaxed text-[#171717]">
                    Terima kasih, <span className="font-semibold">{name}</span>.
                    Pesan Anda pada kategori{' '}
                    <span className="font-semibold">{selectedCategory}</span>{' '}
                    telah tercatat untuk tim kami. Anda juga dapat menghubungi
                    kami langsung melalui{' '}
                    <a
                      href={`mailto:${CONTACT_CONFIG.email}`}
                      className="underline"
                    >
                      {CONTACT_CONFIG.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-8 bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#171717]"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="border border-[#E5E5E5] bg-[#F5F5F5] p-8 md:p-12"
                >
                  <h2 className="font-display text-2xl font-bold text-black">
                    Kirim Pesan
                  </h2>

                  <div className="mt-6">
                    <span className="block text-xs font-medium text-[#888888]">
                      Kategori Pesan
                    </span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {CONTACT_CONFIG.categories.map((category) => {
                        const active = selectedCategory === category;
                        return (
                          <button
                            key={category}
                            type="button"
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 text-xs font-medium whitespace-nowrap shrink-0 border transition-colors ${
                              active
                                ? 'border-black bg-black text-white'
                                : 'border-[#E5E5E5] bg-white text-black hover:border-black'
                            }`}
                          >
                            {category}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-[#171717]"
                      >
                        Nama Lengkap *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nama Anda"
                        className="mt-2 w-full border border-[#E5E5E5] bg-white px-4 py-3 text-sm text-black placeholder:text-[#888888] focus:border-black focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium text-[#171717]"
                      >
                        Alamat Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="anda@perusahaan.com"
                        className="mt-2 w-full border border-[#E5E5E5] bg-white px-4 py-3 text-sm text-black placeholder:text-[#888888] focus:border-black focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="contact-org"
                      className="block text-xs font-medium text-[#171717]"
                    >
                      Perusahaan / Organisasi (Opsional)
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Nama perusahaan atau organisasi"
                      className="mt-2 w-full border border-[#E5E5E5] bg-white px-4 py-3 text-sm text-black placeholder:text-[#888888] focus:border-black focus:outline-none"
                    />
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-[#171717]"
                    >
                      Pesan *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ceritakan gagasan, peluang kemitraan, atau pertanyaan Anda..."
                      className="mt-2 w-full border border-[#E5E5E5] bg-white px-4 py-3 text-sm text-black placeholder:text-[#888888] focus:border-black focus:outline-none"
                    />
                  </div>

                  {error && (
                    <p
                      role="alert"
                      className="mt-4 border border-black bg-white px-4 py-2.5 text-xs font-medium text-black"
                    >
                      {error}
                    </p>
                  )}

                  <div className="mt-8">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-3 bg-black px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#171717]"
                    >
                      <span>Kirim Pesan</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </RevealSection>
          </div>
        </div>
      </section>
    </div>
  );
}
