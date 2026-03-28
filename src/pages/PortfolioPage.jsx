// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import PropTypes from 'prop-types';

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

/** @type {Map<string, { Component: Function, getProps: Function }>} */
const SECTION_CONFIG = new Map([
  [
    'certifications',
    { Component: Certifications, getProps: p => ({ certifications: p.certifications }) },
  ],
  [
    'contact',
    { Component: Contact, getProps: p => ({ contact: p.contact, location: p.basics?.location }) },
  ],
  ['education', { Component: Education, getProps: p => ({ education: p.education }) }],
  ['experience', { Component: Experience, getProps: p => ({ experience: p.experience }) }],
  ['projects', { Component: Projects, getProps: p => ({ projects: p.projects }) }],
  ['skills', { Component: Skills, getProps: p => ({ skills: p.skills }) }],
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
    <div className="mx-auto max-w-4xl pl-[52px] pr-4 sm:px-12 md:px-20">
      <SocialsSidebar socials={profile.contact?.socials ?? []} />
      <SectionNav profile={profile} />
      <Hero basics={profile.basics} contact={profile.contact} />
      {sectionOrder.map(key => {
        if (key === 'customSections') {
          return customSections.map(s => (
            <Section key={`custom-${s.title}`}>
              <CustomSection section={s} />
            </Section>
          ));
        }
        const config = SECTION_CONFIG.get(key);
        if (!config) return null;
        const { Component, getProps } = config;
        return (
          <Section key={key}>
            <Component {...getProps(profile)} />
          </Section>
        );
      })}
    </div>
  );
}

PortfolioPage.propTypes = {
  profile: PropTypes.object.isRequired,
};
