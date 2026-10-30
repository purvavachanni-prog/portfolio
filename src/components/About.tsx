import React from 'react';
import { ArrowUpRight, Compass, ShieldCheck, Layers, BookOpen, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume, onOpenContact }) => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#E7E0D8]/70">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8A4F33] uppercase tracking-wider mb-2">
            <span>Engineering Discipline</span>
            <span aria-hidden="true" className="text-[#E7E0D8]">·</span>
            <span>Profile & Mindset</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2825] font-normal tracking-tight">
            An engineer who treats machine learning models and user interfaces with equal rigor.
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-[#665E57] text-base leading-relaxed">
            <p>
              I am an AI/ML Engineer and Full-Stack Developer currently in my 2nd year of B.Tech CSE (AIML) at{' '}
              <strong className="text-[#2C2825] font-semibold">Reva University, Bengaluru</strong>, holding an academic{' '}
              <strong className="text-[#2C2825] font-semibold">CGPA of 9.67</strong>. My engineering journey is built on continuous scholastic discipline, having graduated with 94.0% in Pre-University Science (Oxford PU College) and 96.7% in Secondary School (S. Cadambi Vidyakendra).
            </p>
            <p>
              Rather than viewing AI and web development as separate silos, I build systems where intelligent cloud reasoning translates directly into responsive, tactile client-side applications. Whether orchestrating multi-agent LLM workflows on AWS Bedrock for <strong className="text-[#2C2825] font-semibold">Campus Guardian</strong>, enforcing database-level concurrency locks in PostgreSQL for <strong className="text-[#2C2825] font-semibold">Velvet-Brew</strong>, or achieving 100/100 Lighthouse performance with vanilla DOM engines in <strong className="text-[#2C2825] font-semibold">Craftverse</strong>, I value determinism, performance, and craft.
            </p>
            <p>
              My toolkit spans low-level problem solving in C and Java to cloud-native pipelines in Python, React, and AWS API Gateway. I prioritize clean architectures that are maintainable, accessible, and grounded in real practical utility.
            </p>

            {/* Engineering Tenets */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PERSONAL_INFO.philosophies.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#F4F0EA] border border-[#E7E0D8] rounded-lg transition-colors hover:border-[#C88363]/60"
                >
                  <span className="text-xs font-semibold text-[#2C2825] block mb-1.5">
                    {item.title}
                  </span>
                  <p className="text-xs text-[#665E57] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Curated Quick Dossier */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F4F0EA] border border-[#E7E0D8] rounded-xl p-6 sm:p-7">
              <h3 className="font-serif text-xl font-normal text-[#2C2825] mb-5 pb-3 border-b border-[#E7E0D8]">
                Technical Profile Dossier
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start justify-between py-1.5 border-b border-[#E7E0D8]/60">
                  <span className="text-[#665E57]">Specialization</span>
                  <span className="font-medium text-[#2C2825] text-right">
                    AI/ML Systems & Full-Stack Web
                  </span>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-[#E7E0D8]/60">
                  <span className="text-[#665E57]">Undergraduate Program</span>
                  <span className="font-medium text-[#2C2825] text-right">
                    Reva University, Bengaluru
                  </span>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-[#E7E0D8]/60">
                  <span className="text-[#665E57]">Graduation Cohort</span>
                  <span className="font-medium text-[#2C2825] text-right">
                    Class of 2028 (2nd Year)
                  </span>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-[#E7E0D8]/60">
                  <span className="text-[#665E57]">Current Standing</span>
                  <span className="font-mono font-semibold text-[#8A4F33] text-right">
                    9.67 CGPA
                  </span>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-[#E7E0D8]/60">
                  <span className="text-[#665E57]">Core Stack</span>
                  <span className="font-medium text-[#2C2825] text-right">
                    Python · React · Vite · SQL · AWS Bedrock
                  </span>
                </div>

                <div className="flex items-start justify-between py-1.5">
                  <span className="text-[#665E57]">Availability</span>
                  <span className="font-medium text-[#707A65] text-right">
                    Summer/Winter Internships & AI R&D
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#E7E0D8] flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenResume}
                  className="flex-1 py-2.5 px-4 text-xs font-semibold text-[#2C2825] bg-[#FFFFFF] border border-[#E7E0D8] rounded-lg hover:border-[#C88363] hover:text-[#8A4F33] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Full Resume View</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenContact}
                  className="flex-1 py-2.5 px-4 text-xs font-semibold text-[#FBF9F5] bg-[#2C2825] rounded-lg hover:bg-[#C88363] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Initiate Contact</span>
                </button>
              </div>
            </div>

            {/* Quiet Academic Accolades Card */}
            <div className="p-5 bg-[#FFFFFF] border border-[#E7E0D8] rounded-xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#F4F0EA] border border-[#E7E0D8] flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-[#8A4F33]" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#2C2825]">
                  Consistent Scholastic Distinction
                </h4>
                <p className="text-[11px] text-[#665E57] mt-0.5">
                  10th Board (96.7%) → Pre-University (94.0%) → Reva University (9.67 CGPA)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
