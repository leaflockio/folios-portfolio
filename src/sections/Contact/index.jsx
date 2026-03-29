// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import PropTypes from 'prop-types';

import { ArrowLeftIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@/components/ui/icons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatusBadge } from '@/components/ui/StatusBadge';

/**
 * Contact section — email, phone, availability, and resume.
 *
 * @param {object} props - Component props
 * @param {object} props.contact - Contact data (displayText, email, phone, resume)
 * @param {object} [props.location] - Location data (city, region)
 * @returns {JSX.Element|null} The rendered contact section
 */
export function Contact({ contact, location }) {
  if (!contact) return null;

  const { city, region } = location ?? {};
  const phoneNumber = contact.phone ? `${contact.phone.countryCode} ${contact.phone.number}` : null;

  return (
    <section className="py-12 sm:py-16" id="contact">
      <SectionHeading text={contact.displayText} />
      <div className="mx-auto max-w-lg text-center">
        {/* Headline */}
        {contact.headline && (
          <h2 className="mb-6 text-2xl font-black sm:text-3xl md:text-4xl">{contact.headline}</h2>
        )}

        {/* Location */}
        {(city || region) && (
          <p className="mb-6 flex flex-wrap items-center justify-center gap-1.5 text-sm opacity-40">
            <span>You can find me in</span>
            <MapPinIcon className="size-4 text-[var(--color-primary)] opacity-100" />
            <span className="font-semibold text-[var(--color-primary)] opacity-100">
              {[city, region].filter(Boolean).join(', ')}
            </span>
          </p>
        )}

        {/* Email */}
        {contact.email && (
          <p className="mb-4 flex flex-wrap items-center justify-center gap-1.5 text-sm opacity-40">
            <span>Reach me at</span>
            <EnvelopeIcon className="size-4 text-[var(--color-primary)] opacity-100" />
            <a
              className="break-all font-semibold text-[var(--color-primary)] opacity-100 transition-colors hover:underline"
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </a>
          </p>
        )}

        {/* Phone */}
        {phoneNumber && (
          <p className="mb-4 flex flex-wrap items-center justify-center gap-1.5 text-sm opacity-40">
            <span>Or call me at</span>
            <PhoneIcon className="size-4 text-[var(--color-primary)] opacity-100" />
            <a
              className="font-semibold text-[var(--color-primary)] opacity-100 transition-colors hover:underline"
              href={`tel:${contact.phone.countryCode}${contact.phone.number}`}
            >
              {phoneNumber}
            </a>
          </p>
        )}

        {/* Availability & Status Badges */}
        {contact.availability?.length > 0 && (
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {contact.availability.map(badge => (
              <StatusBadge
                color={badge.color}
                key={badge.text}
                pulse={badge.pulse}
                text={badge.text}
              />
            ))}
          </div>
        )}

        {/* Resume Button */}
        {contact.resume && (
          <div className="mb-6">
            <a
              className="inline-block rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
              href={contact.resume}
              rel="noopener noreferrer"
              target="_blank"
            >
              Download Resume
            </a>
          </div>
        )}

        {/* Social Bar Reference */}
        <p className="flex items-center justify-center gap-1.5 text-sm opacity-40">
          <ArrowLeftIcon className="size-4" />
          <span>Find me on socials</span>
        </p>
      </div>
    </section>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  location: PropTypes.object,
};
