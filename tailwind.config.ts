import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
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
