import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      'textContainer': '775px',
    },
    colors: {
      'grey': '#F3F3F3',
      'light-grey': '#E9E9E9',
      'light-blue': '#2AB2D7',
      'dark-grey': '#7C7C7C',
      'black': '#000',
      'inherit': 'inherit',
    },
    borderRadius: {
      'none': '0',
      DEFAULT: '3px',
      'large': '10px',
    },
    fontSize: {
      xm: ['.75rem', {
        lineHeight: '.875rem',
      }],
      sm: ['.875rem', {
        lineHeight: '1rem',
      }],
      base: ['1rem', {
        lineHeight: '1.125rem',
      }],
      lg: ['1.125rem', {
        lineHeight: '1.2',
      }],
      xl: ['1.25rem', {
        lineHeight: '1.2',
      }],
      '2xl': ['1.5rem', {
        lineHeight: '1.2',
      }],
      '3xl': ['2rem', {
        lineHeight: '1.2',
      }],
      '4xl': ['2.25rem', {
        lineHeight: '1.2',
      }],
      '5xl': ['2.5rem', {
        lineHeight: '1.2',
      }],
      '6xl': ['3rem', {
        lineHeight: '1.2',
      }],
    },
    screens: {
      '2xl': {'max': '2000px'},
      'xl': {'max': '1600px'},
      'lg': {'max': '1200px'},
      'md': {'max': '991px'},
      'sm': {'max': '576px'},
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      padding: {
        '5': '5px',
      },
      
      spacing: {
        2: "2px",
        4: "4px",
        8: "8px",
        12: "12px",
        16: "16px",
        20: "20px",
        24: "24px",
        32: "32px",
        48: "48px",
        64: "64px",
        96: "96px",
        128: "128px",
        192: "192px",
        256: "256px",
        '2px': "2px",
        '4px': "4px",
        '8px': "8px",
        '12px': "12px",
        '16px': "16px",
        '20px': "20px",
        '24px': "24px",
        '32px': "32px",
        '48px': "48px",
        '64px': "64px",
        '96px': "96px",
        '128px': "128px",
        '192px': "192px",
        '256px': "256px",
      },
    },
  },
  plugins: [],
} satisfies Config;
