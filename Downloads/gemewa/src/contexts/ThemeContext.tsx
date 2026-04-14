// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
  isHighContrast?: boolean; // optional, from accessibility context
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Helper to get system preference
const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'system';
    const stored = localStorage.getItem('theme') as Theme | null;
    return stored && ['light', 'dark', 'system'].includes(stored) ? stored : 'system';
  });

  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  // Update resolved theme when theme or system preference changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateResolvedTheme = () => {
      if (theme === 'system') {
        setResolvedTheme(getSystemTheme());
      } else {
        setResolvedTheme(theme as 'light' | 'dark');
      }
    };

    updateResolvedTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        setResolvedTheme(mediaQuery.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Apply theme class to document root
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Store preference
    localStorage.setItem('theme', theme);

    // Apply class for dark mode (light mode is default)
    if (resolvedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Add smooth transition for theme changes
    document.documentElement.style.setProperty('--theme-transition', 'background-color 0.3s ease, color 0.2s ease');
  }, [theme, resolvedTheme]);

  const handleSetTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};

// ============================================
// Theme Toggle Component (ready to use)
// ============================================
export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className={`flex items-center gap-1 p-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-inner ${className}`}>
      <button
        onClick={() => setTheme('light')}
        className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 ${theme === 'light' ? 'bg-white shadow-md dark:bg-zinc-700 text-yellow-500' : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200'}`}
        aria-label="Light mode"
        title="Light mode"
      >
        <span className="text-sm">☀️</span>
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-white shadow-md dark:bg-zinc-700 text-blue-400' : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200'}`}
        aria-label="Dark mode"
        title="Dark mode"
      >
        <span className="text-sm">🌙</span>
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 ${theme === 'system' ? 'bg-white shadow-md dark:bg-zinc-700 text-green-500' : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200'}`}
        aria-label="System preference"
        title="Use system theme"
      >
        <span className="text-sm">💻</span>
      </button>
    </div>
  );
};
