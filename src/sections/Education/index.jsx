import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { ExpandableList } from '@/components/ui/ExpandableList';
import { getOrgFallback } from '@/components/ui/icons/fallbackIcons';
import { SectionHeading } from '@/components/ui/SectionHeading';

const COURSES_LIMIT_MOBILE = 4;
const COURSES_LIMIT_DESKTOP = 6;

/**
 * Education section — institution logo or fallback, degree info,
 * location, grade, date range, and course pills.
 *
 * @param {object} props - Component props
 * @param {object} props.education - Education data ({ displayText, items })
 * @returns {JSX.Element|null} The rendered education section
 */
export function Education({ education }) {
  const { displayText, items = [] } = education ?? {};
  const visible = items.filter(e => e.visible);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (visible.length === 0) return null;

  const coursesLimit = isMobile ? COURSES_LIMIT_MOBILE : COURSES_LIMIT_DESKTOP;

  return (
    <section id="education">
      <SectionHeading text={displayText} />
      <div className="space-y-5 sm:space-y-6">
        {visible.map((edu, i) => {
          const FallbackIcon = getOrgFallback(i);
          const locationStr = formatLocation(edu.location);
          const courses = edu.courses ?? [];

          return (
            <div className="flex items-start gap-3 sm:gap-4" key={edu.institution}>
              {/* Logo or fallback */}
              {edu.logo ? (
                <img
                  alt={edu.institution}
                  className="size-10 shrink-0 rounded-lg object-contain sm:size-12"
                  src={edu.logo}
                />
              ) : (
                <div
                  className="flex size-10 shrink-0 items-center justify-center rounded-lg sm:size-12"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--color-text) 5%, transparent)',
                  }}
                >
                  <FallbackIcon className="size-5 opacity-30 sm:size-6" />
                </div>
              )}

              <div className="min-w-0">
                {edu.link ? (
                  <a
                    className="block text-base font-bold leading-tight hover:text-[var(--color-primary)] sm:text-lg"
                    href={edu.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {edu.institution}
                  </a>
                ) : (
                  <h3 className="text-base font-bold leading-tight sm:text-lg">
                    {edu.institution}
                  </h3>
                )}
                {(edu.degree || edu.field) && (
                  <p className="text-xs opacity-50 sm:text-sm">
                    {[edu.degree, edu.field].filter(Boolean).join(' in ')}
                  </p>
                )}
                <p className="mt-0.5 text-[10px] opacity-30 sm:mt-1 sm:text-xs">
                  {[
                    edu.startDate && edu.endDate
                      ? `${edu.startDate} — ${edu.endDate}`
                      : edu.startDate || edu.endDate,
                    edu.grade,
                    locationStr,
                  ]
                    .filter(Boolean)
                    .join(' · ')}
                </p>

                {/* Courses */}
                {courses.length > 0 && (
                  <div className="pt-2 sm:pt-3">
                    <p className="mb-1 text-[10px] opacity-30 sm:mb-1.5 sm:text-xs">
                      Relevant Courses
                    </p>
                    <ExpandableList
                      className="flex flex-wrap gap-1 sm:gap-1.5"
                      items={courses}
                      limit={coursesLimit}
                      renderItem={c => (
                        <span
                          className="rounded px-2 py-0.5 text-[10px] text-[var(--color-secondary)] sm:px-2.5 sm:text-xs"
                          key={c.course}
                          style={{
                            backgroundColor:
                              'color-mix(in srgb, var(--color-secondary) 10%, transparent)',
                          }}
                        >
                          {c.course}
                        </span>
                      )}
                      toggleClassName="rounded px-2 py-0.5 text-[10px] sm:px-2.5 sm:text-xs"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

Education.propTypes = {
  education: PropTypes.object.isRequired,
};

/**
 * Formats location object into a display string.
 *
 * @param {object} location - Location with city, region, country
 * @returns {string|null} Formatted location string
 */
function formatLocation(location) {
  if (!location) return null;
  const parts = [location.city, location.region, location.country].filter(Boolean);
  return parts.length > 0 ? parts.join(', ') : null;
}
