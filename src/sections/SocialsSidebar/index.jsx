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
    <div className="bg-[var(--color-text)]/5 fixed left-5 top-1/2 z-30 flex -translate-y-1/2 flex-col items-center gap-3 rounded-2xl px-2.5 py-3 backdrop-blur-sm">
      <button
        className={`group relative text-[var(--color-primary)] transition-all ${canUp ? 'opacity-60 hover:opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setOffset(o => Math.max(0, o - 1))}
        tabIndex={canUp ? 0 : -1}
      >
        <ChevronUpIcon className="size-4" />
        <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-lg bg-[var(--color-text)] px-2.5 py-1 text-xs text-[var(--color-bg)] opacity-0 transition-opacity group-hover:opacity-100">
          More
        </span>
      </button>

      <div className="flex flex-col gap-3">
        {visible.map(social => {
          const Icon = getSocialIcon(social.label);
          return (
            <a
              className="hover:bg-[var(--color-primary)]/15 group relative flex size-10 items-center justify-center rounded-xl text-[var(--color-text)] opacity-60 transition-all hover:text-[var(--color-primary)] hover:opacity-100"
              href={social.url}
              key={social.label}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon className="size-5" />
              <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-lg bg-[var(--color-text)] px-2.5 py-1 text-xs text-[var(--color-bg)] opacity-0 transition-opacity group-hover:opacity-100">
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
        <ChevronDownIcon className="size-4" />
        <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-lg bg-[var(--color-text)] px-2.5 py-1 text-xs text-[var(--color-bg)] opacity-0 transition-opacity group-hover:opacity-100">
          More
        </span>
      </button>
    </div>
  );
}

SocialsSidebar.propTypes = {
  socials: PropTypes.array.isRequired,
};
