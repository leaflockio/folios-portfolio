// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import PropTypes from 'prop-types';
import { useCallback, useRef } from 'react';

import { ExpandToggleVariant } from './variants';

const VARIANT_STYLES = new Map([
  [
    ExpandToggleVariant.CHIP,
    'rounded-full px-4 py-1.5 text-sm opacity-50 transition-opacity hover:opacity-80',
  ],
  [
    ExpandToggleVariant.TEXT,
    'text-sm text-[var(--color-primary)] opacity-70 transition-opacity hover:opacity-100',
  ],
]);

/**
 * Reusable expand/collapse toggle button with smart scroll.
 * When collapsing content, scrolls the element into view if it would go off-screen.
 *
 * @param {object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.collapsedLabel - Label when collapsed (e.g., "Read more", "+5 more")
 * @param {boolean} props.expanded - Whether content is currently expanded
 * @param {string} props.expandedLabel - Label when expanded (default: "Show less")
 * @param {Function} props.onToggle - Callback when toggle is clicked
 * @param {string} props.variant - Visual style: "text" (default) or "chip"
 * @returns {JSX.Element} The rendered toggle button
 */
export function ExpandToggle({
  className = '',
  collapsedLabel = 'Read more',
  expanded,
  expandedLabel = 'Show less',
  onToggle,
  variant = ExpandToggleVariant.TEXT,
}) {
  const buttonRef = useRef(null);

  const handleClick = useCallback(() => {
    const isCollapsing = expanded;

    // Toggle first so DOM updates
    onToggle();

    // If collapsing, center button if it's too close to top edge
    if (isCollapsing && buttonRef.current) {
      // Double RAF to ensure DOM has fully updated after collapse
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const rect = buttonRef.current?.getBoundingClientRect();
          if (!rect) return;

          const topEdgeThreshold = 20;
          // If button is too close to top edge, scroll to center it
          if (rect.top < topEdgeThreshold) {
            const viewportCenter = window.innerHeight / 2;
            const buttonCenter = rect.top + rect.height / 2;
            const scrollOffset = buttonCenter - viewportCenter;
            window.scrollTo({
              behavior: 'smooth',
              top: Math.max(0, window.scrollY + scrollOffset),
            });
          }
        });
      });
    }
  }, [expanded, onToggle]);

  const variantClass = VARIANT_STYLES.get(variant) || VARIANT_STYLES.get(ExpandToggleVariant.TEXT);

  return (
    <button
      className={`${variantClass} ${className}`}
      onClick={handleClick}
      ref={buttonRef}
      style={
        variant === ExpandToggleVariant.CHIP
          ? { backgroundColor: 'color-mix(in srgb, var(--color-text) 10%, transparent)' }
          : undefined
      }
      type="button"
    >
      {expanded ? expandedLabel : collapsedLabel}
    </button>
  );
}

ExpandToggle.propTypes = {
  className: PropTypes.string,
  collapsedLabel: PropTypes.string,
  expanded: PropTypes.bool.isRequired,
  expandedLabel: PropTypes.string,
  onToggle: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(Object.values(ExpandToggleVariant)),
};
