import PropTypes from 'prop-types';

/**
 * Timeline container - renders the vertical line and wraps timeline items.
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Timeline items
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.spacing - Spacing classes for items (default: "space-y-8 sm:space-y-10")
 * @returns {JSX.Element} The rendered timeline container
 */
export function Timeline({ children, className = '', spacing = 'space-y-8 sm:space-y-10' }) {
  return (
    <div
      className={`relative border-l-2 pl-6 sm:pl-8 ${spacing} ${className}`}
      style={{ borderColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)' }}
    >
      {children}
    </div>
  );
}

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  spacing: PropTypes.string,
};

export { TimelineDot } from './TimelineDot';
export { TimelineItem } from './TimelineItem';
