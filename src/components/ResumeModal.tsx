import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, GraduationCap, Award, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EDUCATION_HISTORY, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#2C2825]/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-[#FFFFFF] w-full max-w-4xl max-h-[92vh] rounded-2xl border border-[#E7E0D8] shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#F4F0EA] border-b border-[#E7E0D8] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-serif text-base text-[#2C2825] font-normal">
              Curriculum Vitae Monograph · {PERSONAL_INFO.name}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold text-[#2C2825] bg-[#FFFFFF] border border-[#E7E0D8] rounded-md hover:border-[#C88363] hover:text-[#8A4F33] transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close resume viewer"
              className="p-1.5 text-[#665E57] hover:text-[#2C2825] hover:bg-[#FFFFFF] rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Monograph Content */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 text-[#2C2825] font-sans">
          {/* Resume Header */}
          <div className="border-b border-[#E7E0D8] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#2C2825]">
                {PERSONAL_INFO.name}
              </h1>
              <span className="text-xs font-mono font-medium text-[#8A4F33] tracking-wide">
                B.Tech CSE (AIML) · 9.67 CGPA
              </span>
            </div>
            <p className="text-sm font-medium text-[#53443D] mt-1">
              {PERSONAL_INFO.title}
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#665E57] mt-3">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#8A4F33]" />
                {PERSONAL_INFO.email}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#8A4F33]" />
                {PERSONAL_INFO.phone}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#8A4F33]" />
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-semibold text-[#8A4F33] uppercase tracking-wider mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#53443D] leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-semibold text-[#8A4F33] uppercase tracking-wider mb-3">
              Education & Academic Merits
            </h2>
            <div className="space-y-4">
              {EDUCATION_HISTORY.map((edu, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex justify-between items-baseline font-medium text-[#2C2825]">
                    <span className="font-semibold text-sm">{edu.institution}</span>
                    <span className="text-[#665E57] font-mono">{edu.period}</span>
                  </div>
                  <div className="flex justify-between text-[#53443D] mt-0.5">
                    <span>{edu.degree}</span>
                    <span className="font-semibold font-mono text-[#8A4F33]">{edu.score}</span>
                  </div>
                  {edu.achievements && (
                    <ul className="list-disc list-inside text-[#665E57] mt-1 space-y-0.5">
                      {edu.achievements.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Projects */}
          <div>
            <h2 className="text-xs font-semibold text-[#8A4F33] uppercase tracking-wider mb-3">
              Engineered Projects & Deployments
            </h2>
            <div className="space-y-5">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-sm text-[#2C2825]">
                      {proj.title} — {proj.subtitle}
                    </span>
                    <span className="font-mono text-[#665E57]">{proj.year}</span>
                  </div>
                  <p className="text-[#53443D] mt-1 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="text-[11px] text-[#665E57] mt-1.5">
                    <strong className="text-[#2C2825]">Stack:</strong> {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h2 className="text-xs font-semibold text-[#8A4F33] uppercase tracking-wider mb-3">
              Technical Skill Inventory
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#FBF9F5] rounded border border-[#E7E0D8]">
                <strong className="text-[#2C2825] block mb-1">Languages:</strong>
                <span className="text-[#53443D]">Python, Java, C Programming, JavaScript</span>
              </div>
              <div className="p-3 bg-[#FBF9F5] rounded border border-[#E7E0D8]">
                <strong className="text-[#2C2825] block mb-1">Frontend & Frameworks:</strong>
                <span className="text-[#53443D]">React JS, Vite, HTML5, CSS3, Tailwind CSS</span>
              </div>
              <div className="p-3 bg-[#FBF9F5] rounded border border-[#E7E0D8]">
                <strong className="text-[#2C2825] block mb-1">Databases & Storage:</strong>
                <span className="text-[#53443D]">SQL, MySQL 8.0, PostgreSQL (Supabase), DynamoDB</span>
              </div>
              <div className="p-3 bg-[#FBF9F5] rounded border border-[#E7E0D8]">
                <strong className="text-[#2C2825] block mb-1">Cloud & Development:</strong>
                <span className="text-[#53443D]">AWS Bedrock, Amazon API Gateway, Git, GitHub</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-semibold text-[#8A4F33] uppercase tracking-wider mb-2">
              Certifications & Recognitions
            </h2>
            <div className="space-y-2 text-xs">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="flex justify-between items-baseline">
                  <div>
                    <span className="font-semibold text-[#2C2825]">{cert.name}</span>
                    <span className="text-[#665E57]"> · {cert.issuer}</span>
                    <p className="text-[11px] text-[#53443D] mt-0.5">{cert.verificationNote}</p>
                  </div>
                  <span className="font-mono text-[#665E57]">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
