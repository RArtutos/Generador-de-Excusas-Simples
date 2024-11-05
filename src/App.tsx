import React, { useState, useCallback, useEffect } from 'react';
import { ExcuseButton } from './components/ExcuseButton';
import { ExcuseDisplay } from './components/ExcuseDisplay';
import { generateExcuse } from './data/excuses';

function App() {
  const [excuse, setExcuse] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(false);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        const voices = window.speechSynthesis.getVoices();
        const spanishMaleVoice = voices.find(voice => 
          voice.lang.startsWith('es') && 
          (voice.name.toLowerCase().includes('male') || voice.name.toLowerCase().includes('hombre'))
        );
        const spanishVoice = spanishMaleVoice || voices.find(voice => voice.lang.startsWith('es'));
        if (spanishVoice) {
          window.spanishVoice = spanishVoice;
        }
      };
    }
  }, []);

  const generateNewExcuse = useCallback(() => {
    setIsAnimating(true);
    const newExcuse = generateExcuse();
    setExcuse(newExcuse);

    if (isSpeechEnabled && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(newExcuse);
      utterance.lang = 'es-ES';
      if (window.spanishVoice) {
        utterance.voice = window.spanishVoice;
      }
      utterance.rate = 0.9;
      utterance.pitch = 1;
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    }

    setTimeout(() => setIsAnimating(false), 500);
  }, [isSpeechEnabled]);

  const toggleSpeech = () => {
    setIsSpeechEnabled(!isSpeechEnabled);
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto text-center space-y-12">
        <h1 className="text-4xl font-bold text-white mb-8">
          Excusas Simples
        </h1>
        <ExcuseButton
          onGenerate={generateNewExcuse}
          isSpeechEnabled={isSpeechEnabled}
          onToggleSpeech={toggleSpeech}
        />
        <ExcuseDisplay excuse={excuse} isAnimating={isAnimating} />
      </div>
    </div>
  );
}

export default App;