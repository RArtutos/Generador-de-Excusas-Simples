import React from 'react';

interface ExcuseDisplayProps {
  excuse: string;
  isAnimating: boolean;
}

export function ExcuseDisplay({ excuse, isAnimating }: ExcuseDisplayProps) {
  return (
    <div className="min-h-[120px] flex items-center justify-center px-4">
      {excuse && (
        <div
          className={`glass-morphism p-8 rounded-2xl shadow-2xl transition-all duration-500 ${
            isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}
        >
          <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed">
            {excuse}
          </p>
        </div>
      )}
    </div>
  );
}