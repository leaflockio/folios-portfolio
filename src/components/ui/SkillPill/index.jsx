// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import PropTypes from 'prop-types';

/**
 * Reusable skill/tag pill component with consistent styling.
 *
 * @param {object} props - Component props
 * @param {string} props.children - The pill text content
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} The rendered skill pill
 */
export function SkillPill({ children, className = '' }) {
  return (
    <span
      className={`cursor-default rounded-full border border-transparent px-3 py-1 text-xs text-[var(--color-primary)] transition-all hover:scale-105 hover:border-[var(--color-primary)] sm:px-4 sm:py-1.5 sm:text-sm ${className}`}
      style={{
        backgroundColor: 'color-mix(in srgb, var(--color-primary) 15%, transparent)',
      }}
    >
      {children}
    </span>
  );
}

SkillPill.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
