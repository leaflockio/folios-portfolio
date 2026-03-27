// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import { z } from 'zod';

export const loggerSchema = z.object({
  level: z.object({
    development: z.enum(['trace', 'debug', 'info', 'warn', 'error', 'silent']),
    production: z.enum(['trace', 'debug', 'info', 'warn', 'error', 'silent']),
  }),
  tag: z.string().min(1, 'Logger tag must not be empty'),
});
