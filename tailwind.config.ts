import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.json',
  ],
  darkMode: 'class',
  theme: {
    screens: { xs: '320px', sm: '480px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1440px' },
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', md: '2rem', lg: '2.5rem', xl: '3rem' },
      screens: { sm: '480px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1320px' },
    },
    extend: {
      colors: {
        primary: {
          25: '#FFFAF5', 50: '#FFF4E8', 100: '#FFE5C8', 200: '#FFCB91', 300: '#FFA94D',
          400: '#FF8C1A', 500: '#F97316', 600: '#E05E00', 700: '#B84A00', 800: '#8C3700',
          900: '#5C2400', 950: '#3D1800', DEFAULT: '#F97316',
        },
        secondary: {
          25: '#F4FDF7', 50: '#E8FAF0', 100: '#CCF2DC', 200: '#99E4B9', 300: '#4DCC8A',
          400: '#1AB56A', 500: '#059950', 600: '#047A3F', 700: '#035C30', 800: '#024022',
          900: '#012918', DEFAULT: '#059950',
        },
        gold: {
          100: '#FEF7DC', 200: '#FDE99A', 300: '#FCD858', 400: '#F5C518', 500: '#D4A017',
          600: '#A87C10', 700: '#7C5A0A', DEFAULT: '#F5C518',
        },
        neutral: {
          0: '#FFFFFF', 25: '#FDFCFB', 50: '#F8F5F2', 100: '#F0EBE4', 200: '#DED5CA',
          300: '#C4B8AA', 400: '#A0907F', 500: '#7C6A58', 600: '#5A4A3A', 700: '#3D3128',
          800: '#261E16', 900: '#130E09', 950: '#0A0705', DEFAULT: '#5A4A3A',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        'brand-sm': '0 2px 8px 0 rgb(249 115 22 / 0.20)',
        'brand-md': '0 4px 16px 0 rgb(249 115 22 / 0.28)',
        'brand-lg': '0 8px 32px 0 rgb(249 115 22 / 0.32)',
        'brand-xl': '0 16px 48px 0 rgb(249 115 22 / 0.36)',
        'gold-sm': '0 2px 8px 0 rgb(245 197 24 / 0.24)',
        'gold-md': '0 4px 16px 0 rgb(245 197 24 / 0.32)',
        'success-sm': '0 2px 8px 0 rgb(5 153 80 / 0.20)',
        'success-md': '0 4px 16px 0 rgb(5 153 80 / 0.28)',
        'warm-lg': '0 16px 40px -8px rgb(139 94 46 / 0.16)',
        'focus-brand': '0 0 0 3px rgb(249 115 22 / 0.35)',
      },
      keyframes: {
        'pulse-brand': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgb(249 115 22 / 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgb(249 115 22 / 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'pulse-brand': 'pulse-brand 2.4s ease-in-out infinite',
        shimmer: 'shimmer 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
