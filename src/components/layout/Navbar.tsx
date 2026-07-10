import React, { useState } from 'react';
import { Menu, X, Clock, ArrowRight } from 'lucide-react';
import { useLondonTime } from '../../hooks/useLondonTime';
import { HoverButton } from '../ui/HoverButton';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const londonTime = useLondonTime();

  const navLinks = ['Projects', 'Studio', 'Journal', 'Connect'];

  return (
    <>
      {/* Navbar Container 
        z-20 and relative to sit securely above the Hero shader background
      */}
      <header className="relative z-20 mx-auto max-w-[1440px] p-2 sm:p-3 w-full">
        <nav className="bg-white rounded-full p-[5px] flex items-center justify-between shadow-sm">
          
          {/* LEFT SECTION: Logo and Desktop Nav */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <a 
              href="/" 
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full shrink-0"
              aria-label="Axion Studio Home"
            >
              <span className="text-white text-[10px] sm:text-[11px] font-bold tracking-tight leading-none">
                AX
              </span>
            </a>

            {/* Desktop Links (Hidden on mobile) */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300 font-medium"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION: Status, Time, and CTA (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 pr-2">
              <span className="text-[13px] text-gray-600 hidden lg:block">
                Taking on projects for Q1 2026
              </span>
              <div className="flex items-center gap-1.5 text-gray-600">
                <Clock size={14} />
                <span className="text-[13px]">{londonTime} in London</span>
              </div>
            </div>
            
            <HoverButton 
              text="Book a strategy call"
              className="bg-gray-900 text-white pl-5 pr-2 py-2 text-[13px] font-medium"
              iconContainerClass="w-6 h-6 bg-white text-gray-900"
              iconClass="w-3.5 h-3.5"
            />
          </div>

          {/* MOBILE TOGGLE (Hidden on md+) */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden flex items-center justify-center w-9 h-9 bg-gray-900 text-white rounded-full shrink-0"
            aria-label="Open menu"
          >
            <Menu size={16} strokeWidth={2.5} />
          </button>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60" 
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Bottom Sheet */}
        <div 
          className={`absolute bottom-0 inset-x-0 mx-3 mb-3 bg-white rounded-2xl p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col ${
            isMenuOpen ? 'translate-y-0' : 'translate-y-[calc(100%+12px)]'
          }`}
        >
          {/* Sheet Header: Close Button and Time */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-1.5 text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
              <Clock size={14} />
              <span className="text-[13px] font-medium">{londonTime} LON</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-9 h-9 bg-gray-100 text-gray-900 rounded-full"
              aria-label="Close menu"
            >
              <X size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Large Mobile Links */}
          <div className="flex flex-col gap-4 mb-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-[28px] leading-[32px] font-medium text-gray-900"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          <button className="flex items-center justify-between w-full bg-[#F26522] text-white rounded-full pl-6 pr-2 py-2 text-[15px] font-medium">
            <span>Start a project</span>
            <div className="flex items-center justify-center w-9 h-9 bg-white text-[#F26522] rounded-full">
              <ArrowRight size={18} strokeWidth={2.5} className="-rotate-45" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
