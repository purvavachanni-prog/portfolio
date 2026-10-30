import React from 'react';
import { ArrowUp, Mail, Phone, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F4F0EA] border-t border-[#E7E0D8] py-14">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-[#E7E0D8]/70">
          {/* Brand & Editorial Bio */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-serif text-2xl text-[#2C2825] font-normal tracking-tight block">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs text-[#665E57] max-w-sm leading-relaxed">
              AI/ML Engineer & Full-Stack Developer. 2nd-year B.Tech CSE (AIML) at Reva University (CGPA 9.67). Specializing in autonomous multi-agent cloud systems and tactile web applications.
            </p>
            <div className="pt-2 text-xs text-[#8A4F33] font-medium">
              Bengaluru, Karnataka, India
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <span className="font-semibold text-[#2C2825] uppercase tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-2 text-[#665E57]">
              <li>
                <a href="#about" className="hover:text-[#2C2825] transition-colors">
                  Engineering Profile & Mindset
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#2C2825] transition-colors">
                  Architectural Deployments
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#2C2825] transition-colors">
                  Technical Stack & Tooling
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#2C2825] transition-colors">
                  Academic Timeline & Rigor
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-[#2C2825] transition-colors">
                  Credentials & Ideathons
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Documents */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <span className="font-semibold text-[#2C2825] uppercase tracking-wider block">
              Direct Access
            </span>
            <div className="space-y-2 text-[#665E57]">
              <div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-[#8A4F33] transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#8A4F33]" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </div>
              <div>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#8A4F33] transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8A4F33]" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </div>
              <div className="pt-2 flex gap-3">
                <button
                  onClick={onOpenResume}
                  className="px-3 py-1.5 bg-[#FFFFFF] border border-[#E7E0D8] rounded-md text-[#2C2825] hover:border-[#C88363] hover:text-[#8A4F33] transition-colors font-medium"
                >
                  View Resume
                </button>
                <button
                  onClick={onOpenContact}
                  className="px-3 py-1.5 bg-[#2C2825] text-[#FBF9F5] rounded-md hover:bg-[#C88363] transition-colors font-medium"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#665E57]">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed with Warm Editorial Craft.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#665E57] hover:text-[#2C2825] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
