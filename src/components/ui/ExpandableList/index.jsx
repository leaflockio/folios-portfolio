import PropTypes from 'prop-types';
import { useState } from 'react';

import { ExpandToggle } from '@/components/ui/ExpandToggle';

/**
 * Expandable list component that shows limited items with "Show more" toggle.
 *
 * @param {object} props - Component props
 * @param {string} props.className - Additional CSS classes for the container
 * @param {string} props.collapsedLabelSuffix - Suffix for collapsed label (default: "more")
 * @param {string} props.expandedLabel - Label when expanded (default: "Show less")
 * @param {Array} props.items - Array of items to display
 * @param {number} props.limit - Number of items to show when collapsed
 * @param {Function} props.renderItem - Function to render each item: (item, index) => JSX
 * @param {string} props.toggleClassName - Additional CSS classes for the toggle button
 * @param {string} props.toggleVariant - Visual style for toggle: "link" or "pill" (default: "pill")
 * @returns {JSX.Element|null} The rendered expandable list
 */
export function ExpandableList({
  className = '',
  collapsedLabelSuffix = 'more',
  expandedLabel = 'Show less',
  items,
  limit,
  renderItem,
  toggleClassName = '',
  toggleVariant = 'pill',
}) {
  const [expanded, setExpanded] = useState(false);

  if (!items || items.length === 0) return null;

  const hasMore = items.length > limit;
  const displayedItems = expanded ? items : items.slice(0, limit);
  const remainingCount = items.length - limit;

  return (
    <div className={className}>
      {displayedItems.map((item, index) => renderItem(item, index))}

      {hasMore && (
        <ExpandToggle
          className={toggleClassName}
          collapsedLabel={`+${remainingCount} ${collapsedLabelSuffix}`}
          expanded={expanded}
          expandedLabel={expandedLabel}
          onToggle={() => setExpanded(e => !e)}
          variant={toggleVariant}
        />
      )}
    </div>
  );
}

ExpandableList.propTypes = {
  className: PropTypes.string,
  collapsedLabelSuffix: PropTypes.string,
  expandedLabel: PropTypes.string,
  items: PropTypes.array.isRequired,
  limit: PropTypes.number.isRequired,
  renderItem: PropTypes.func.isRequired,
  toggleClassName: PropTypes.string,
  toggleVariant: PropTypes.oneOf(['link', 'pill']),
};
