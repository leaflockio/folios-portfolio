import PropTypes from 'prop-types';

const COLOR_CLASSES = new Map([
  ['amber', 'bg-amber-500/10 text-amber-600'],
  ['blue', 'bg-blue-500/10 text-blue-600'],
  ['gray', 'bg-gray-500/10 text-gray-500 dark:bg-gray-400/10 dark:text-gray-400'],
  ['green', 'bg-green-500/10 text-green-600'],
  ['purple', 'bg-purple-500/10 text-purple-600'],
  ['red', 'bg-red-500/10 text-red-600'],
  ['teal', 'bg-teal-500/10 text-teal-600'],
]);

const DOT_CLASSES = new Map([
  ['amber', 'bg-amber-500'],
  ['blue', 'bg-blue-500'],
  ['gray', 'bg-gray-500 dark:bg-gray-400'],
  ['green', 'bg-green-500'],
  ['purple', 'bg-purple-500'],
  ['red', 'bg-red-500'],
  ['teal', 'bg-teal-500'],
]);

/**
 * A status badge with colored dot indicator.
 *
 * @param {object} props - Component props
 * @param {string} props.text - Badge label text
 * @param {string} props.color - Badge color (green, amber, teal, blue, purple, red, gray)
 * @param {boolean} [props.pulse] - Whether the dot should pulse
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} The rendered badge
 */
export function StatusBadge({ className = '', color, pulse = false, text }) {
  const colorClass = COLOR_CLASSES.get(color) || COLOR_CLASSES.get('gray');
  const dotClass = DOT_CLASSES.get(color) || DOT_CLASSES.get('gray');

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ${colorClass} ${className}`}
    >
      <span className={`size-2 rounded-full ${dotClass} ${pulse ? 'animate-pulse' : ''}`} />
      {text}
    </span>
  );
}

StatusBadge.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['green', 'amber', 'teal', 'blue', 'purple', 'red', 'gray']).isRequired,
  pulse: PropTypes.bool,
  text: PropTypes.string.isRequired,
};
