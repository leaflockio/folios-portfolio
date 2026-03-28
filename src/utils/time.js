// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * Formats a date string like "2023-06" into "Jun 2023", or "2023" as-is.
 * Returns "Present" for null/undefined.
 *
 * @param {string|null|undefined} dateStr - The date string to format
 * @returns {string} The formatted date
 */
export function formatDate(dateStr) {
  if (!dateStr) return 'Present';
  const [year, month] = dateStr.split('-');
  return month ? `${MONTHS[parseInt(month, 10) - 1]} ${year}` : year;
}

/**
 * Returns the current timestamp in the format: YYYY-MM-DD HH:MM:SS.
 *
 * @returns {string} The formatted timestamp string.
 */
export function getCurrentTimestamp() {
  return new Date().toISOString().replace('T', ' ').split('.')[0];
}
