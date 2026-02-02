import { Certifications } from '@/sections/Certifications';
import { Contact } from '@/sections/Contact';
import { CustomSection } from '@/sections/CustomSection';
import { Education } from '@/sections/Education';
import { Experience } from '@/sections/Experience';
import { Hero } from '@/sections/Hero';
import { Projects } from '@/sections/Projects';
import { SectionNav } from '@/sections/SectionNav';
import { Skills } from '@/sections/Skills';
import { SocialsSidebar } from '@/sections/SocialsSidebar';
import PropTypes from 'prop-types';

/**
 * Section wrapper — ensures each section takes at least the full viewport height.
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Section content
 * @returns {JSX.Element} The wrapped section
 */
function Section({ children }) {
  return (
    <div className="flex min-h-screen items-start py-12">
      <div className="w-full">{children}</div>
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

/** @type {Map<string, { Component: Function, propKey: string }>} */
const SECTION_CONFIG = new Map([
  ['certifications', { Component: Certifications, propKey: 'certifications' }],
  ['contact', { Component: Contact, propKey: 'contact' }],
  ['education', { Component: Education, propKey: 'education' }],
  ['experience', { Component: Experience, propKey: 'experience' }],
  ['projects', { Component: Projects, propKey: 'projects' }],
  ['skills', { Component: Skills, propKey: 'skills' }],
]);

/**
 * Portfolio page — renders the hero and all profile sections
 * in the order defined by profile.sectionOrder.
 *
 * @param {object} props - Component props
 * @param {object} props.profile - The validated profile data
 * @returns {JSX.Element} The rendered portfolio page
 */
export function PortfolioPage({ profile }) {
  const sectionOrder = profile.sectionOrder ?? [];
  const customSections = (profile.customSections ?? []).filter(s => s.visible);

  return (
    <div className="mx-auto max-w-4xl px-16 md:px-20">
      <SocialsSidebar socials={profile.contact?.socials ?? []} />
      <SectionNav profile={profile} />
      <div className="flex min-h-screen items-center">
        <div className="w-full py-12">
          <Hero basics={profile.basics} contact={profile.contact} />
        </div>
      </div>
      {sectionOrder.map(key => {
        if (key === 'customSections') {
          return customSections.map(s => (
            <Section key={s.title}>
              <CustomSection content={s.content} title={s.title} />
            </Section>
          ));
        }
        const config = SECTION_CONFIG.get(key);
        if (!config) return null;
        const { Component, propKey } = config;
        return (
          <Section key={key}>
            <Component {...{ [propKey]: profile[propKey] }} />
          </Section>
        );
      })}
    </div>
  );
}

PortfolioPage.propTypes = {
  profile: PropTypes.object.isRequired,
};
