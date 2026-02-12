import PropTypes from 'prop-types';

import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/icons';

/**
 * Reusable pagination component with chevron navigation.
 *
 * @param {object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onPageChange - Callback when page changes
 * @param {number} props.page - Current page index (0-based)
 * @param {number} props.totalPages - Total number of pages
 * @returns {JSX.Element|null} The rendered pagination controls
 */
export function Pagination({ className = '', onPageChange, page, totalPages }) {
  if (totalPages <= 1) return null;

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <button
        aria-label="Previous page"
        className="rounded-full p-2 transition-colors disabled:cursor-not-allowed disabled:opacity-30"
        disabled={page === 0}
        onClick={() => onPageChange(page - 1)}
        style={{
          backgroundColor: 'color-mix(in srgb, var(--color-text) 10%, transparent)',
        }}
        type="button"
      >
        <ChevronLeftIcon className="size-5" />
      </button>
      <span className="min-w-12 text-center text-sm opacity-50">
        {page + 1} / {totalPages}
      </span>
      <button
        aria-label="Next page"
        className="rounded-full p-2 transition-colors disabled:cursor-not-allowed disabled:opacity-30"
        disabled={page === totalPages - 1}
        onClick={() => onPageChange(page + 1)}
        style={{
          backgroundColor: 'color-mix(in srgb, var(--color-text) 10%, transparent)',
        }}
        type="button"
      >
        <ChevronRightIcon className="size-5" />
      </button>
    </div>
  );
}

Pagination.propTypes = {
  className: PropTypes.string,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};
