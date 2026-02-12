import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';

import { ExpandableList } from '@/components/ui/ExpandableList';
import { ExpandableText } from '@/components/ui/ExpandableText';
import {
  BitbucketIcon,
  CodePenIcon,
  CodeSandboxIcon,
  GitHubIcon,
  GitLabIcon,
} from '@/components/ui/icons';
import { Pagination } from '@/components/ui/Pagination';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillPill } from '@/components/ui/SkillPill';
import { Tooltip } from '@/components/ui/Tooltip';

/** Items per page by screen size */
const ITEMS_MOBILE = 2;
const ITEMS_DESKTOP = 4;

/** Limits */
const MAX_TAGS = 4;
const MAX_LINKS = 3;

/** Curated tech-related fallback images from Unsplash */
const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop', // Code on screen
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop', // Laptop code
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop', // Matrix code
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop', // Cybersecurity
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop', // Circuit board
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop', // Code closeup
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop', // Server room
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', // Dashboard
];

/** Platform detection config: { urlPattern, labelPattern, icon, type } */
const PLATFORMS = [
  {
    icon: GitHubIcon,
    labelPattern: /github|source|code/i,
    type: 'github',
    urlPattern: /github\.com/i,
  },
  { icon: GitLabIcon, labelPattern: /gitlab/i, type: 'gitlab', urlPattern: /gitlab\.com/i },
  {
    icon: BitbucketIcon,
    labelPattern: /bitbucket/i,
    type: 'bitbucket',
    urlPattern: /bitbucket\.org/i,
  },
  { icon: CodePenIcon, labelPattern: /codepen/i, type: 'codepen', urlPattern: /codepen\.io/i },
  {
    icon: CodeSandboxIcon,
    labelPattern: /codesandbox|sandbox/i,
    type: 'codesandbox',
    urlPattern: /codesandbox\.io/i,
  },
];

/**
 * Projects section — responsive 2x2 grid with pagination,
 * project cards with images, expandable descriptions, and action links.
 *
 * @param {object} props - Component props
 * @param {object} props.projects - Projects data ({ displayText, items })
 * @returns {JSX.Element|null} The rendered projects section
 */
