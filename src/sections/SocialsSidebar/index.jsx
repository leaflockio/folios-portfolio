import { ChevronDownIcon, ChevronUpIcon } from '@/components/ui/icons';
import { getSocialIcon } from '@/components/ui/icons/socialIcons';
import PropTypes from 'prop-types';
import { useState } from 'react';

const PER_PAGE = 5;

/**
 * Left sidebar — social media icon links, paginated with arrows.
 *
 * @param {object} props - Component props
 * @param {Array} props.socials - Array of social link objects ({ label, url })
 * @returns {JSX.Element|null} The rendered socials sidebar
 */
export function SocialsSidebar({ socials }) {
  const [offset, setOffset] = useState(0);

  if (!socials || socials.length === 0) return null;

  const canUp = offset > 0;
  const canDown = offset + PER_PAGE < socials.length;
  const visible = socials.slice(offset, offset + PER_PAGE);

  return (
    <div
      className="fixed left-0.5 top-1/2 z-30 flex -translate-y-1/2 flex-col items-center gap-1 rounded-lg px-0.5 py-1 md:left-5 md:gap-3 md:rounded-2xl md:px-2.5 md:py-3 md:backdrop-blur-sm"
      style={{ backgroundColor: 'color-mix(in srgb, var(--color-text) 5%, transparent)' }}
    >
      <button
        className={`group relative text-[var(--color-primary)] transition-all ${canUp ? 'opacity-60 hover:opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setOffset(o => Math.max(0, o - 1))}
        tabIndex={canUp ? 0 : -1}
      >
        <ChevronUpIcon className="size-2.5 md:size-4" />
        <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-lg bg-[var(--color-text)] px-2.5 py-1 text-xs text-[var(--color-bg)] opacity-0 transition-opacity group-hover:opacity-100 md:block">
          More
        </span>
      </button>

      <div className="flex flex-col gap-1 md:gap-3">
        {visible.map(social => {
          const Icon = getSocialIcon(social.label);
          return (
            <a
              className="group relative flex size-5 items-center justify-center rounded text-[var(--color-text)] opacity-60 transition-all hover:text-[var(--color-primary)] hover:opacity-100 md:size-10 md:rounded-xl"
              href={social.url}
              key={social.label}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon className="size-3.5 md:size-5" />
              <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-lg bg-[var(--color-text)] px-2.5 py-1 text-xs text-[var(--color-bg)] opacity-0 transition-opacity group-hover:opacity-100 md:block">
                {social.label}
              </span>
            </a>
          );
        })}
      </div>

      <button
        className={`group relative text-[var(--color-primary)] transition-all ${canDown ? 'opacity-60 hover:opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setOffset(o => Math.min(socials.length - PER_PAGE, o + 1))}
        tabIndex={canDown ? 0 : -1}
      >
        <ChevronDownIcon className="size-2.5 md:size-4" />
        <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-lg bg-[var(--color-text)] px-2.5 py-1 text-xs text-[var(--color-bg)] opacity-0 transition-opacity group-hover:opacity-100 md:block">
          More
        </span>
      </button>
    </div>
  );
}

SocialsSidebar.propTypes = {
  socials: PropTypes.array.isRequired,
};
