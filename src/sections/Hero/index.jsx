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

  const greetings = basics.greetings ?? [];
  const hasGreetings = greetings.length > 0;

  useEffect(() => {
    if (greetings.length <= 1) return;
    const id = setInterval(() => {
      setGreetingIndex(i => (i + 1) % greetings.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [greetings.length]);

  const fullName = `${basics.firstName} ${basics.lastName}`;
  const { city, region } = basics.location ?? {};

  return (
    <section className="flex min-h-[80vh] flex-col justify-center space-y-6" id="hero">
      {/* Avatar + Greeting / Name / Location */}
      <div className="flex items-start gap-6">
        {basics.avatar && (
          <img
            alt={fullName}
            className={`${hasGreetings ? 'size-28' : 'size-24'} shrink-0 rounded-2xl object-cover shadow-lg`}
            src={basics.avatar}
          />
        )}
        <div className="flex flex-col justify-center">
          {hasGreetings && (
            <p className="mb-1 text-sm font-medium text-[var(--color-primary)] opacity-70">
              {greetings.at(greetingIndex).text}
            </p>
          )}
          <h1 className="text-5xl font-black leading-[0.9] tracking-tight md:text-6xl">
            {fullName}
          </h1>
          {(city || region) && (
            <p className="mt-2 text-sm opacity-40">{[city, region].filter(Boolean).join(', ')}</p>
          )}
        </div>
      </div>

      {/* Headline pills */}
      {basics.headline.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {basics.headline.map(h => (
            <span
              className="bg-[var(--color-primary)]/10 rounded-full px-3 py-1 text-sm text-[var(--color-primary)]"
              key={h}
            >
              {h}
            </span>
          ))}
        </div>
      )}

      {/* Bio */}
      {basics.bio && <p className="max-w-xl text-xl leading-relaxed opacity-60">{basics.bio}</p>}

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
      </div>
    </section>
  );
}

Hero.propTypes = {
  basics: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
};
