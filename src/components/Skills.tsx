import React, { useState } from 'react';
import { Search, Code2, Database, Terminal, Cpu, CheckCircle } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDomainFilter, setActiveDomainFilter] = useState('All');

  const domainTabs = ['All', 'Languages', 'Frontend', 'Databases', 'Cloud & Tools'];

  const filterMatches = (categoryTitle: string) => {
    if (activeDomainFilter === 'All') return true;
    if (activeDomainFilter === 'Languages' && categoryTitle.includes('Languages')) return true;
    if (activeDomainFilter === 'Frontend' && categoryTitle.includes('Frontend')) return true;
    if (activeDomainFilter === 'Databases' && categoryTitle.includes('Databases')) return true;
    if (activeDomainFilter === 'Cloud & Tools' && categoryTitle.includes('Cloud')) return true;
    return false;
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#E7E0D8]/70">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8A4F33] uppercase tracking-wider mb-2">
              <span>Technical Competencies</span>
              <span aria-hidden="true" className="text-[#E7E0D8]">·</span>
              <span>Tooling & Runtime</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2825] font-normal tracking-tight">
              Grounded in low-level principles, fluent in modern cloud stacks.
            </h2>
            <p className="text-sm sm:text-base text-[#665E57] mt-3">
              Synthesizing systems programming in C, object-oriented design in Java, AI agents in Python, and full-stack web applications with React, SQL, and AWS.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-64 self-start md:self-end">
            <Search className="w-4 h-4 text-[#85736C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter skills by name..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-[#FBF9F5] border border-[#E7E0D8] rounded-lg text-[#2C2825] placeholder:text-[#85736C] focus:outline-none focus:border-[#C88363] focus:ring-1 focus:ring-[#C88363]"
            />
          </div>
        </div>

        {/* Domain Filter Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F4F0EA] border border-[#E7E0D8] rounded-lg mb-8 overflow-x-auto">
          {domainTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveDomainFilter(tab)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeDomainFilter === tab
                  ? 'bg-[#2C2825] text-[#FBF9F5]'
                  : 'text-[#665E57] hover:text-[#2C2825]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.filter((category) => filterMatches(category.title)).map((cat, idx) => {
            const visibleSkills = cat.skills.filter(
              (s) =>
                s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                s.usedIn.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (visibleSkills.length === 0) return null;

            return (
              <div
                key={idx}
                className="bg-[#F4F0EA] border border-[#E7E0D8] rounded-xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#2C2825] mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#665E57] mb-6">
                    {cat.description}
                  </p>

                  <div className="space-y-4">
                    {visibleSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3.5 bg-[#FFFFFF] border border-[#E7E0D8] rounded-lg transition-colors hover:border-[#C88363]/60"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-[#2C2825]">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-[#8A4F33] bg-[#F4F0EA] border border-[#E7E0D8] px-2 py-0.5 rounded">
                            {skill.proficiency}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#665E57] leading-relaxed">
                          <strong className="text-[#53443D] font-medium">Applied in:</strong>{' '}
                          {skill.usedIn}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E7E0D8] flex items-center justify-between text-[11px] text-[#665E57]">
                  <span>Domain Category</span>
                  <span className="font-mono text-[#707A65]">Active Rigor</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
