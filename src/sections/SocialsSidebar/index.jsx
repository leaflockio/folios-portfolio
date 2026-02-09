import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@/components/ui/icons';
import { getSocialIcon } from '@/components/ui/icons/socialIcons';

const PER_PAGE = 5;
const LONG_PRESS_DURATION = 500;

/**
 * Left sidebar — social media icon links, paginated with arrows.
 * On mobile: tap navigates, long press shows tooltip.
 *
 * @param {object} props - Component props
 * @param {Array} props.socials - Array of social link objects ({ label, url })
 * @returns {JSX.Element|null} The rendered socials sidebar
 */
export function SocialsSidebar({ socials }) {
  const [offset, setOffset] = useState(0);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const longPressTimer = useRef(null);
  const isLongPress = useRef(false);

  // Close tooltip when clicking outside
  useEffect(() => {
    if (!activeTooltip) return;

    /**
     * Closes tooltip when clicking outside.
     *
     * @param {MouseEvent} e - The mouse event
     */
    function handleClickOutside(e) {
      if (!e.target.closest('[data-social-sidebar]')) {
        setActiveTooltip(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeTooltip]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current);
      }
    };
  }, []);

  if (!socials || socials.length === 0) return null;

  const needsPagination = socials.length > PER_PAGE;
  const canUp = offset > 0;
  const canDown = offset + PER_PAGE < socials.length;
  const visible = socials.slice(offset, offset + PER_PAGE);

  /**
   * Starts long press timer for showing tooltip.
   *
   * @param {string} label - The social label
   */
  function handleTouchStart(label) {
    isLongPress.current = false;
    longPressTimer.current = setTimeout(() => {
      isLongPress.current = true;
      setActiveTooltip(label);
    }, LONG_PRESS_DURATION);
  }

  /**
   * Clears long press timer.
   */
  function handleTouchEnd() {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  }

  /**
   * Prevents navigation if long press was triggered.
   *
   * @param {Event} e - The click event
   */
  function handleClick(e) {
    if (isLongPress.current) {
      e.preventDefault();
      isLongPress.current = false;
    }
  }

  return (
    <div
      className="fixed left-1 top-1/2 z-30 flex -translate-y-1/2 flex-col items-center gap-2 rounded-xl px-1.5 py-2 md:left-5 md:gap-3 md:rounded-2xl md:px-2.5 md:py-3 md:backdrop-blur-sm"
      data-social-sidebar
      style={{ backgroundColor: 'color-mix(in srgb, var(--color-text) 5%, transparent)' }}
    >
      {needsPagination && (
        <button
          className={`group relative text-[var(--color-primary)] transition-all ${canUp ? 'opacity-60 hover:opacity-100' : 'pointer-events-none opacity-0'}`}
          onClick={() => setOffset(o => Math.max(0, o - 1))}
          tabIndex={canUp ? 0 : -1}
        >
          <ChevronUpIcon className="size-4 md:size-4" />
          <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-lg bg-[var(--color-text)] px-2.5 py-1 text-xs text-[var(--color-bg)] opacity-0 transition-opacity group-hover:opacity-100 md:block">
            More
          </span>
        </button>
      )}

      <div className="flex flex-col gap-2 md:gap-3">
        {visible.map(social => {
          const Icon = getSocialIcon(social.label);
          const isTooltipVisible = activeTooltip === social.label;
          return (
            <a
              className="group relative flex size-8 items-center justify-center rounded-lg text-[var(--color-text)] opacity-60 transition-all hover:text-[var(--color-primary)] hover:opacity-100 md:size-10 md:rounded-xl"
              href={social.url}
              key={social.label}
              onClick={handleClick}
              onTouchEnd={handleTouchEnd}
              onTouchStart={() => handleTouchStart(social.label)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon className="size-5 md:size-5" />
              {/* Mobile tooltip */}
              <span
                className={`pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-lg bg-[var(--color-text)] px-2.5 py-1 text-xs text-[var(--color-bg)] transition-opacity md:hidden ${isTooltipVisible ? 'opacity-100' : 'opacity-0'}`}
              >
                {social.label}
              </span>
              {/* Desktop tooltip */}
              <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-lg bg-[var(--color-text)] px-2.5 py-1 text-xs text-[var(--color-bg)] opacity-0 transition-opacity group-hover:opacity-100 md:block">
                {social.label}
              </span>
            </a>
          );
        })}
      </div>

      {needsPagination && (
        <button
          className={`group relative text-[var(--color-primary)] transition-all ${canDown ? 'opacity-60 hover:opacity-100' : 'pointer-events-none opacity-0'}`}
          onClick={() => setOffset(o => Math.min(socials.length - PER_PAGE, o + 1))}
          tabIndex={canDown ? 0 : -1}
        >
          <ChevronDownIcon className="size-4 md:size-4" />
          <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-lg bg-[var(--color-text)] px-2.5 py-1 text-xs text-[var(--color-bg)] opacity-0 transition-opacity group-hover:opacity-100 md:block">
            More
          </span>
        </button>
      )}
    </div>
  );
}

SocialsSidebar.propTypes = {
  socials: PropTypes.array.isRequired,
};
