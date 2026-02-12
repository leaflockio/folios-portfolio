import PropTypes from 'prop-types';

import { SectionHeading } from '@/components/ui/SectionHeading';

import { CardsSection, GallerySection, ListSection, TextSection, TimelineSection } from './types';

const TYPE_COMPONENTS = new Map([
  ['cards', CardsSection],
  ['gallery', GallerySection],
  ['list', ListSection],
  ['text', TextSection],
  ['timeline', TimelineSection],
]);

/**
 * CustomSection — renders a custom section with the appropriate type component.
 *
 * @param {object} props - Component props
 * @param {object} props.section - The custom section data
 * @returns {JSX.Element|null} The rendered custom section
 */
export function CustomSection({ section }) {
  const { title, type = 'text', visible = true } = section;

  if (!visible) return null;

  const TypeComponent = TYPE_COMPONENTS.get(type) || TextSection;
  const sectionId = `custom-${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <section id={sectionId}>
      <SectionHeading text={title} />
      <TypeComponent section={section} />
    </section>
  );
}

CustomSection.propTypes = {
  section: PropTypes.shape({
    columns: PropTypes.number,
    content: PropTypes.string,
    icon: PropTypes.string,
    items: PropTypes.array,
    itemsPerPage: PropTypes.number,
    pagination: PropTypes.oneOf(['none', 'expand', 'paginate']),
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'list', 'cards', 'gallery', 'timeline']),
    visible: PropTypes.bool,
  }).isRequired,
};
