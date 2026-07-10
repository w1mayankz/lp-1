import React from 'react';
// 1. ADD 'Shader' TO THIS IMPORT
import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react';
import { Navbar } from '../layout/Navbar';
import { HoverButton } from '../ui/HoverButton';
import { PartnerBadge } from '../ui/PartnerBadge';

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col bg-[#EFEFEF] overflow-hidden">
      
      {/* BACKGROUND SHADER STACK (z-10, absolute) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Swirl 
          colorA="#ffffff" 
          colorB="#f0f0f0" 
          detail={1.7} 
        />
        <ChromaFlow 
          baseColor="#ffffff" 
          downColor="#ff5f03" 
          leftColor="#ff5f03" 
          rightColor="#ff5f03" 
          upColor="#ff5f03" 
          momentum={13} 
          radius={3.5} 
        />
        <FlutedGlass 
          aberration={0.61} 
          angle={31} 
          frequency={8} 
          highlight={0.12} 
          highlightSoftness={0} 
          lightAngle={-90} 
          refraction={4} 
          shape="rounded" 
          softness={1} 
          speed={0.15} 
        />
        <FilmGrain 
          strength={0.05} 
        />
      </div>

      {/* TOP NAVIGATION (z-20) */}
      <Navbar />

      {/* SPACER to push content to the bottom */}
      <div className="flex-1" />

      {/* HERO CONTENT (z-20) */}
      <main className="relative z-20 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
        
        {/* Small Label */}
        <div className="text-[13px] sm:text-[14px] text-gray-900 tracking-wide mb-5 sm:mb-8">
          Axion Studio
        </div>

        {/* Headline with fluid clamp typography and responsive line breaks */}
        <h1 className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)]">
          We craft digital experiences<span className="sm:hidden"> </span><br className="hidden sm:block" />
          for brands ready to dominate<span className="sm:hidden"> </span><br className="hidden sm:block" />
          their category online.
        </h1>

        {/* CTA Row */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center">
          <HoverButton 
            text="Start a project"
            className="bg-[#F26522] hover:bg-[#e05a1a] text-white text-[13px] sm:text-[14px] pl-5 sm:pl-6 pr-2 py-2"
            iconContainerClass="bg-white text-[#F26522] w-7 h-7 sm:w-8 sm:h-8"
            iconClass="w-4 h-4 sm:w-5 sm:h-5"
          />
          <PartnerBadge />
        </div>
        
      </main>
    </section>
  );
}
