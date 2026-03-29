// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import { z } from 'zod';

/**
 * Checks if a hostname is an internal/private network address.
 * Blocks SSRF attacks targeting internal services.
 *
 * @param {string} hostname - The hostname to check
 * @returns {boolean} True if internal/private, false if safe
 */
function isInternalHost(hostname) {
  const lower = hostname.toLowerCase();

  // Localhost variants
  if (lower === 'localhost' || lower === '127.0.0.1' || lower === '::1') {
    return true;
  }

  // Cloud metadata endpoints (AWS, GCP, Azure)
  if (lower === '169.254.169.254' || lower === 'metadata.google.internal') {
    return true;
  }

  // Private IP ranges (RFC 1918)
  // 10.0.0.0 - 10.255.255.255
  if (/^10\./.test(lower)) {
    return true;
  }

  // 172.16.0.0 - 172.31.255.255
  if (/^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(lower)) {
    return true;
  }

  // 192.168.0.0 - 192.168.255.255
  if (/^192\.168\./.test(lower)) {
    return true;
  }

  // Link-local addresses
  if (/^169\.254\./.test(lower)) {
    return true;
  }

  return false;
}

const profilePathSchema = z
  .string()
  .min(1, 'FP_PROFILE_PATH is required')
  .refine(
    val =>
      (val.startsWith('/') || val.startsWith('http://') || val.startsWith('https://')) &&
      !val.startsWith('file://'),
    {
      message: [
        'Invalid FP_PROFILE_PATH. Use one of the following:',
        '• A path starting with `/`, e.g. `/data/profile.json`',
        '  (must be placed inside the `public/` directory of this project)',
        '• A full URL like `https://example.com/profile.json`',
        '',
        '⚠️ Note: Do NOT use `file://` paths or system file paths like `C:/...`.',
        'These will not work in the browser.',
      ].join('\n'),
    },
  )
  .refine(val => val.endsWith('.json'), {
    message: 'FP_PROFILE_PATH must point to a `.json` file.',
  })
  .refine(
    val => {
      // Allow relative paths (starting with /)
      if (val.startsWith('/')) {
        return true;
      }

      // Check URL for internal hosts (SSRF protection)
      try {
        const url = new URL(val);
        return !isInternalHost(url.hostname);
      } catch {
        return false;
      }
    },
    {
      message: [
        'FP_PROFILE_PATH cannot point to internal/private network addresses.',
        'Blocked: localhost, 127.0.0.1, 10.x.x.x, 172.16-31.x.x, 192.168.x.x,',
        'cloud metadata endpoints (169.254.169.254).',
      ].join('\n'),
    },
  );

const phoneSchema = z
  .object({
    countryCode: z.string().regex(/^\+\d{1,4}$/, 'Invalid country code format (e.g., +1)'),
    number: z.string().regex(/^[0-9]{7,15}$/, 'Invalid phone number format'),
  })
  .optional();

export const envConfigSchema = z.object({
  email: z.string().email().optional(),
  firstName: z.string().min(1, 'FP_FIRST_NAME is required'),
  lastName: z.string().min(1, 'FP_LAST_NAME is required'),
  phone: phoneSchema,
  profilePath: profilePathSchema,
  showContactOnError: z.boolean().optional().default(false),
});
