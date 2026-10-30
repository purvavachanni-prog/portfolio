import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#E7E0D8] py-3.5 shadow-sm'
          : 'bg-[#FBF9F5]/70 backdrop-blur-xs border-b border-[#E7E0D8]/60 py-5'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-[#2C2825] hover:text-[#C88363] transition-colors whitespace-nowrap shrink-0"
        >
          {PERSONAL_INFO.name}
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#665E57]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#2C2825] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1.5px] after:bg-[#C88363] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200 whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="text-xs font-medium text-[#665E57] hover:text-[#2C2825] px-3 py-2 rounded-md hover:bg-[#F4F0EA] transition-colors whitespace-nowrap shrink-0"
          >
            Resume Overview
          </button>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#FBF9F5] bg-[#2C2825] rounded-lg hover:bg-[#C88363] transition-colors duration-200 whitespace-nowrap shrink-0 shadow-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#2C2825] hover:bg-[#F4F0EA] rounded-md transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF9F5] border-b border-[#E7E0D8] px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#2C2825] hover:text-[#C88363] py-2 border-b border-[#E7E0D8]/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full text-center py-2.5 text-xs font-semibold text-[#2C2825] bg-[#F4F0EA] border border-[#E7E0D8] rounded-md hover:border-[#C88363]"
              >
                View Resume Monograph
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full text-center py-2.5 text-xs font-semibold text-[#FBF9F5] bg-[#2C2825] rounded-md hover:bg-[#C88363] transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
