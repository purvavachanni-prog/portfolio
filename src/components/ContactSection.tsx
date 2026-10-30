import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[#E7E0D8]/70">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8A4F33] uppercase tracking-wider mb-2">
                <span>Direct Inquiries</span>
                <span aria-hidden="true" className="text-[#E7E0D8]">·</span>
                <span>Collaboration</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2825] font-normal tracking-tight mb-4">
                Let’s discuss intelligent systems, internships, or engineering initiatives.
              </h2>
              <p className="text-sm text-[#665E57] leading-relaxed mb-8">
                Currently open to AI/ML and Full-Stack engineering internship opportunities, research collaborations, and high-impact software projects.
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-3.5">
                {/* Email with copy */}
                <div className="p-4 bg-[#F4F0EA] border border-[#E7E0D8] rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FFFFFF] border border-[#E7E0D8] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#8A4F33]" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#665E57] block">Email Address</span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-semibold text-[#2C2825] hover:text-[#8A4F33] transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="p-2 text-[#665E57] hover:text-[#2C2825] bg-[#FFFFFF] border border-[#E7E0D8] rounded-lg hover:border-[#C88363] transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#707A65]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 bg-[#F4F0EA] border border-[#E7E0D8] rounded-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FFFFFF] border border-[#E7E0D8] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#8A4F33]" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#665E57] block">Direct Telephone</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-semibold text-[#2C2825] hover:text-[#8A4F33] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 bg-[#F4F0EA] border border-[#E7E0D8] rounded-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FFFFFF] border border-[#E7E0D8] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#8A4F33]" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#665E57] block">Base Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#2C2825]">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E7E0D8] text-xs text-[#665E57]">
              <span>Response Window: Typically within 24 business hours.</span>
            </div>
          </div>

          {/* Right Column: Interactive Correspondence Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F4F0EA] border border-[#E7E0D8] rounded-xl p-6 sm:p-8">
              <h3 className="font-serif text-xl font-normal text-[#2C2825] mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-[#665E57] mb-6">
                Transmit a direct note or project proposal.
              </p>

              {submitted ? (
                <div className="p-8 bg-[#FFFFFF] border border-[#E7E0D8] rounded-xl text-center space-y-4 animate-in fade-in duration-200">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#707A65]/10 text-[#707A65] flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl font-normal text-[#2C2825]">
                    Message Prepared
                  </h4>
                  <p className="text-xs text-[#665E57] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#2C2825]">{formData.name}</strong>. Your correspondence has been formatted. You can also dispatch directly via your email client.
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                        formData.subject || 'Portfolio Inquiry'
                      )}&body=${encodeURIComponent(formData.message)}`}
                      className="px-5 py-2.5 text-xs font-semibold text-[#FBF9F5] bg-[#2C2825] rounded-lg hover:bg-[#C88363] transition-colors inline-flex items-center gap-2"
                    >
                      <span>Open in Email Client</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 text-xs font-medium text-[#2C2825] bg-[#F4F0EA] border border-[#E7E0D8] rounded-lg hover:bg-[#FFFFFF]"
                    >
                      Compose Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-[#2C2825] block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Elena Vance"
                        className="w-full h-11 px-3.5 text-xs bg-[#FBF9F5] border border-[#E7E0D8] rounded-lg text-[#2C2825] placeholder:text-[#85736C] focus:outline-none focus:border-[#C88363] focus:ring-1 focus:ring-[#C88363]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[#2C2825] block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@company.com"
                        className="w-full h-11 px-3.5 text-xs bg-[#FBF9F5] border border-[#E7E0D8] rounded-lg text-[#2C2825] placeholder:text-[#85736C] focus:outline-none focus:border-[#C88363] focus:ring-1 focus:ring-[#C88363]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-[#2C2825] block mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AI/ML Summer Internship Opportunity"
                      className="w-full h-11 px-3.5 text-xs bg-[#FBF9F5] border border-[#E7E0D8] rounded-lg text-[#2C2825] placeholder:text-[#85736C] focus:outline-none focus:border-[#C88363] focus:ring-1 focus:ring-[#C88363]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-[#2C2825] block mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your engineering role, project scope, or inquiry..."
                      className="w-full p-3.5 text-xs bg-[#FBF9F5] border border-[#E7E0D8] rounded-lg text-[#2C2825] placeholder:text-[#85736C] focus:outline-none focus:border-[#C88363] focus:ring-1 focus:ring-[#C88363] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 text-xs font-semibold text-[#FBF9F5] bg-[#2C2825] rounded-lg hover:bg-[#C88363] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Transmitting Note...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
