// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import PropTypes from 'prop-types';

import { MarkdownContent } from '../MarkdownContent';

/**
 * TextSection — renders text or markdown content for text-type custom sections.
 *
 * @param {object} props - Component props
 * @param {object} props.section - The custom section data
 * @returns {JSX.Element} The rendered text section
 */
export function TextSection({ section }) {
  const { content, contentFormat = 'markdown' } = section;

  if (contentFormat === 'text') {
    return <p className="text-base leading-relaxed opacity-70 sm:text-lg">{content}</p>;
  }

  return <MarkdownContent className="text-base sm:text-lg" content={content} />;
}

TextSection.propTypes = {
  section: PropTypes.shape({
    content: PropTypes.string,
    contentFormat: PropTypes.oneOf(['text', 'markdown']),
  }).isRequired,
};
