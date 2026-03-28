// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import { ThemeProvider } from '@/theme/ThemeProvider';

import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
