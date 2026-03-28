// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { ExpandToggle } from '@/components/ui/ExpandToggle';

/**
 * Expandable text component with line-clamp truncation.
 *
 * @param {object} props - Component props
 * @param {string} props.children - The text content
 * @param {string} props.className - Additional CSS classes for the text
 * @param {string} props.collapsedLabel - Label when collapsed (default: "Read more")
 * @param {string} props.expandedLabel - Label when expanded (default: "Show less")
 * @param {number} props.lineClamp - Number of lines to show when collapsed (default: 3)
 * @param {number} props.threshold - Character threshold to enable truncation (default: 150)
 * @returns {JSX.Element} The rendered expandable text
 */
export function ExpandableText({
  children,
  className = '',
  collapsedLabel = 'Read more',
  expandedLabel = 'Show less',
  lineClamp = 3,
  threshold = 150,
}) {
  const [expanded, setExpanded] = useState(false);
  const [needsTruncation, setNeedsTruncation] = useState(false);

  const text = typeof children === 'string' ? children : '';

  useEffect(() => {
    setNeedsTruncation(text.length > threshold);
  }, [text, threshold]);

  const lineClampClass = `line-clamp-${lineClamp}`;

  return (
    <div>
      <p className={`${className} ${!expanded && needsTruncation ? lineClampClass : ''}`}>
        {children}
      </p>
      {needsTruncation && (
        <ExpandToggle
          className="mt-1"
          collapsedLabel={collapsedLabel}
          expanded={expanded}
          expandedLabel={expandedLabel}
          onToggle={() => setExpanded(e => !e)}
        />
      )}
    </div>
  );
}

ExpandableText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  collapsedLabel: PropTypes.string,
  expandedLabel: PropTypes.string,
  lineClamp: PropTypes.number,
  threshold: PropTypes.number,
};
