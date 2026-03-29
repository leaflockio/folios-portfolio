// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { ExpandToggle } from '@/components/ui/ExpandToggle';
import { ExpandToggleVariant } from '@/components/ui/ExpandToggle/variants';
import { Pagination } from '@/components/ui/Pagination';

import { MarkdownContent } from '../MarkdownContent';

const DEFAULT_LIMIT_DESKTOP = 5;
const DEFAULT_LIMIT_MOBILE = 3;

/**
 * ListSection — renders a structured list of items with optional links and descriptions.
 *
 * @param {object} props - Component props
 * @param {object} props.section - The custom section data
 * @returns {JSX.Element} The rendered list section
 */
export function ListSection({ section }) {
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
      <ul className="space-y-4 sm:space-y-6">
        {displayedItems.map((item, i) => (
          <li className="flex gap-3 sm:gap-4" key={item.title || i}>
            <span className="text-lg text-[var(--color-primary)] sm:text-xl">•</span>
            <div className="flex-1">
              {item.title && <h3 className="text-base font-bold sm:text-lg">{item.title}</h3>}
              {item.description && (
                <MarkdownContent className="mt-1 text-sm" content={item.description} />
              )}
              {item.link && (
                <a
                  className="mt-2 inline-block text-sm text-[var(--color-primary)] hover:underline"
                  href={item.link.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.link.label}
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>

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

ListSection.propTypes = {
  section: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        link: PropTypes.shape({
          label: PropTypes.string,
          url: PropTypes.string,
        }),
        title: PropTypes.string,
      }),
    ),
    itemsPerPage: PropTypes.number,
    pagination: PropTypes.oneOf(['none', 'expand', 'paginate']),
  }).isRequired,
};
