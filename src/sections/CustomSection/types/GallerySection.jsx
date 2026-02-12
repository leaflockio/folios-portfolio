import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { ExpandToggle } from '@/components/ui/ExpandToggle';
import { ExpandToggleVariant } from '@/components/ui/ExpandToggle/variants';
import { Pagination } from '@/components/ui/Pagination';

const DEFAULT_LIMIT_DESKTOP = 6;
const DEFAULT_LIMIT_MOBILE = 4;

const GRID_COLS = new Map([
  [1, 'grid-cols-1'],
  [2, 'grid-cols-2'],
  [3, 'grid-cols-2 md:grid-cols-3'],
  [4, 'grid-cols-2 md:grid-cols-4'],
]);

/**
 * GallerySection — renders an image gallery with hover overlays.
 *
 * @param {object} props - Component props
 * @param {object} props.section - The custom section data
 * @returns {JSX.Element} The rendered gallery section
 */
export function GallerySection({ section }) {
  const { columns = 3, items = [], itemsPerPage, pagination = 'none' } = section;

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
      <div className={`grid gap-2 sm:gap-4 ${GRID_COLS.get(columns) || GRID_COLS.get(3)}`}>
        {displayedItems.map((item, i) => (
          <div
            className="group relative aspect-square overflow-hidden rounded-lg sm:rounded-xl"
            key={item.title || i}
          >
            <img
              alt={item.title || ''}
              className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              src={item.image}
            />
            {(item.title || item.description) && (
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-3 opacity-100 sm:p-4 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
                {item.title && (
                  <h3 className="text-sm font-bold text-white sm:text-lg">{item.title}</h3>
                )}
                {item.description && (
                  <p className="line-clamp-2 text-xs text-white/80 sm:text-sm">
                    {item.description}
                  </p>
                )}
              </div>
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

GallerySection.propTypes = {
  section: PropTypes.shape({
    columns: PropTypes.number,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        image: PropTypes.string,
        title: PropTypes.string,
      }),
    ),
    itemsPerPage: PropTypes.number,
    pagination: PropTypes.oneOf(['none', 'expand', 'paginate']),
  }).isRequired,
};
