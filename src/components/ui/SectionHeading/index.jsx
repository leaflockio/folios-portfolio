import PropTypes from 'prop-types';

/**
 * Shared section heading used by all portfolio sections.
 * Renders a small uppercase label with wide letter-spacing.
 *
 * @param {object} props - Component props
 * @param {string} props.text - The heading text to display
 * @returns {JSX.Element} The rendered section heading
 */
export function SectionHeading({ text }) {
  if (!text) return null;

  return (
    <div className="sticky top-0 z-10 -mx-16 bg-[var(--color-bg)] px-16 py-4 transition-colors duration-300 md:-mx-20 md:px-20">
      <p className="text-xs uppercase tracking-[0.3em] opacity-30">{text}</p>
    </div>
  );
}

SectionHeading.propTypes = {
  text: PropTypes.string,
};
