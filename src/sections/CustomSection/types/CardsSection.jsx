import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { ExpandToggle } from '@/components/ui/ExpandToggle';
import { ExpandToggleVariant } from '@/components/ui/ExpandToggle/variants';
import { Pagination } from '@/components/ui/Pagination';

import { MarkdownContent } from '../MarkdownContent';

const DEFAULT_LIMIT_DESKTOP = 4;
const DEFAULT_LIMIT_MOBILE = 2;

const GRID_COLS = new Map([
  [1, 'grid-cols-1'],
  [2, 'grid-cols-1 md:grid-cols-2'],
  [3, 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'],
  [4, 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'],
]);

/**
 * CardsSection — renders a grid of cards with images, descriptions, and tags.
 *
 * @param {object} props - Component props
 * @param {object} props.section - The custom section data
 * @returns {JSX.Element} The rendered cards section
 */
export function CardsSection({ section }) {
  const { columns = 2, items = [], itemsPerPage, pagination = 'none' } = section;

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
      <div className={`grid gap-4 sm:gap-6 ${GRID_COLS.get(columns) || GRID_COLS.get(2)}`}>
        {displayedItems.map((item, i) => (
          <div
            className="rounded-xl p-4 transition-all hover:scale-[1.02] sm:rounded-2xl sm:p-6"
            key={item.title || i}
            style={{ backgroundColor: 'color-mix(in srgb, var(--color-text) 5%, transparent)' }}
          >
            {item.image && (
              <img
                alt={item.title || ''}
                className="mb-3 h-32 w-full rounded-lg object-cover sm:mb-4 sm:h-40"
                src={item.image}
              />
            )}
            {item.title && <h3 className="mb-2 text-lg font-bold sm:text-xl">{item.title}</h3>}
            {item.description && <MarkdownContent className="text-sm" content={item.description} />}
            {item.tags && item.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span
                    className="border-b border-current pb-0.5 text-xs uppercase tracking-wider opacity-40"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {item.link && (
              <a
                className="mt-4 inline-block text-sm text-[var(--color-primary)] hover:underline"
                href={item.link.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {item.link.label} →
              </a>
            )}
          </div>
        ))}
      </div>

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

CardsSection.propTypes = {
  section: PropTypes.shape({
    columns: PropTypes.number,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        image: PropTypes.string,
        link: PropTypes.shape({
          label: PropTypes.string,
          url: PropTypes.string,
        }),
        tags: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string,
      }),
    ),
    itemsPerPage: PropTypes.number,
    pagination: PropTypes.oneOf(['none', 'expand', 'paginate']),
  }).isRequired,
};
