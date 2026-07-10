import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HoverButtonProps {
  text: string;
  className?: string;          // Classes for the main button container
  iconContainerClass?: string; // Classes for the circle containing the arrow
  iconClass?: string;          // Classes for the arrow SVG itself
  onClick?: () => void;
}

export function HoverButton({
  text,
  className = '',
  iconContainerClass = '',
  iconClass = '',
  onClick,
}: HoverButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center rounded-full transition-colors duration-300 ${className}`}
    >
      {/* Text Roll Animation Container
        Height is fixed to exactly contain one line of text. 
        On group-hover, the inner div translates up by 50% (revealing the second text span).
      */}
      <div className="relative flex flex-col overflow-hidden h-[18px] mr-3">
        <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span className="h-[18px] flex items-center leading-none whitespace-nowrap">
            {text}
          </span>
          <span className="h-[18px] flex items-center leading-none whitespace-nowrap">
            {text}
          </span>
        </div>
      </div>

      {/* Arrow Circle Container 
        Rotates -45 degrees on hover using the exact same bezier curve.
      */}
      <div
        className={`flex items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 ${iconContainerClass}`}
      >
        <ArrowRight className={iconClass} strokeWidth={2} />
      </div>
    </button>
  );
}
