import React, { useState } from 'react';
import { Award, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-20 md:py-28 border-b border-[#E7E0D8]/70">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8A4F33] uppercase tracking-wider mb-2">
            <span>Verified Credentials</span>
            <span aria-hidden="true" className="text-[#E7E0D8]">·</span>
            <span>Honors & Ideathons</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2825] font-normal tracking-tight">
            Industry & collegiate verifications in artificial intelligence.
          </h2>
          <p className="text-sm sm:text-base text-[#665E57] mt-3">
            Recognitions demonstrating algorithmic proficiency, rapid prototyping execution, and enterprise Python competency.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#F4F0EA] border border-[#E7E0D8] rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-colors hover:border-[#C88363]/60"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E7E0D8] mb-4">
                  <div className="flex items-center gap-2 text-xs text-[#8A4F33] font-medium">
                    <span>{cert.issuer}</span>
                    <span aria-hidden="true" className="text-[#85736C]">·</span>
                    <span>{cert.year}</span>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-[#707A65]" />
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#2C2825] mb-2">
                  {cert.name}
                </h3>
                <p className="text-xs font-medium text-[#53443D] mb-4">
                  Focus: {cert.focus}
                </p>

                <p className="text-xs text-[#665E57] leading-relaxed mb-6">
                  {cert.verificationNote}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-semibold text-[#2C2825] block">
                    Validated Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.topics.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-[#FFFFFF] border border-[#E7E0D8] px-2.5 py-1 rounded text-[#53443D]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E7E0D8] flex items-center justify-between text-xs">
                <span className="text-[#707A65] font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Credential
                </span>
                <span className="text-[11px] text-[#665E57]">
                  Issued {cert.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
