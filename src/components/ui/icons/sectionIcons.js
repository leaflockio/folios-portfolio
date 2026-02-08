import {
  AwardIcon,
  BookOpenIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  FolderCodeIcon,
  HomeIcon,
  LayersIcon,
  SlidersIcon,
} from './index';

const SECTION_ICON_MAP = new Map([
  ['certifications', AwardIcon],
  ['contact', EnvelopeIcon],
  ['education', BookOpenIcon],
  ['experience', BriefcaseIcon],
  ['hero', HomeIcon],
  ['projects', FolderCodeIcon],
  ['skills', SlidersIcon],
]);

/**
 * Returns the icon component for a section key.
 * Falls back to LayersIcon for custom or unknown sections.
 *
 * @param {string} sectionKey - The section key (e.g. "experience", "skills")
 * @returns {Function} The matching icon component
 */
export function getSectionIcon(sectionKey) {
  return SECTION_ICON_MAP.get(sectionKey) || LayersIcon;
}
