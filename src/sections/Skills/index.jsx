import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { ExpandableList } from '@/components/ui/ExpandableList';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillPill } from '@/components/ui/SkillPill';

const SKILLS_LIMIT_MOBILE = 6;
const SKILLS_LIMIT_DESKTOP = 10;

/**
 * Skills section — skills grouped by category with pill tags.
 * Supports category ordering via `categoryOrder` array.
 *
 * @param {object} props - Component props
 * @param {object} props.skills - Skills data ({ displayText, items, categoryOrder })
 * @returns {JSX.Element|null} The rendered skills section
 */
export function Skills({ skills }) {
  const { categoryOrder = [], displayText, items = [] } = skills ?? {};
  const groups = groupByCategory(items);
  const categories = sortCategories([...groups.entries()], categoryOrder);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (categories.length === 0) return null;

  const skillsLimit = isMobile ? SKILLS_LIMIT_MOBILE : SKILLS_LIMIT_DESKTOP;

  return (
    <section id="skills">
      <SectionHeading text={displayText} />
      <div className="space-y-4 sm:space-y-5">
        {categories.map(([category, names]) => (
          <div key={category}>
            <p className="mb-1.5 text-[10px] uppercase tracking-widest opacity-25 sm:mb-2">
              {category}
            </p>
            <ExpandableList
              className="flex flex-wrap gap-1.5 sm:gap-2"
              items={names}
              limit={skillsLimit}
              renderItem={name => <SkillPill key={name}>{name}</SkillPill>}
              toggleClassName="px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm"
            />
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
 * @returns {Map} Map of category name to array of skill names
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

/**
 * Sorts categories based on categoryOrder array.
 * Categories in the order array come first, rest follow in original order.
 *
 * @param {Array} categories - Array of [category, skills] entries
 * @param {Array} order - Array of category names defining the order
 * @returns {Array} Sorted array of [category, skills] entries
 */
function sortCategories(categories, order) {
  if (!order || order.length === 0) return categories;

  const orderMap = new Map(order.map((cat, idx) => [cat, idx]));

  return categories.sort((a, b) => {
    const orderA = orderMap.has(a[0]) ? orderMap.get(a[0]) : Infinity;
    const orderB = orderMap.has(b[0]) ? orderMap.get(b[0]) : Infinity;
    return orderA - orderB;
  });
}
