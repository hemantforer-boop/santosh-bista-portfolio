import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BRAND_IDENTITY,
  PERSONAL_SOCIALS,
  ART_GHAR_SOCIALS,
} from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  organization: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactFooter: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedEnquiry, setSubmittedEnquiry] = useState<FormState | null>(null);
  const [copiedBrief, setCopiedBrief] = useState(false);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = 'Please include a brief message (at least 10 characters).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const constructMailtoUrl = (data: FormState) => {
    const subject = encodeURIComponent(
      `Enquiry — ${data.organization ? `${data.organization} (${data.name})` : data.name}`
    );
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nProject / Organization: ${
        data.organization || 'Not specified'
      }\n\nMessage:\n${data.message}`
    );
    return `mailto:${BRAND_IDENTITY.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmittedEnquiry({ ...form });
  };

  const handleCopyBrief = async () => {
    if (!submittedEnquiry) return;
    const text = `To: ${BRAND_IDENTITY.email}\nName: ${submittedEnquiry.name}\nEmail: ${submittedEnquiry.email}\nProject / Organization: ${submittedEnquiry.organization || 'N/A'}\n\n${submittedEnquiry.message}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2500);
    } catch {
      // ignore clipboard error
    }
  };

  return (
    <>
      {/* SECTION 18: SOCIAL MEDIA — FOLLOW THE WORK */}
      <section
        aria-labelledby="follow-work-heading"
        className="relative py-24 md:py-32 bg-[#080808] border-b border-[#F4F1EA]/[0.07]"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="font-mono-tabular text-xs tracking-[0.24em] text-[#6E6A63] uppercase block mb-3">
                 SOCIAL CHANNELS
              </span>
              <h2
                id="follow-work-heading"
                className="text-2xl sm:text-3xl font-light tracking-[0.14em] text-[#F4F1EA] uppercase"
              >
                FOLLOW THE WORK
              </h2>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-12">
              {/* Personal Channels */}
              <div>
                <h3 className="font-mono-tabular text-xs tracking-[0.22em] text-[#D4C5A9] uppercase mb-5 pb-3 border-b border-[#F4F1EA]/10">
                  SANTOSH BISTA — PERSONAL
                </h3>
                <ul className="divide-y divide-[#F4F1EA]/[0.07]">
                  {PERSONAL_SOCIALS.map((soc) => (
                    <li key={soc.name}>
                      <a
                        href={soc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group py-3.5 flex items-center justify-between text-sm"
                      >
                        <span className="text-[#E6E2D8] group-hover:text-[#D4C5A9] transition-colors tracking-wide">
                          {soc.name}
                        </span>
                        <span className="font-mono-tabular text-xs text-[#6E6A63] group-hover:text-[#F4F1EA] transition-colors">
                          {soc.handle} ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Art Ghar Channels */}
              <div>
                <h3 className="font-mono-tabular text-xs tracking-[0.22em] text-[#D4C5A9] uppercase mb-5 pb-3 border-b border-[#F4F1EA]/10">
                  ART GHAR — OFFICIAL
                </h3>
                <ul className="divide-y divide-[#F4F1EA]/[0.07]">
                  {ART_GHAR_SOCIALS.map((soc) => (
                    <li key={soc.name}>
                      <a
                        href={soc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group py-3.5 flex items-center justify-between text-sm"
                      >
                        <span className="text-[#E6E2D8] group-hover:text-[#D4C5A9] transition-colors tracking-wide">
                          {soc.name}
                        </span>
                        <span className="font-mono-tabular text-xs text-[#6E6A63] group-hover:text-[#F4F1EA] transition-colors">
                          {soc.handle} ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 19: CONTACT / BOOKING (PURE MINIMALISM) */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="relative py-32 md:py-48 bg-[#050505] border-b border-[#F4F1EA]/[0.07]"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            {/* Left 6 Cols: Minimal Monument Headline & Direct CV Contact */}
            <div className="lg:col-span-6 space-y-12">
              <div>
                <span className="font-mono-tabular text-xs tracking-[0.26em] text-[#6E6A63] uppercase block mb-6">
                  11 / CONTACT
                </span>

                <motion.h2
                  id="contact-heading"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl sm:text-6xl md:text-7xl font-light tracking-[-0.03em] leading-[0.96] text-[#F4F1EA] uppercase"
                >
                  <span className="block">LET&apos;S CREATE</span>
                  <span className="block font-serif-editorial italic text-[#D4C5A9]">
                    SOMETHING
                  </span>
                  <span className="block">MEANINGFUL.</span>
                </motion.h2>

                <p className="mt-8 text-base md:text-lg text-[#A39E93] font-light leading-relaxed max-w-md">
                  For acting, theatre, directing, creative collaborations and professional enquiries.
                </p>
              </div>

              {/* Verified CV Contact Details */}
              <div className="space-y-6 pt-8 border-t border-[#F4F1EA]/10">
                <div>
                  <span className="font-mono-tabular text-[11px] tracking-[0.22em] text-[#6E6A63] uppercase block mb-1">
                    EMAIL
                  </span>
                  <a
                    href={BRAND_IDENTITY.emailHref}
                    className="text-xl sm:text-2xl font-light text-[#F4F1EA] hover:text-[#D4C5A9] transition-colors break-all"
                  >
                    {BRAND_IDENTITY.email}
                  </a>
                </div>

                <div>
                  <span className="font-mono-tabular text-[11px] tracking-[0.22em] text-[#6E6A63] uppercase block mb-1">
                    TELEPHONE
                  </span>
                  <a
                    href={BRAND_IDENTITY.phoneHref}
                    className="font-mono-tabular text-lg sm:text-xl text-[#F4F1EA] hover:text-[#D4C5A9] transition-colors"
                  >
                    {BRAND_IDENTITY.phone}
                  </a>
                </div>

                <div>
                  <span className="font-mono-tabular text-[11px] tracking-[0.22em] text-[#6E6A63] uppercase block mb-1">
                    LOCATION
                  </span>
                  <p className="text-base text-[#E6E2D8] font-light">
                    {BRAND_IDENTITY.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Right 6 Cols: Refined Contact Form */}
            <div className="lg:col-span-6 lg:pt-8">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-8 bg-[#0A0A09] p-8 sm:p-12 border border-[#F4F1EA]/10"
              >
                {/* NAME */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono-tabular text-[11px] tracking-[0.22em] text-[#A39E93] uppercase mb-3"
                  >
                    NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-[#F4F1EA]/20 focus:border-[#D4C5A9] py-3 text-base text-[#F4F1EA] placeholder:text-[#6E6A63]/60 focus:outline-none transition-colors"
                  />
                  {errors.name && (
                    <p className="mt-2 text-xs text-[#D4C5A9]" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono-tabular text-[11px] tracking-[0.22em] text-[#A39E93] uppercase mb-3"
                  >
                    EMAIL
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="name@organization.com"
                    className="w-full bg-transparent border-b border-[#F4F1EA]/20 focus:border-[#D4C5A9] py-3 text-base text-[#F4F1EA] placeholder:text-[#6E6A63]/60 focus:outline-none transition-colors"
                  />
                  {errors.email && (
                    <p className="mt-2 text-xs text-[#D4C5A9]" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* PROJECT / ORGANIZATION */}
                <div>
                  <label
                    htmlFor="contact-org"
                    className="block font-mono-tabular text-[11px] tracking-[0.22em] text-[#A39E93] uppercase mb-3"
                  >
                    PROJECT / ORGANIZATION
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    value={form.organization}
                    onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    placeholder="Production house, theatre, or institution"
                    className="w-full bg-transparent border-b border-[#F4F1EA]/20 focus:border-[#D4C5A9] py-3 text-base text-[#F4F1EA] placeholder:text-[#6E6A63]/60 focus:outline-none transition-colors"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono-tabular text-[11px] tracking-[0.22em] text-[#A39E93] uppercase mb-3"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Project details, dates, or collaboration scope..."
                    className="w-full bg-transparent border-b border-[#F4F1EA]/20 focus:border-[#D4C5A9] py-3 text-base text-[#F4F1EA] placeholder:text-[#6E6A63]/60 focus:outline-none transition-colors resize-y"
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs text-[#D4C5A9]" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto py-4 px-9 bg-[#F4F1EA] text-[#080808] hover:bg-[#D4C5A9] transition-colors text-xs font-medium tracking-[0.24em] uppercase whitespace-nowrap"
                  >
                    SEND ENQUIRY
                  </button>
                </div>

                {/* Clean Direct Mail Dispatch */}
                {submittedEnquiry && (
                  <div
                    role="status"
                    className="pt-6 border-t border-[#F4F1EA]/12 space-y-4"
                  >
                    <p className="text-xs text-[#E6E2D8] leading-relaxed">
                      Your enquiry is prepared for{' '}
                      <span className="text-[#D4C5A9]">{BRAND_IDENTITY.email}</span>.
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={constructMailtoUrl(submittedEnquiry)}
                        className="py-2.5 px-5 bg-[#D4C5A9] text-[#080808] text-[11px] font-mono-tabular font-medium tracking-[0.2em] uppercase whitespace-nowrap"
                      >
                        COMPOSE EMAIL ↗
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyBrief}
                        className="py-2.5 px-5 border border-[#F4F1EA]/20 text-[11px] font-mono-tabular tracking-[0.2em] text-[#F4F1EA] hover:border-[#F4F1EA] uppercase whitespace-nowrap"
                      >
                        {copiedBrief ? 'COPIED' : 'COPY MESSAGE'}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 20: EXTREMELY MINIMAL FOOTER */}
      <footer className="bg-[#050505] py-16 md:py-24 text-xs text-[#6E6A63]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#F4F1EA]/[0.07]">
            <div className="space-y-2">
              <div className="text-base font-semibold tracking-[0.26em] text-[#F4F1EA] uppercase">
                SANTOSH BISTA
              </div>
              <div className="text-xs tracking-[0.22em] text-[#A39E93] uppercase">
                ACTOR
              </div>
              <div className="text-xs text-[#6E6A63]">
                Kathmandu, Nepal
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs tracking-[0.2em] uppercase">
              {PERSONAL_SOCIALS.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A39E93] hover:text-[#F4F1EA] transition-colors"
                >
                  {soc.name}
                </a>
              ))}
              <a
                href="#art-ghar"
                className="text-[#D4C5A9] hover:text-[#F4F1EA] transition-colors"
              >
                ART GHAR
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] font-mono-tabular tracking-[0.18em] uppercase">
            <div>
              © 2026 Santosh Bista. All rights reserved.
            </div>

            <a
              href="#top"
              className="text-[#A39E93] hover:text-[#F4F1EA] transition-colors whitespace-nowrap"
            >
              BACK TO TOP ↑
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
