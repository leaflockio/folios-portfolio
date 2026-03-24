import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { getCertFallback } from '@/components/ui/icons/fallbackIcons';
import { Pagination } from '@/components/ui/Pagination';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { formatDate } from '@/utils/time';

const ITEMS_MOBILE = 4;
const ITEMS_DESKTOP = 6;

/**
 * Certifications section — responsive card grid with badge images
 * or fallback icons, linked names, issuer, and date.
 * Supports ordering via `order` field and pagination.
 *
 * @param {object} props - Component props
 * @param {object} props.certifications - Certifications data ({ displayText, items })
 * @returns {JSX.Element|null} The rendered certifications section
 */
export function Certifications({ certifications }) {
  const { displayText, items = [] } = certifications ?? {};
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filter visible and sort by order (array index as tiebreaker)
  const sorted = items
    .map((cert, idx) => ({ ...cert, _idx: idx }))
    .filter(c => c.visible)
    .sort((a, b) => {
      const orderA = a.order ?? Infinity;
      const orderB = b.order ?? Infinity;
      if (orderA !== orderB) return orderA - orderB;
      return a._idx - b._idx;
    });

  const perPage = isMobile ? ITEMS_MOBILE : ITEMS_DESKTOP;
  const totalPages = Math.ceil(sorted.length / perPage);
  const paginated = sorted.slice(page * perPage, (page + 1) * perPage);

  // Reset to first page if items change and current page is out of bounds
  useEffect(() => {
    if (page >= totalPages && totalPages > 0) {
      setPage(totalPages - 1);
    }
  }, [page, totalPages]);

  if (sorted.length === 0) return null;

  return (
    <section id="certifications">
      <SectionHeading text={displayText} />
      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
        {paginated.map((cert, i) => {
          const FallbackIcon = getCertFallback(i);

          return (
            <div
              className="flex gap-3 rounded-lg border p-3 transition-colors hover:border-[var(--color-primary)] sm:gap-4 sm:p-4"
              key={cert.name}
              style={{
                borderColor: 'color-mix(in srgb, var(--color-text) 10%, transparent)',
              }}
            >
              {/* Badge or fallback */}
              {cert.badge ? (
                <img
                  alt={cert.name}
                  className="size-12 shrink-0 object-contain sm:size-16"
                  src={cert.badge}
                />
              ) : (
                <div className="flex size-12 shrink-0 items-center justify-center sm:size-16">
                  <FallbackIcon className="size-8 opacity-20 sm:size-10" />
                </div>
              )}

              <div className="min-w-0 space-y-0.5 sm:space-y-1">
                {cert.link ? (
                  <a
                    className="block text-base font-semibold leading-tight hover:text-[var(--color-primary)] sm:text-lg"
                    href={cert.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {cert.name}
                  </a>
                ) : (
                  <p className="text-base font-semibold leading-tight sm:text-lg">{cert.name}</p>
                )}
                <p className="truncate text-xs opacity-50 sm:text-sm">{cert.issuer}</p>
                {cert.date && (
                  <p className="text-[10px] opacity-30 sm:text-xs">{formatDate(cert.date)}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <Pagination className="mt-4" onPageChange={setPage} page={page} totalPages={totalPages} />
    </section>
  );
}

Certifications.propTypes = {
  certifications: PropTypes.object.isRequired,
};
