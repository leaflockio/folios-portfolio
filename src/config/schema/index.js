// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import { z } from 'zod';

import { loggerSchema } from './logger';
import { themeSchema } from './theme';

export const configSchema = z.object({
  logger: loggerSchema,
  theme: themeSchema,
});
