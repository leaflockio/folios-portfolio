import PropTypes from 'prop-types';

import { getOrgFallback } from '@/components/ui/icons/fallbackIcons';
import { SectionHeading } from '@/components/ui/SectionHeading';

/**
 * Education section — institution logo or fallback, degree info,
 * grade, date range, and course pills.
 *
 * @param {object} props - Component props
 * @param {object} props.education - Education data ({ displayText, items })
 * @returns {JSX.Element|null} The rendered education section
 */
export function Education({ education }) {
  const { displayText, items = [] } = education ?? {};
  const visible = items.filter(e => e.visible);
  if (visible.length === 0) return null;

  return (
    <section id="education">
      <SectionHeading text={displayText} />
      <div className="space-y-6">
        {visible.map((edu, i) => {
          const FallbackIcon = getOrgFallback(i);

          return (
            <div className="flex items-start gap-4" key={edu.institution}>
              {/* Logo or fallback */}
              {edu.logo ? (
                <img
                  alt={edu.institution}
                  className="size-12 shrink-0 rounded-lg object-contain"
                  src={edu.logo}
                />
              ) : (
                <div
                  className="flex size-12 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--color-text) 5%, transparent)',
                  }}
                >
                  <FallbackIcon className="size-6 opacity-30" />
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold">{edu.institution}</h3>
                {(edu.degree || edu.field) && (
                  <p className="text-sm opacity-50">
                    {[edu.degree, edu.field].filter(Boolean).join(' in ')}
                  </p>
                )}
                <p className="mt-1 text-xs opacity-30">
                  {[
                    edu.startDate && edu.endDate
                      ? `${edu.startDate} — ${edu.endDate}`
                      : edu.startDate || edu.endDate,
                    edu.grade,
                  ]
                    .filter(Boolean)
                    .join(' · ')}
                </p>

                {/* Courses */}
                {edu.courses && edu.courses.length > 0 && (
                  <div className="pt-3">
                    <p className="mb-1.5 text-xs opacity-30">Relevant Courses</p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map(c => (
                        <span
                          className="rounded px-2.5 py-0.5 text-xs text-[var(--color-secondary)]"
                          key={c.course}
                          style={{
                            backgroundColor:
                              'color-mix(in srgb, var(--color-secondary) 10%, transparent)',
                          }}
                        >
                          {c.course}
                        </span>
                      ))}
                    </div>
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
