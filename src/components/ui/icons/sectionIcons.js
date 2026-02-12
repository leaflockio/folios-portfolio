import {
  AwardIcon,
  BookOpenIcon,
  BriefcaseIcon,
  CodeIcon,
  EnvelopeIcon,
  FolderCodeIcon,
  GlobeIcon,
  HomeIcon,
  LayersIcon,
  LightbulbIcon,
  MedalIcon,
  ShieldIcon,
  SlidersIcon,
  StarIcon,
  TrophyIcon,
} from './index';

const SECTION_ICON_MAP = new Map([
  // Custom section icon options (alphabetical for linting)
  ['award', AwardIcon],
  ['book', BookOpenIcon],
  ['briefcase', BriefcaseIcon],
  ['certifications', AwardIcon],
  ['code', CodeIcon],
  ['contact', EnvelopeIcon],
  ['education', BookOpenIcon],
  ['experience', BriefcaseIcon],
  ['folder', FolderCodeIcon],
  ['globe', GlobeIcon],
  ['hero', HomeIcon],
  ['layers', LayersIcon],
  ['lightbulb', LightbulbIcon],
  ['medal', MedalIcon],
  ['projects', FolderCodeIcon],
  ['shield', ShieldIcon],
  ['skills', SlidersIcon],
  ['star', StarIcon],
  ['trophy', TrophyIcon],
]);

/**
 * Returns the icon component for a section key.
 * Falls back to LayersIcon for custom or unknown sections.
 *
 * @param {string} sectionKey - The section key (e.g. "experience", "skills")
 * @param {string} [customIcon] - Optional custom icon name override
 * @returns {Function} The matching icon component
 */
export function getSectionIcon(sectionKey, customIcon) {
  // If custom icon is provided, try that first
  if (customIcon) {
    const customIconComponent = SECTION_ICON_MAP.get(customIcon.toLowerCase());
    if (customIconComponent) return customIconComponent;
  }

  return SECTION_ICON_MAP.get(sectionKey) || LayersIcon;
}
