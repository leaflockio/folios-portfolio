// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  plugins: [],
  theme: {
    extend: {
      colors: {
        accent: 'var(--color-accent)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
    },
  },
};
