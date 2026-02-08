import { ChevronDownIcon, ChevronUpIcon } from '@/components/ui/icons';
import { getSectionIcon } from '@/components/ui/icons/sectionIcons';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';

const PER_PAGE = 5;

/**
 * Right sidebar — section navigation with icons.
 * On mobile: single button with dropdown showing all sections.
 * On desktop: paginated icon list with arrows.
 *
 * @param {object} props - Component props
 * @param {object} props.profile - Full profile data (needs cross-section info)
 * @returns {JSX.Element|null} The rendered section nav
 */
export function SectionNav({ profile }) {
  const [offset, setOffset] = useState(0);
  const [activeId, setActiveId] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const SECTION_LABELS = useMemo(
    () =>
      new Map([
        ['certifications', profile.certifications?.displayText || 'Certifications'],
        ['contact', profile.contact?.displayText || 'Contact'],
        ['education', profile.education?.displayText || 'Education'],
        ['experience', profile.experience?.displayText || 'Experience'],
        ['projects', profile.projects?.displayText || 'Projects'],
        ['skills', profile.skills?.displayText || 'Skills'],
      ]),
    [profile],
  );

  const sections = useMemo(() => {
    const sectionOrder = profile.sectionOrder ?? [];
    const customSections = (profile.customSections ?? []).filter(s => s.visible);

    return [
      { id: 'hero', label: 'Home' },
      ...sectionOrder.flatMap(key => {
        if (key === 'customSections') {
          return customSections.map(s => ({
            id: `custom-${s.title.toLowerCase()}`,
            label: s.title,
          }));
        }
        return [{ id: key, label: SECTION_LABELS.get(key) || key }];
      }),
    ];
  }, [profile, SECTION_LABELS]);

  // Track active section via Intersection Observer
  useEffect(() => {
    if (sections.length === 0) return;

    const ids = sections.map(s => s.id);
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean);

    if (elements.length === 0) return;

    const visibleSet = new Map();

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSet.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSet.delete(entry.target.id);
          }
        }

        // Pick the first visible section in document order
        for (const id of ids) {
          if (visibleSet.has(id)) {
            setActiveId(id);
            break;
          }
        }
      },
      { threshold: [0, 0.1, 0.25, 0.5] },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [sections]);

  // Auto-center the active item in the visible window (desktop only)
  useEffect(() => {
    const idx = sections.findIndex(s => s.id === activeId);
    if (idx === -1) return;
    const maxOffset = Math.max(0, sections.length - PER_PAGE);
    const centered = Math.max(0, Math.min(idx - Math.floor(PER_PAGE / 2), maxOffset));
    setOffset(centered);
  }, [activeId, sections]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mobileMenuOpen) return;

    /**
     * Closes the mobile menu when clicking outside.
     *
     * @param {MouseEvent} e - The mouse event
     */
    function handleClickOutside(e) {
      if (!e.target.closest('[data-section-nav]')) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  if (sections.length === 0) return null;

  const activeIdx = sections.findIndex(s => s.id === activeId);
  const hasPrev = activeIdx > 0;
  const hasNext = activeIdx < sections.length - 1;
  const visible = sections.slice(offset, offset + PER_PAGE);
  const ActiveIcon = getSectionIcon(activeId);

  /**
   * Scrolls to the section with the given id.
   *
   * @param {string} id - The section element id
   */
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  }

  return (
    <>
      {/* Mobile: Single button with dropdown */}
      <div className="fixed right-2 top-14 z-30 md:hidden" data-section-nav>
        <button
          aria-label="Navigate sections"
          className="flex size-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-lg transition-transform hover:scale-105"
          onClick={() => setMobileMenuOpen(o => !o)}
        >
          <ActiveIcon className="size-4" />
        </button>

        {mobileMenuOpen && (
          <div className="absolute right-0 mt-2 flex flex-col gap-1.5 rounded-xl bg-[var(--color-bg)] p-2 shadow-xl">
            {sections.map(section => {
              const Icon = getSectionIcon(section.id);
              const isActive = section.id === activeId;
              return (
                <button
                  className={`flex size-8 items-center justify-center rounded-lg transition-all ${
                    isActive ? 'text-[var(--color-primary)]' : 'opacity-50 hover:opacity-100'
                  }`}
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  style={
                    isActive
                      ? {
                          backgroundColor:
                            'color-mix(in srgb, var(--color-primary) 15%, transparent)',
                        }
                      : undefined
                  }
                >
                  <Icon className="size-4" />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop: Full sidebar with pagination */}
      <div
        className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 rounded-2xl px-2.5 py-3 backdrop-blur-sm md:flex"
        style={{ backgroundColor: 'color-mix(in srgb, var(--color-text) 5%, transparent)' }}
      >
        <button
          className={`group relative text-[var(--color-primary)] transition-all ${hasPrev ? 'opacity-60 hover:opacity-100' : 'pointer-events-none opacity-0'}`}
          onClick={() => hasPrev && scrollTo(sections[activeIdx - 1].id)}
          tabIndex={hasPrev ? 0 : -1}
        >
          <ChevronUpIcon className="size-4" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[var(--color-text)] px-2.5 py-1 text-xs text-[var(--color-bg)] opacity-0 transition-opacity group-hover:opacity-100">
            Previous
          </span>
        </button>

        <div className="flex flex-col gap-3">
          {visible.map(section => {
            const Icon = getSectionIcon(section.id);
            const isActive = section.id === activeId;
            return (
              <button
                className={`group relative flex size-10 items-center justify-center rounded-xl transition-all ${
                  isActive
                    ? 'text-[var(--color-primary)] opacity-100'
                    : 'opacity-60 hover:text-[var(--color-primary)] hover:opacity-100'
                }`}
                key={section.id}
                onClick={() => scrollTo(section.id)}
                style={
                  isActive
                    ? {
                        backgroundColor:
                          'color-mix(in srgb, var(--color-primary) 15%, transparent)',
                      }
                    : undefined
                }
              >
                <Icon className="size-5" />
                <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[var(--color-text)] px-2.5 py-1 text-xs text-[var(--color-bg)] opacity-0 transition-opacity group-hover:opacity-100">
                  {section.label}
                </span>
              </button>
            );
          })}
        </div>

        <button
          className={`group relative text-[var(--color-primary)] transition-all ${hasNext ? 'opacity-60 hover:opacity-100' : 'pointer-events-none opacity-0'}`}
          onClick={() => hasNext && scrollTo(sections[activeIdx + 1].id)}
          tabIndex={hasNext ? 0 : -1}
        >
          <ChevronDownIcon className="size-4" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[var(--color-text)] px-2.5 py-1 text-xs text-[var(--color-bg)] opacity-0 transition-opacity group-hover:opacity-100">
            Next
          </span>
        </button>
      </div>
    </>
  );
}

SectionNav.propTypes = {
  profile: PropTypes.object.isRequired,
};
