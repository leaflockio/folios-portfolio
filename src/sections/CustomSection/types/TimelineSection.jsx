import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { ExpandToggle } from '@/components/ui/ExpandToggle';
import { ExpandToggleVariant } from '@/components/ui/ExpandToggle/variants';
import { Pagination } from '@/components/ui/Pagination';
import { Timeline, TimelineItem } from '@/components/ui/Timeline';

import { MarkdownContent } from '../MarkdownContent';

const DEFAULT_LIMIT_DESKTOP = 4;
const DEFAULT_LIMIT_MOBILE = 3;

/**
 * TimelineSection — renders a vertical timeline with dates and descriptions.
 *
 * @param {object} props - Component props
 * @param {object} props.section - The custom section data
 * @returns {JSX.Element} The rendered timeline section
 */
export function TimelineSection({ section }) {
  const { items = [], itemsPerPage, pagination = 'none' } = section;

  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const limit = itemsPerPage || (isMobile ? DEFAULT_LIMIT_MOBILE : DEFAULT_LIMIT_DESKTOP);
  const hasMore = items.length > limit;

  // Determine displayed items based on pagination mode
  let displayedItems = items;
  if (pagination === 'expand' && !isExpanded) {
    displayedItems = items.slice(0, limit);
  } else if (pagination === 'paginate') {
    displayedItems = items.slice(page * limit, (page + 1) * limit);
  }

  const totalPages = Math.ceil(items.length / limit);

  return (
    <div>
      <Timeline spacing="space-y-6 sm:space-y-8">
        {displayedItems.map((item, i) => (
          <TimelineItem active={item.active} key={item.title || i}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              {/* Date on top for mobile */}
              {item.date && (
                <span className="text-xs opacity-30 sm:order-2 sm:shrink-0">{item.date}</span>
              )}
              <div className="flex-1 sm:order-1">
                {item.title && <h3 className="text-base font-bold sm:text-lg">{item.title}</h3>}
                {item.description && (
                  <MarkdownContent className="mt-1 text-sm" content={item.description} />
                )}
                {item.tags && item.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span className="text-xs uppercase tracking-wider opacity-30" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </TimelineItem>
        ))}
      </Timeline>

      {/* Expand/Collapse button */}
      {pagination === 'expand' && hasMore && (
        <div className="mt-6 flex justify-center">
          <ExpandToggle
            collapsedLabel={`Show ${items.length - limit} more`}
            expanded={isExpanded}
            onToggle={() => setIsExpanded(!isExpanded)}
            variant={ExpandToggleVariant.CHIP}
          />
        </div>
      )}

      {/* Pagination controls */}
      {pagination === 'paginate' && totalPages > 1 && (
        <Pagination className="mt-6" onPageChange={setPage} page={page} totalPages={totalPages} />
      )}
    </div>
  );
}

TimelineSection.propTypes = {
  section: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        active: PropTypes.bool,
        date: PropTypes.string,
        description: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string,
      }),
    ),
    itemsPerPage: PropTypes.number,
    pagination: PropTypes.oneOf(['none', 'expand', 'paginate']),
  }).isRequired,
};
