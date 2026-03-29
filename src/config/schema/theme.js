// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import { z } from 'zod';

// Enum of supported themes
const themeModeEnum = z.enum(['light', 'dark', 'colorful', 'verdant', 'system']);

// Main schema export
export const themeSchema = z.object({
  availableThemes: z.array(themeModeEnum).nonempty(),
  defaultMode: themeModeEnum,
});
