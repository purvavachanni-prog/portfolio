import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION_HISTORY } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-b border-[#E7E0D8]/70">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8A4F33] uppercase tracking-wider mb-2">
            <span>Academic Foundations</span>
            <span aria-hidden="true" className="text-[#E7E0D8]">·</span>
            <span>Scholastic Trajectory</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2825] font-normal tracking-tight">
            Scholastic excellence anchored in mathematics and computational theory.
          </h2>
          <p className="text-sm sm:text-base text-[#665E57] mt-3">
            A sustained record of academic distinction from foundational secondary schooling through advanced machine learning coursework at Reva University.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {EDUCATION_HISTORY.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F4F0EA] border border-[#E7E0D8] rounded-xl p-6 sm:p-8 transition-colors hover:border-[#C88363]/60"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-[#E7E0D8]">
                <div>
                  {/* Clean unboxed metadata (Zero-Pill rule) */}
                  <div className="flex items-center gap-2 text-xs text-[#8A4F33] font-medium mb-1.5">
                    <span>{item.period}</span>
                    <span aria-hidden="true" className="text-[#85736C]">·</span>
                    <span>{item.location}</span>
                    <span aria-hidden="true" className="text-[#85736C]">·</span>
                    <span>{item.status}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-[#2C2825]">
                    {item.institution}
                  </h3>
                  <p className="text-sm font-medium text-[#53443D] mt-0.5">
                    {item.degree}
                  </p>
                </div>

                <div className="md:text-right shrink-0 bg-[#FFFFFF] p-3 sm:p-4 rounded-lg border border-[#E7E0D8]">
                  <div className="font-serif text-2xl sm:text-3xl font-medium text-[#2C2825] tabular-nums">
                    {item.score}
                  </div>
                  <div className="text-[11px] text-[#8A4F33] font-medium mt-0.5">
                    {item.scoreLabel}
                  </div>
                </div>
              </div>

              {/* Coursework & Highlights */}
              <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {item.keyCoursework && (
                  <div className="md:col-span-6">
                    <h4 className="text-xs font-semibold text-[#2C2825] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C88363]" />
                      <span>Key Curricular Focus</span>
                    </h4>
                    <div className="flex flex-wrap gap-x-2 gap-y-1.5 text-xs text-[#665E57]">
                      {item.keyCoursework.map((course, cIdx) => (
                        <span key={cIdx} className="bg-[#FFFFFF] px-2.5 py-1 rounded border border-[#E7E0D8]">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.achievements && (
                  <div className={item.keyCoursework ? 'md:col-span-6' : 'md:col-span-12'}>
                    <h4 className="text-xs font-semibold text-[#2C2825] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#C88363]" />
                      <span>Distinction Notes</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#53443D]">
                      {item.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#707A65] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
