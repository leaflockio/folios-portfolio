import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const ROTATE_INTERVAL_MS = 3000;

/**
 * Hero section — rotating greeting, avatar, name, location, headline pills,
 * bio, and connect buttons.
 *
 * @param {object} props - Component props
 * @param {object} props.basics - Profile basics (name, avatar, headline, etc.)
 * @param {object} props.contact - Contact info (email, resume)
 * @returns {JSX.Element} The rendered hero section
 */
export function Hero({ basics, contact }) {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [bioExpanded, setBioExpanded] = useState(false);

  const greetings = basics.greetings ?? [];
  const headlines = basics.headline ?? [];
  const hasGreetings = greetings.length > 0;

  useEffect(() => {
    if (greetings.length <= 1 && headlines.length <= 1) return;
    const id = setInterval(() => {
      if (greetings.length > 1) setGreetingIndex(i => (i + 1) % greetings.length);
      if (headlines.length > 1) setHeadlineIndex(i => (i + 1) % headlines.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [greetings.length, headlines.length]);

  const fullName = `${basics.firstName} ${basics.lastName}`;

  return (
    <section className="min-h-[80vh] space-y-4 pt-[22vh] sm:space-y-6" id="hero">
      {/* Avatar + Greeting / Name / Headline */}
      <div className="flex items-start gap-4 sm:gap-6">
        {basics.avatar && (
          <img
            alt={fullName}
            className={`${hasGreetings ? 'size-20 sm:size-28' : 'size-16 sm:size-24'} shrink-0 rounded-2xl object-cover shadow-lg`}
            src={basics.avatar}
          />
        )}
        <div className="flex flex-col justify-center">
          {hasGreetings && (
            <p className="mb-1 text-sm font-medium text-[var(--color-primary)] opacity-70">
              {greetings.at(greetingIndex).text}
            </p>
          )}
          <h1 className="text-3xl font-black leading-[0.9] tracking-tight sm:text-5xl md:text-6xl">
            {fullName}
          </h1>
          {headlines.length > 0 && (
            <p className="mt-2 text-base font-medium text-[var(--color-primary)] opacity-70 sm:text-lg">
              {headlines[headlineIndex]}
            </p>
          )}
        </div>
      </div>

      {/* Bio */}
      {basics.bio && (
        <div className="max-w-xl overflow-hidden">
          <p
            className={`text-base leading-relaxed opacity-60 sm:text-xl ${!bioExpanded ? 'line-clamp-3' : 'line-clamp-none'}`}
          >
            {basics.bio}
          </p>
          {basics.bio.length > 150 && (
            <button
              className="mt-1 text-sm text-[var(--color-primary)] opacity-70 transition-opacity hover:opacity-100"
              onClick={() => setBioExpanded(e => !e)}
            >
              {bioExpanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>
      )}

      {/* Connect buttons */}
      <div className="flex flex-wrap gap-2 pt-2">
        {contact.email && (
          <a
            className="rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs text-white transition-transform hover:scale-105"
            href={`mailto:${contact.email}`}
          >
            Email
          </a>
        )}
        {contact.resume && (
          <a
            className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs text-white transition-transform hover:scale-105"
            href={contact.resume}
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume
          </a>
        )}
        <button
          className="rounded-full bg-[var(--color-secondary)] px-3 py-1 text-xs text-white transition-transform hover:scale-105"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get in touch
        </button>
      </div>
    </section>
  );
}

Hero.propTypes = {
  basics: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
};
