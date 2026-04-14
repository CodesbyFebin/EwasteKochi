import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { Sun, Moon, Monitor, Globe, Volume2, Type, Contrast, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function HeaderActions() {
  const { i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const { increaseFont, decreaseFont, toggleHighContrast, toggleVoice, voiceEnabled, highContrast } = useAccessibility();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [accessMenuOpen, setAccessMenuOpen] = useState(false);
  
  const langRef = useRef<HTMLDivElement>(null);
  const accessRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
      if (accessRef.current && !accessRef.current.contains(event.target as Node)) {
        setAccessMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ml', name: 'മലയാളം' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'hi', name: 'हिन्दी' },
  ];

  return (
    <div className="flex items-center gap-2">
      {/* Language Switcher */}
      <div className="relative" ref={langRef}>
        <button
          onClick={() => setLangMenuOpen(!langMenuOpen)}
          className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          aria-label="Change language"
        >
          <Globe className="w-5 h-5" />
        </button>
        <AnimatePresence>
          {langMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-800 p-2 z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`flex items-center justify-between w-full px-4 py-2 text-sm rounded-lg transition-colors ${
                    i18n.language === lang.code 
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 font-bold' 
                      : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  {lang.name}
                  {i18n.language === lang.code && <Check className="w-4 h-4" />}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Theme Switcher */}
      <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-full p-1">
        <button
          onClick={() => setTheme('light')}
          className={`p-1.5 rounded-full transition-all ${theme === 'light' ? 'bg-white dark:bg-zinc-600 shadow-sm' : 'hover:bg-zinc-200 dark:hover:bg-zinc-700'}`}
          title="Light Mode"
        >
          <Sun className="w-4 h-4" />
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`p-1.5 rounded-full transition-all ${theme === 'dark' ? 'bg-white dark:bg-zinc-600 shadow-sm' : 'hover:bg-zinc-200 dark:hover:bg-zinc-700'}`}
          title="Dark Mode"
        >
          <Moon className="w-4 h-4" />
        </button>
        <button
          onClick={() => setTheme('system')}
          className={`p-1.5 rounded-full transition-all ${theme === 'system' ? 'bg-white dark:bg-zinc-600 shadow-sm' : 'hover:bg-zinc-200 dark:hover:bg-zinc-700'}`}
          title="System Default"
        >
          <Monitor className="w-4 h-4" />
        </button>
      </div>

      {/* Accessibility Menu */}
      <div className="relative" ref={accessRef}>
        <button
          onClick={() => setAccessMenuOpen(!accessMenuOpen)}
          className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          aria-label="Accessibility options"
        >
          <Type className="w-5 h-5" />
        </button>
        <AnimatePresence>
          {accessMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 mt-2 w-64 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-800 p-4 z-50 space-y-4"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Font Size</span>
                <div className="flex items-center justify-between bg-zinc-100 dark:bg-zinc-800 rounded-lg p-1">
                  <button onClick={decreaseFont} className="flex-1 py-1 hover:bg-white dark:hover:bg-zinc-700 rounded transition-colors font-bold">A-</button>
                  <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700" />
                  <button onClick={increaseFont} className="flex-1 py-1 hover:bg-white dark:hover:bg-zinc-700 rounded transition-colors font-bold">A+</button>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Visuals</span>
                <button 
                  onClick={toggleHighContrast} 
                  className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors ${
                    highContrast 
                      ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 font-bold' 
                      : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Contrast className="w-4 h-4" /> High Contrast
                  </div>
                  {highContrast && <Check className="w-4 h-4" />}
                </button>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Interaction</span>
                <button 
                  onClick={toggleVoice} 
                  className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors ${
                    voiceEnabled 
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-bold' 
                      : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4" /> Voice Input
                  </div>
                  {voiceEnabled && <Check className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
