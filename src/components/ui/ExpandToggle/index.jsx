import PropTypes from 'prop-types';
import { useCallback, useRef } from 'react';

const VARIANT_STYLES = {
  link: 'text-sm text-[var(--color-primary)] opacity-70 transition-opacity hover:opacity-100',
  pill: 'rounded-full px-4 py-1.5 text-sm opacity-50 transition-opacity hover:opacity-80',
};

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
 * @param {string} props.variant - Visual style: "link" (default) or "pill"
 * @returns {JSX.Element} The rendered toggle button
 */
export function ExpandToggle({
  className = '',
  collapsedLabel = 'Read more',
  expanded,
  expandedLabel = 'Show less',
  onToggle,
  variant = 'link',
}) {
  const buttonRef = useRef(null);

  const handleClick = useCallback(() => {
    const isCollapsing = expanded;

    // Toggle first so DOM updates
    onToggle();

    // If collapsing, check if we need to scroll after DOM updates
    if (isCollapsing && buttonRef.current) {
      // Double RAF to ensure DOM has fully updated after collapse
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const rect = buttonRef.current?.getBoundingClientRect();
          // If button is above viewport, scroll minimum amount to show it
          if (rect && rect.top < 0) {
            buttonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        });
      });
    }
  }, [expanded, onToggle]);

  const variantClass = VARIANT_STYLES[variant] || VARIANT_STYLES.link;

  return (
    <button
      className={`${variantClass} ${className}`}
      onClick={handleClick}
      ref={buttonRef}
      style={
        variant === 'pill'
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
  variant: PropTypes.oneOf(['link', 'pill']),
};
