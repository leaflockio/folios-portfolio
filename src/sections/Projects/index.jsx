import { getProjectFallback } from '@/components/ui/icons/fallbackIcons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import PropTypes from 'prop-types';

/**
 * Projects section — project cards with image or fallback icon,
 * hover overlay for links, and tech tags.
 *
 * @param {object} props - Component props
 * @param {object} props.projects - Projects data ({ displayText, items })
 * @returns {JSX.Element|null} The rendered projects section
 */
export function Projects({ projects }) {
  const { displayText, items = [] } = projects ?? {};
  const visible = items.filter(p => p.visible);
  if (visible.length === 0) return null;

  return (
    <section id="projects">
      <SectionHeading text={displayText} />
      <div className="space-y-12">
        {visible.map((project, i) => {
          const hasImage = project.image && project.image.length > 0;
          const FallbackIcon = getProjectFallback(i);

          return (
            <div className="group" key={project.title}>
              {/* Image or fallback */}
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                {hasImage ? (
                  <img
                    alt={project.title}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={project.image[0]}
                  />
                ) : (
                  <div className="bg-[var(--color-text)]/5 flex size-full items-center justify-center">
                    <FallbackIcon className="size-16 opacity-20" />
                  </div>
                )}
                {/* Hover overlay with links */}
                {project.links.length > 0 && (
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex gap-3">
                      {project.links.map(link => (
                        <a
                          className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-transform hover:scale-105"
                          href={link.url}
                          key={link.label}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Title, description, tags */}
              <div className="mt-4 space-y-2">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                {project.description && (
                  <p className="leading-relaxed opacity-50">{project.description}</p>
                )}
                {project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        className="border-b border-current pb-0.5 text-[10px] uppercase tracking-wider opacity-30"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
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

Projects.propTypes = {
  projects: PropTypes.object.isRequired,
};
