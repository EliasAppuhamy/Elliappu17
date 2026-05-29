import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        linkedin: {
          blue: '#0a66c2',
          'blue-hover': '#004182',
          bg: '#f3f2ef',
          border: 'rgba(0,0,0,0.08)',
        },
        ambitly: {
          purple: '#6C47FF',
          'purple-dark': '#4D28E0',
          'purple-light': '#EEE9FF',
          gradient: {
            from: '#667EEA',
            to: '#764BA2',
          },
        },
      },
      boxShadow: {
        card: '0 0 0 1px rgba(0,0,0,0.08), 0 4px 6px -1px rgba(0,0,0,0.04)',
        'card-hover': '0 0 0 1px rgba(0,0,0,0.12), 0 8px 12px -2px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
