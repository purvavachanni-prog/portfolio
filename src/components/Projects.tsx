import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Layers, Sparkles, ExternalLink, Code2 } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & Cloud', 'Full-Stack Web', 'Creative Web'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[#E7E0D8]/70">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8A4F33] uppercase tracking-wider mb-2">
              <span>Selected Works</span>
              <span aria-hidden="true" className="text-[#E7E0D8]">·</span>
              <span>Production Deployments</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2825] font-normal tracking-tight">
              Curated technical case studies & system architectures.
            </h2>
            <p className="text-sm sm:text-base text-[#665E57] mt-3">
              Real-world systems engineered across AWS multi-agent pipelines, ACID-compliant databases, and zero-framework web frontends.
            </p>
          </div>

          {/* Interactive Category Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-[#F4F0EA] border border-[#E7E0D8] rounded-lg self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#2C2825] text-[#FBF9F5] shadow-xs'
                    : 'text-[#665E57] hover:text-[#2C2825]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#F4F0EA] border border-[#E7E0D8] rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-[#C88363]/60 group"
            >
              <div>
                {/* Unboxed Metadata (Zero-Pill Rule) */}
                <div className="flex items-center gap-2 text-xs text-[#8A4F33] font-medium mb-3">
                  <span>{project.category}</span>
                  <span aria-hidden="true" className="text-[#85736C]">·</span>
                  <span>{project.year}</span>
                </div>

                {/* Project Title */}
                <h3 className="font-serif text-2xl font-normal text-[#2C2825] mb-2 group-hover:text-[#8A4F33] transition-colors">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs font-medium text-[#53443D] mb-4">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="text-xs text-[#665E57] leading-relaxed mb-6">
                  {project.tagline}
                </p>

                {/* Key Technical Mechanism */}
                <div className="p-3 bg-[#FFFFFF] border border-[#E7E0D8] rounded-lg mb-6">
                  <span className="text-[11px] font-semibold text-[#2C2825] block mb-1">
                    Architectural Core
                  </span>
                  <p className="text-[11px] text-[#665E57] leading-relaxed">
                    {project.architecture.keyMechanism}
                  </p>
                </div>
              </div>

              <div>
                {/* Tech Stack List */}
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-[#665E57] mb-6 pt-4 border-t border-[#E7E0D8]/60">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={tech} className="font-mono">
                      {tech}
                      {i < 3 ? ' ·' : ''}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-[#2C2825] bg-[#FFFFFF] border border-[#E7E0D8] rounded-lg hover:border-[#C88363] hover:text-[#8A4F33] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Inspect Case Study & Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8A4F33]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
