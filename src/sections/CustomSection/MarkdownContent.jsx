// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

/**
 * MarkdownContent — renders markdown text with styled components.
 *
 * @param {object} props - Component props
 * @param {string} props.content - The markdown content to render
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element|null} The rendered markdown content
 */
export function MarkdownContent({ className = '', content }) {
  if (!content) return null;

  return (
    <div className={`max-w-none ${className}`}>
      <ReactMarkdown
        components={{
          a: ({ children, href }) => (
            <a
              className="break-words text-[var(--color-primary)] hover:underline"
              href={href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {children}
            </a>
          ),
          h1: ({ children }) => (
            <h1 className="mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="mb-2 text-lg font-bold sm:mb-3 sm:text-xl">{children}</h2>
          ),
          h3: ({ children }) => <h3 className="mb-2 text-base font-bold sm:text-lg">{children}</h3>,
          ol: ({ children }) => (
            <ol className="list-inside list-decimal space-y-1.5 opacity-70 sm:space-y-2">
              {children}
            </ol>
          ),
          p: ({ children }) => (
            <p className="mb-3 leading-relaxed opacity-70 sm:mb-4">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-inside list-disc space-y-1.5 opacity-70 sm:space-y-2">
              {children}
            </ul>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

MarkdownContent.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
};
