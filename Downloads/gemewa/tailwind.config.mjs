import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode via class (toggle with localStorage)
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Keep your earthy forest/cream palette but add semantic aliases
        forest: {
          DEFAULT: '#0D3B23',
          light: '#1A5C32',
          50: '#F0F7F2',
          100: '#E1EFE5',
          200: '#C3DFCB',
          300: '#A5CFB1',
          400: '#87BF97',
          500: '#4A9A69',
          600: '#2D7A47',
          700: '#1A5C32',
          800: '#0D3B23',
          900: '#092A17',
        },
        moss: '#2D7A47',
        sage: '#4A9A69',
        cream: {
          DEFAULT: '#FDFBF7',
          dark: '#F5F1E8',
        },
        parchment: '#EDE8DC',
        clay: '#8B7355',
        rust: '#C45C26',
        gold: {
          DEFAULT: '#B8860B',
          light: '#D4A84B',
        },
        // SEO & Accessibility semantic colors
        primary: '#2D7A47',     // your moss / forest-600
        secondary: '#4A9A69',   // sage
        accent: '#B8860B',      // gold
      },
      fontFamily: {
        display: ['DM Serif Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        // System fallback for performance (no external font loading delay)
        'fallback': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Fluid typography for better readability (CLS prevention)
        'fluid-sm': 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)',
        'fluid-base': 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
        'fluid-md': 'clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)',
        'fluid-lg': 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)',
        'fluid-xl': 'clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)',
        'fluid-2xl': 'clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        'prose-wide': '75ch',
      },
      lineHeight: {
        'tight': 1.2,
        'snug': 1.35,
        'normal': 1.5,
        'relaxed': 1.625,
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        // For skeleton loading (better perceived performance)
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        slideInLeft: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      screens: {
        'xs': '480px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [
    containerQueries,
    typography,
    animate,
    function({ addUtilities }) {
      // Custom utilities for accessibility & SEO
      addUtilities({
        '.focus-ring': {
          outline: '2px solid var(--primary)',
          outlineOffset: '2px',
          borderRadius: '0.25rem',
        },
        '.text-balance': {
          textWrap: 'balance',
        },
        '.scroll-mt-header': {
          scrollMarginTop: '80px', // offset for fixed header
        },
        '.contain-layout': {
          contain: 'layout paint',
        },
        '.content-visibility-auto': {
          contentVisibility: 'auto',
          containIntrinsicSize: 'auto 500px',
        },
      });
    },
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  experimental: {
    optimizeUniversalDefaults: true, // reduces CSS size (Tailwind v3+)
  },
};