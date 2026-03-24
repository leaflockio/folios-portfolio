import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { ExpandToggle } from '@/components/ui/ExpandToggle';
import { ExpandToggleVariant } from '@/components/ui/ExpandToggle/variants';
import { getOrgFallback } from '@/components/ui/icons/fallbackIcons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Timeline, TimelineItem } from '@/components/ui/Timeline';
import { formatDate } from '@/utils/time';

const EXPERIENCE_LIMIT = 4;
const DESCRIPTION_LINES_MOBILE = 2;
const DESCRIPTION_LINES_DESKTOP = 3;

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState(new Set());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (visible.length === 0) return null;

  const hasMore = visible.length > EXPERIENCE_LIMIT;
  const displayedExperiences = isExpanded ? visible : visible.slice(0, EXPERIENCE_LIMIT);
  const remainingCount = visible.length - EXPERIENCE_LIMIT;
  const lineClamp = isMobile ? DESCRIPTION_LINES_MOBILE : DESCRIPTION_LINES_DESKTOP;

  const toggleDescription = key => {
    setExpandedDescriptions(prev => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <section id="experience">
      <SectionHeading text={displayText} />
      <Timeline>
        {displayedExperiences.map((exp, i) => {
          const isActive = exp.endDate === null;
          const FallbackIcon = getOrgFallback(i);

          return (
            <TimelineItem active={isActive} key={`${exp.company}-${exp.startDate}`}>
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Company logo or fallback */}
                {exp.logo ? (
                  <img
                    alt={exp.company}
                    className="size-10 shrink-0 rounded-lg object-contain sm:size-11"
                    src={exp.logo}
                  />
                ) : (
                  <div
                    className="flex size-10 shrink-0 items-center justify-center rounded-lg sm:size-11"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--color-text) 5%, transparent)',
                    }}
                  >
                    <FallbackIcon className="size-5 opacity-30 sm:size-6" />
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0">
                      <h3 className="text-base font-bold leading-tight sm:text-lg">{exp.role}</h3>
                      <p className="truncate text-xs opacity-50 sm:text-sm">
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
                    <span className="shrink-0 whitespace-nowrap text-[10px] opacity-30 sm:text-xs">
                      {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
                    </span>
                  </div>
                  {exp.description?.content && (
                    <ExperienceDescription
                      content={exp.description.content}
                      expKey={`${exp.company}-${exp.startDate}`}
                      format={exp.description.format || 'text'}
                      isExpanded={expandedDescriptions.has(`${exp.company}-${exp.startDate}`)}
                      lineClamp={lineClamp}
                      onToggle={toggleDescription}
                    />
                  )}
                </div>
              </div>
            </TimelineItem>
          );
        })}
      </Timeline>

      {/* Show more button */}
      {hasMore && (
        <div className="mt-6 flex justify-center">
          <ExpandToggle
            collapsedLabel={`+${remainingCount} more experiences`}
            expanded={isExpanded}
            onToggle={() => setIsExpanded(!isExpanded)}
            variant={ExpandToggleVariant.CHIP}
          />
        </div>
      )}
    </section>
  );
}

Experience.propTypes = {
  experience: PropTypes.object.isRequired,
};

/**
 * ExperienceDescription — renders text or markdown description with truncation.
 *
 * @param {object} props - Component props
 * @param {string} props.content - The description content
 * @param {string} props.expKey - Unique key for the experience
 * @param {string} props.format - Content format ('text' or 'markdown')
 * @param {boolean} props.isExpanded - Whether the description is expanded
 * @param {number} props.lineClamp - Number of lines to clamp
 * @param {Function} props.onToggle - Toggle callback
 * @returns {JSX.Element} The rendered description
 */
function ExperienceDescription({ content, expKey, format, isExpanded, lineClamp, onToggle }) {
  const contentRef = useRef(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      // Check if content overflows
      setIsTruncated(el.scrollHeight > el.clientHeight);
    }
  }, [content, lineClamp]);

  return (
    <div className="mt-1.5 sm:mt-2">
      <div
        className="text-xs leading-relaxed opacity-40 sm:text-sm"
        ref={contentRef}
        style={
          !isExpanded
            ? {
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: lineClamp,
              }
            : {}
        }
      >
        {format === 'markdown' ? (
          <ReactMarkdown
            components={{
              a: ({ children, href }) => (
                <a
                  className="text-[var(--color-primary)] hover:underline"
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {children}
                </a>
              ),
              li: ({ children }) => <li className="ml-4">{children}</li>,
              ol: ({ children }) => <ol className="list-decimal space-y-0.5">{children}</ol>,
              p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
              strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
              ul: ({ children }) => <ul className="list-disc space-y-0.5">{children}</ul>,
            }}
          >
            {content}
          </ReactMarkdown>
        ) : (
          <p>{content}</p>
        )}
      </div>
      {(isTruncated || isExpanded) && (
        <ExpandToggle
          className="mt-1 text-xs"
          expanded={isExpanded}
          onToggle={() => onToggle(expKey)}
        />
      )}
    </div>
  );
}

ExperienceDescription.propTypes = {
  content: PropTypes.string.isRequired,
  expKey: PropTypes.string.isRequired,
  format: PropTypes.oneOf(['text', 'markdown']).isRequired,
  isExpanded: PropTypes.bool.isRequired,
  lineClamp: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
};
