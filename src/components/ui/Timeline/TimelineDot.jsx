import PropTypes from 'prop-types';

/**
 * Timeline dot indicator - the circular marker on the timeline.
 *
 * @param {object} props - Component props
 * @param {boolean} props.active - Whether this is an active/current item (shows pulse animation)
 * @returns {JSX.Element} The rendered timeline dot
 */
export function TimelineDot({ active = false }) {
  return (
    <div
      className={`absolute -left-6 top-3 size-4 rounded-full border-[3px] border-[var(--color-bg)] sm:-left-8 sm:top-[0.85rem] sm:size-5 sm:border-4 ${
        active
          ? 'animate-pulse bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]'
          : 'bg-[var(--color-primary)]'
      }`}
      style={{ transform: `translateX(${active ? '-55%' : '-52.5%'})` }}
    />
  );
}

TimelineDot.propTypes = {
  active: PropTypes.bool,
};
