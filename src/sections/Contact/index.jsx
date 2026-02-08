import { SectionHeading } from '@/components/ui/SectionHeading';
import PropTypes from 'prop-types';

/**
 * Contact section — centered email CTA with resume button.
 *
 * @param {object} props - Component props
 * @param {object} props.contact - Contact data (displayText, email, resume)
 * @param {object} [props.location] - Location data (city, region)
 * @returns {JSX.Element|null} The rendered contact section
 */
export function Contact({ contact, location }) {
  if (!contact) return null;

  const { city, region } = location ?? {};

  return (
    <section className="py-16 text-center" id="contact">
      <SectionHeading text={contact.displayText} />
      {(city || region) && (
        <p className="mb-4 text-sm opacity-40">{[city, region].filter(Boolean).join(', ')}</p>
      )}
      {contact.email && (
        <a
          className="text-3xl font-black transition-colors hover:text-[var(--color-primary)] md:text-4xl"
          href={`mailto:${contact.email}`}
        >
          {contact.email}
        </a>
      )}
      {contact.resume && (
        <div className="mt-6 flex justify-center gap-4">
          <a
            className="rounded-full bg-[var(--color-primary)] px-5 py-2 text-sm text-white transition-transform hover:scale-105 active:scale-95"
            href={contact.resume}
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume
          </a>
        </div>
      )}
    </section>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  location: PropTypes.object,
};
