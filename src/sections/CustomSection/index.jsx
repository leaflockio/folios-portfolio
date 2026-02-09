import PropTypes from 'prop-types';

import { SectionHeading } from '@/components/ui/SectionHeading';

/**
 * CustomSection — renders a single custom section with title and content.
 *
 * @param {object} props - Component props
 * @param {string} props.title - The section title
 * @param {string} props.content - The section content text
 * @returns {JSX.Element} The rendered custom section
 */
export function CustomSection({ content, title }) {
  return (
    <section id={`custom-${title.toLowerCase()}`}>
      <SectionHeading text={title} />
      <p className="text-lg leading-relaxed opacity-50">{content}</p>
    </section>
  );
}

CustomSection.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
