import React, { useState } from 'react';
import { useAccessibility } from '@/contexts/AccessibilityContext';

export default function AccessibilityWidget() {
  const { 
    increaseFont, 
    decreaseFont, 
    resetFont, 
    toggleHighContrast, 
    highContrast, 
    toggleReduceMotion, 
    reduceMotion, 
    toggleVoice, 
    voiceEnabled 
  } = useAccessibility();
  
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-24 left-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="bg-zinc-900 border border-zinc-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Accessibility options"
        aria-expanded={open}
      >
        <span className="text-2xl group-hover:animate-pulse">♿</span>
      </button>
      
      {open && (
        <div className="absolute bottom-16 left-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl p-4 w-72 space-y-3 animate-in fade-in slide-in-from-bottom-5">
          <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-3 mb-2">Display Controls</div>
          
          <div className="grid grid-cols-3 gap-2 px-1">
            <button onClick={decreaseFont} className="flex flex-col items-center gap-1 p-2 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-xl transition-colors text-xs font-bold">
              <span>➖</span> Font
            </button>
            <button onClick={resetFont} className="flex flex-col items-center gap-1 p-2 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-xl transition-colors text-xs font-bold">
              <span>↺</span> Reset
            </button>
            <button onClick={increaseFont} className="flex flex-col items-center gap-1 p-2 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-xl transition-colors text-xs font-bold">
              <span>➕</span> Font
            </button>
          </div>

          <div className="h-px bg-zinc-100 dark:bg-zinc-800 my-2" />

          <button 
            onClick={toggleHighContrast} 
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${highContrast ? 'bg-green-600 text-white shadow-lg shadow-green-200' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:text-zinc-300'}`}
          >
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold">🎨 High Contrast</span>
            </div>
            <div className={`w-8 h-4 rounded-full relative transition-colors ${highContrast ? 'bg-white/30' : 'bg-zinc-200 dark:bg-zinc-700'}`}>
              <div className={`absolute top-1 w-2 h-2 rounded-full transition-all ${highContrast ? 'right-1 bg-white' : 'left-1 bg-zinc-400'}`} />
            </div>
          </button>

          <button 
            onClick={toggleReduceMotion} 
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${reduceMotion ? 'bg-green-600 text-white shadow-lg shadow-green-200' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:text-zinc-300'}`}
          >
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold">🎬 Reduced Motion</span>
            </div>
            <div className={`w-8 h-4 rounded-full relative transition-colors ${reduceMotion ? 'bg-white/30' : 'bg-zinc-200 dark:bg-zinc-700'}`}>
              <div className={`absolute top-1 w-2 h-2 rounded-full transition-all ${reduceMotion ? 'right-1 bg-white' : 'left-1 bg-zinc-400'}`} />
            </div>
          </button>

          <button 
            onClick={toggleVoice} 
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${voiceEnabled ? 'bg-green-600 text-white shadow-lg shadow-green-200' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:text-zinc-300'}`}
          >
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold">🎤 Voice Assistant</span>
            </div>
            <div className={`w-8 h-4 rounded-full relative transition-colors ${voiceEnabled ? 'bg-white/30' : 'bg-zinc-200 dark:bg-zinc-700'}`}>
              <div className={`absolute top-1 w-2 h-2 rounded-full transition-all ${voiceEnabled ? 'right-1 bg-white' : 'left-1 bg-zinc-400'}`} />
            </div>
          </button>

          <div className="pt-2">
            <p className="text-[10px] text-zinc-400 text-center px-4 leading-tight">These settings help us make E-Waste Kochi more accessible for everyone.</p>
          </div>
        </div>
      )}
    </div>
  );
}
