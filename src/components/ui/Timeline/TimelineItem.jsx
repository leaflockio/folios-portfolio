// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import PropTypes from 'prop-types';

import { TimelineDot } from './TimelineDot';

/**
 * Timeline item wrapper - positions content with the timeline dot.
 *
 * @param {object} props - Component props
 * @param {boolean} props.active - Whether this is an active/current item
 * @param {React.ReactNode} props.children - The item content
 * @returns {JSX.Element} The rendered timeline item
 */
export function TimelineItem({ active = false, children }) {
  return (
    <div className="relative">
      <TimelineDot active={active} />
      {children}
    </div>
  );
}

TimelineItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
