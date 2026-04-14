// src/contexts/AccessibilityContext.tsx
import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

interface AccessibilityState {
  fontSize: number;        // percentage (100 = default)
  highContrast: boolean;
  reduceMotion: boolean;
  voiceEnabled: boolean;
  screenReaderOptimized: boolean;
}

interface AccessibilityContextType extends AccessibilityState {
  increaseFont: () => void;
  decreaseFont: () => void;
  resetFont: () => void;
  toggleHighContrast: () => void;
  toggleReduceMotion: () => void;
  toggleVoice: () => void;
  toggleScreenReaderOptimization: () => void;
  speak: (text: string) => void;
  stopSpeaking: () => void;
  startVoiceRecognition: (onResult: (transcript: string) => void) => void;
  isSpeechSupported: boolean;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

const loadInitialState = (): AccessibilityState => {
  if (typeof window === 'undefined') {
    return {
      fontSize: 100,
      highContrast: false,
      reduceMotion: false,
      voiceEnabled: false,
      screenReaderOptimized: false,
    };
  }
  return {
    fontSize: parseInt(localStorage.getItem('a11y_fontSize') || '100', 10),
    highContrast: localStorage.getItem('a11y_highContrast') === 'true',
    reduceMotion: localStorage.getItem('a11y_reduceMotion') === 'true',
    voiceEnabled: localStorage.getItem('a11y_voice') === 'true',
    screenReaderOptimized: localStorage.getItem('a11y_screenReader') === 'true',
  };
};

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AccessibilityState>(loadInitialState);
  const speechSynthRef = useRef<SpeechSynthesis | null>(null);
  const [isSpeechSupported, setIsSpeechSupported] = useState(false);

  // Initialize speech synthesis
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      speechSynthRef.current = window.speechSynthesis;
      setIsSpeechSupported(true);
    }
  }, []);

  // Apply all accessibility settings to the DOM
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const root = document.documentElement;

    // Font scaling
    root.style.fontSize = `${state.fontSize}%`;

    // High contrast mode
    if (state.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion
    if (state.reduceMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }

    // Screen reader live region
    if (state.screenReaderOptimized && !document.getElementById('a11y-live-region')) {
      const liveRegion = document.createElement('div');
      liveRegion.id = 'a11y-live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.style.position = 'absolute';
      liveRegion.style.width = '1px';
      liveRegion.style.height = '1px';
      liveRegion.style.padding = '0';
      liveRegion.style.margin = '-1px';
      liveRegion.style.overflow = 'hidden';
      liveRegion.style.clip = 'rect(0, 0, 0, 0)';
      liveRegion.style.border = '0';
      document.body.appendChild(liveRegion);
    } else if (!state.screenReaderOptimized) {
      const region = document.getElementById('a11y-live-region');
      if (region) region.remove();
    }

    // Persist to localStorage
    localStorage.setItem('a11y_fontSize', state.fontSize.toString());
    localStorage.setItem('a11y_highContrast', state.highContrast.toString());
    localStorage.setItem('a11y_reduceMotion', state.reduceMotion.toString());
    localStorage.setItem('a11y_voice', state.voiceEnabled.toString());
    localStorage.setItem('a11y_screenReader', state.screenReaderOptimized.toString());
  }, [state]);

  // Font controls
  const increaseFont = useCallback(() => {
    setState(prev => ({ ...prev, fontSize: Math.min(prev.fontSize + 20, 200) }));
  }, []);
  const decreaseFont = useCallback(() => {
    setState(prev => ({ ...prev, fontSize: Math.max(prev.fontSize - 20, 70) }));
  }, []);
  const resetFont = useCallback(() => {
    setState(prev => ({ ...prev, fontSize: 100 }));
  }, []);

  // Toggles
  const toggleHighContrast = useCallback(() => {
    setState(prev => ({ ...prev, highContrast: !prev.highContrast }));
  }, []);
  const toggleReduceMotion = useCallback(() => {
    setState(prev => ({ ...prev, reduceMotion: !prev.reduceMotion }));
  }, []);
  const toggleScreenReaderOptimization = useCallback(() => {
    setState(prev => ({ ...prev, screenReaderOptimized: !prev.screenReaderOptimized }));
  }, []);
  const toggleVoice = useCallback(() => {
    setState(prev => ({ ...prev, voiceEnabled: !prev.voiceEnabled }));
  }, []);

  // Text‑to‑speech
  const speak = useCallback((text: string) => {
    if (!state.voiceEnabled || !speechSynthRef.current) return;
    speechSynthRef.current.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-IN';
    utterance.rate = 0.9;
    speechSynthRef.current.speak(utterance);
  }, [state.voiceEnabled]);

  const stopSpeaking = useCallback(() => {
    if (speechSynthRef.current) speechSynthRef.current.cancel();
  }, []);

  // Voice recognition (returns transcript via callback – perfect for chat bot)
  const startVoiceRecognition = useCallback((onResult: (transcript: string) => void) => {
    if (!state.voiceEnabled) return;
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn('Voice recognition not supported');
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-IN';
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
    };
    recognition.start();
  }, [state.voiceEnabled]);

  // Announce changes to screen readers
  useEffect(() => {
    if (state.screenReaderOptimized) {
      const liveRegion = document.getElementById('a11y-live-region');
      if (liveRegion) {
        let message = '';
        if (state.highContrast) message += 'High contrast mode enabled. ';
        if (state.reduceMotion) message += 'Reduced motion enabled. ';
        if (state.fontSize !== 100) message += `Font size set to ${state.fontSize} percent. `;
        if (message) liveRegion.textContent = message;
      }
    }
  }, [state.highContrast, state.reduceMotion, state.fontSize, state.screenReaderOptimized]);

  const value: AccessibilityContextType = {
    ...state,
    increaseFont,
    decreaseFont,
    resetFont,
    toggleHighContrast,
    toggleReduceMotion,
    toggleVoice,
    toggleScreenReaderOptimization,
    speak,
    stopSpeaking,
    startVoiceRecognition,
    isSpeechSupported,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error('useAccessibility must be used within AccessibilityProvider');
  return ctx;
};
