import React from 'react';
import { Sparkles, Volume2, VolumeX } from 'lucide-react';

interface ExcuseButtonProps {
  onGenerate: () => void;
  isSpeechEnabled: boolean;
  onToggleSpeech: () => void;
}

export function ExcuseButton({ onGenerate }: ExcuseButtonProps) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <button
        onClick={onGenerate}
        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-xl font-medium shadow-lg hover:bg-white/20 transition-all duration-200 hover:shadow-xl hover:scale-105 backdrop-blur-sm"
      >
        <Sparkles className="w-5 h-5" />
        <span>Generar Excusa</span>
        <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </button>
    </div>
  );
}
