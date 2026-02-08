import { getOrgFallback } from '@/components/ui/icons/fallbackIcons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { formatDate } from '@/utils/time';
import PropTypes from 'prop-types';

/**
 * Experience section — vertical timeline with colored dots,
 * company logos or fallback icons, role details, and date ranges.
 *
 * @param {object} props - Component props
 * @param {object} props.experience - Experience data ({ displayText, items })
 * @returns {JSX.Element|null} The rendered experience section
 */
export function Experience({ experience }) {
  const { displayText, items = [] } = experience ?? {};
  const visible = items.filter(e => e.visible);
  if (visible.length === 0) return null;

  return (
    <section id="experience">
      <SectionHeading text={displayText} />
      <div
        className="relative space-y-10 border-l-2 pl-8"
        style={{ borderColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)' }}
      >
        {visible.map((exp, i) => {
          const isActive = exp.endDate === null;
          const FallbackIcon = getOrgFallback(i);

          return (
            <div className="relative" key={`${exp.company}-${exp.startDate}`}>
              {/* Timeline dot */}
              <div
                className={`absolute top-1 size-5 rounded-full border-4 border-[var(--color-bg)] ${
                  isActive
                    ? 'bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]'
                    : 'bg-[var(--color-primary)]'
                }`}
                style={{ left: '-2.55rem' }}
              />

              <div className="flex items-start gap-4">
                {/* Company logo or fallback */}
                {exp.logo ? (
                  <img
                    alt={exp.company}
                    className="size-11 shrink-0 rounded-lg object-contain"
                    src={exp.logo}
                  />
                ) : (
                  <div
                    className="flex size-11 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--color-text) 5%, transparent)',
                    }}
                  >
                    <FallbackIcon className="size-6 opacity-30" />
                  </div>
                )}

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold">{exp.role}</h3>
                      <p className="text-sm opacity-50">
                        {exp.company}
                        {exp.workModel && (
                          <>
                            {' '}
                            · <span className="capitalize">{exp.workModel}</span>
                          </>
                        )}
                        {exp.location?.city && <> · {exp.location.city}</>}
                      </p>
                    </div>
                    <span className="shrink-0 whitespace-nowrap text-xs opacity-30">
                      {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="mt-2 text-sm leading-relaxed opacity-40">{exp.description}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

Experience.propTypes = {
  experience: PropTypes.object.isRequired,
};
