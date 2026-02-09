import PropTypes from 'prop-types';

import { SectionHeading } from '@/components/ui/SectionHeading';

/**
 * Skills section — skills grouped by category with pill tags.
 *
 * @param {object} props - Component props
 * @param {object} props.skills - Skills data ({ displayText, items })
 * @returns {JSX.Element|null} The rendered skills section
 */
export function Skills({ skills }) {
  const { displayText, items = [] } = skills ?? {};
  const groups = groupByCategory(items);
  const categories = [...groups.entries()];
  if (categories.length === 0) return null;

  return (
    <section id="skills">
      <SectionHeading text={displayText} />
      <div className="space-y-5">
        {categories.map(([category, names]) => (
          <div key={category}>
            <p className="mb-2 text-[10px] uppercase tracking-widest opacity-25">{category}</p>
            <div className="flex flex-wrap gap-2">
              {names.map(name => (
                <span
                  className="cursor-default rounded-full px-4 py-1.5 text-sm text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-white"
                  key={name}
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, transparent)',
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Skills.propTypes = {
  skills: PropTypes.object.isRequired,
};

/**
 * Groups visible skills by their category.
 *
 * @param {Array} items - The skill items array
 * @returns {object} Map of category name to array of skill names
 */
function groupByCategory(items) {
  const map = new Map();
  for (const s of items) {
    if (!s.visible) continue;
    const cat = s.category || 'Other';
    if (!map.has(cat)) map.set(cat, []);
    map.get(cat).push(s.name);
  }
  return map;
}