export function Projects({ projects }) {
  const { displayText, items = [] } = projects ?? {};
  const visible = items.filter(p => p.visible);
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerPage = isMobile ? ITEMS_MOBILE : ITEMS_DESKTOP;

  // Sort by order field if present, then by array index
  const sorted = useMemo(() => {
    return [...visible].sort((a, b) => {
      const orderA = a.order ?? Infinity;
      const orderB = b.order ?? Infinity;
      if (orderA !== orderB) return orderA - orderB;
      return visible.indexOf(a) - visible.indexOf(b);
    });
  }, [visible]);

  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const paginated = sorted.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  // Reset page when items change or screen size changes
  useEffect(() => {
    if (page >= totalPages && totalPages > 0) {
      setPage(totalPages - 1);
    }
  }, [totalPages, page]);

  if (visible.length === 0) return null;

  return (
    <section id="projects">
      <SectionHeading text={displayText} />

      {/* Responsive grid: 1 col mobile, 2 cols desktop */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {paginated.map((project, i) => {
          const globalIndex = page * itemsPerPage + i;
          const hasImage = project.image && project.image.length > 0;
          const imageSrc = hasImage
            ? project.image[0]
            : FALLBACK_IMAGES[globalIndex % FALLBACK_IMAGES.length];
          const allTags = project.tags || [];

          // Process links with limit and separate by type
          const allLinks = (project.links || []).slice(0, MAX_LINKS);
          const processedLinks = allLinks.map(link => ({
            ...link,
            ...detectLinkType(link),
          }));

          // Separate demo links and code platform links
          const demoLinks = processedLinks.filter(l => !l.isCodePlatform);
          const codeLinks = processedLinks.filter(l => l.isCodePlatform);

          return (
            <div
              className="group flex flex-col rounded-2xl md:rounded-3xl"
              key={project.title}
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-text) 3%, transparent)',
              }}
            >
              {/* Project image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  alt={project.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={imageSrc}
                />
              </div>

              {/* Content area - flex column to push links to bottom */}
              <div className="flex flex-1 flex-col p-4 md:p-5">
                {/* Title */}
                <h3 className="text-lg font-bold md:text-xl">{project.title}</h3>

                {/* Description - expandable */}
                {project.description && (
                  <div className="mt-2">
                    <ExpandableText
                      className="text-sm leading-relaxed opacity-50 md:text-base"
                      lineClamp={2}
                      threshold={120}
                    >
                      {project.description}
                    </ExpandableText>
                  </div>
                )}

                {/* Tags with limit */}
                {allTags.length > 0 && (
                  <ExpandableList
                    className="mt-3 flex flex-wrap gap-1.5 sm:gap-2"
                    items={allTags}
                    limit={MAX_TAGS}
                    renderItem={tag => <SkillPill key={tag}>{tag}</SkillPill>}
                    toggleClassName="px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm"
                  />
                )}

                {/* Action links - fixed at bottom */}
                {processedLinks.length > 0 && (
                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
                    {/* Demo/primary links as buttons */}
                    {demoLinks.map((link, idx) => (
                      <a
                        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all hover:scale-105 ${
                          idx === 0
                            ? 'bg-[var(--color-primary)] text-white'
                            : 'border opacity-70 hover:opacity-100'
                        }`}
                        href={link.url}
                        key={link.label}
                        rel="noopener noreferrer"
                        style={
                          idx !== 0
                            ? {
                                borderColor:
                                  'color-mix(in srgb, var(--color-text) 20%, transparent)',
                              }
                            : {}
                        }
                        target="_blank"
                      >
                        {link.label}
                      </a>
                    ))}

                    {/* Code platform links as icons */}
                    {codeLinks.map(link => {
                      const Icon = link.icon;
                      return (
                        <Tooltip
                          className="inline-flex"
                          content={link.label}
                          key={link.label}
                          position="top"
                        >
                          <a
                            aria-label={link.label}
                            className="rounded-full p-2 transition-all hover:scale-110"
                            href={link.url}
                            rel="noopener noreferrer"
                            style={{
                              backgroundColor:
                                'color-mix(in srgb, var(--color-text) 10%, transparent)',
                            }}
                            target="_blank"
                          >
                            <Icon className="size-5" />
                          </a>
                        </Tooltip>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <Pagination
        className="mt-6 md:mt-8"
        onPageChange={setPage}
        page={page}
        totalPages={totalPages}
      />
    </section>
  );
}

/**
 * Detect link type using hybrid approach:
 * 1. Check explicit `type` field from schema
 * 2. Match URL pattern
 * 3. Match label pattern
 * 4. Default to 'demo'
 *
 * @param {object} link - Link object { label, url, type? }
 * @returns {{ type: string, icon: Function|null, isCodePlatform: boolean }}
 */
function detectLinkType(link) {
  // Check explicit type first
  if (link.type) {
    const platform = PLATFORMS.find(p => p.type === link.type);
    if (platform) {
      return { icon: platform.icon, isCodePlatform: true, type: platform.type };
    }
    // Explicit demo type
    if (link.type === 'demo') {
      return { icon: null, isCodePlatform: false, type: 'demo' };
    }
  }

  // Auto-detect from URL
  for (const platform of PLATFORMS) {
    if (platform.urlPattern.test(link.url)) {
      return { icon: platform.icon, isCodePlatform: true, type: platform.type };
    }
  }

  // Auto-detect from label
  for (const platform of PLATFORMS) {
    if (platform.labelPattern.test(link.label)) {
      return { icon: platform.icon, isCodePlatform: true, type: platform.type };
    }
  }

  // Default to demo (non-code platform)
  return { icon: null, isCodePlatform: false, type: 'demo' };
}

Projects.propTypes = {
  projects: PropTypes.object.isRequired,
};
