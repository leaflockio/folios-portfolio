// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import { createContext } from 'react';

import { config } from '@/config/validate';

/**
 * Theme context provides `theme` and `setTheme` for global access.
 * Default: theme = 'light', setTheme = no-op
 */
export const ThemeContext = createContext({
  setTheme: () => {},
  theme: config.theme.defaultMode,
});
