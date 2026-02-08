import { getCertFallback } from '@/components/ui/icons/fallbackIcons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { formatDate } from '@/utils/time';
import PropTypes from 'prop-types';

/**
 * Certifications section — 2-column card grid with badge images
 * or fallback icons, linked names, issuer, and date.
 *
 * @param {object} props - Component props
 * @param {object} props.certifications - Certifications data ({ displayText, items })
 * @returns {JSX.Element|null} The rendered certifications section
 */
export function Certifications({ certifications }) {
  const { displayText, items = [] } = certifications ?? {};
  const visible = items.filter(c => c.visible);
  if (visible.length === 0) return null;

  return (
    <section id="certifications">
      <SectionHeading text={displayText} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {visible.map((cert, i) => {
          const FallbackIcon = getCertFallback(i);

          return (
            <div
              className="flex gap-4 rounded-lg border p-4 transition-colors hover:border-[var(--color-primary)]"
              key={cert.name}
              style={{
                borderColor: 'color-mix(in srgb, var(--color-text) 10%, transparent)',
              }}
            >
              {/* Badge or fallback */}
              {cert.badge ? (
                <img alt={cert.name} className="size-16 shrink-0 object-contain" src={cert.badge} />
              ) : (
                <div className="flex size-16 shrink-0 items-center justify-center">
                  <FallbackIcon className="size-10 opacity-20" />
                </div>
              )}

              <div className="space-y-1">
                {cert.link ? (
                  <a
                    className="block text-lg font-semibold transition-colors hover:text-[var(--color-primary)]"
                    href={cert.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {cert.name}
                  </a>
                ) : (
                  <p className="text-lg font-semibold">{cert.name}</p>
                )}
                <p className="text-sm opacity-50">{cert.issuer}</p>
                {cert.date && <p className="text-xs opacity-30">{formatDate(cert.date)}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

Certifications.propTypes = {
  certifications: PropTypes.object.isRequired,
};
