import { z } from 'zod';

const locationSchema = z.object({
  city: z.string().optional(),
  country: z.string().optional(),
  region: z.string().optional(),
});

const phoneSchema = z.object({
  countryCode: z.string().regex(/^\+\d{1,4}$/, 'Invalid country code (e.g. +1)'),
  number: z.string().regex(/^[0-9]{7,15}$/, 'Invalid phone number'),
});

const linkSchema = z.object({
  label: z.string().min(1),
  url: z.string().url(),
});

// ── Section item schemas ──

const experienceItemSchema = z.object({
  company: z.string().min(1, 'Company name is required'),
  description: z.string().optional(),
  endDate: z.string().nullable().optional(),
  location: locationSchema.nullable().optional(),
  logo: z.string().url().nullable().optional(),
  role: z.string().min(1, 'Role is required'),
  startDate: z.string().min(1, 'Start date is required'),
  url: z.array(linkSchema).optional().default([]),
  visible: z.boolean().default(true),
  workModel: z.enum(['onSite', 'remote', 'hybrid']).optional(),
});

const courseSchema = z.object({
  course: z.string().min(1),
  description: z.string().optional(),
  grade: z.string().optional(),
  link: z.string().url().nullable().optional(),
  year: z.string().optional(),
});

const educationItemSchema = z.object({
  courses: z.array(courseSchema).optional().default([]),
  degree: z.string().optional(),
  endDate: z.string().optional(),
  field: z.string().optional(),
  grade: z.string().optional(),
  institution: z.string().min(1, 'Institution name is required'),
  location: locationSchema.nullable().optional(),
  logo: z.string().url().nullable().optional(),
  startDate: z.string().optional(),
  visible: z.boolean().default(true),
});

const skillItemSchema = z.object({
  category: z.string().optional(),
  name: z.string().min(1, 'Skill name is required'),
  visible: z.boolean().default(true),
});

const projectItemSchema = z.object({
  description: z.string().optional(),
  image: z.array(z.string().url()).optional().default([]),
  links: z.array(linkSchema).optional().default([]),
  tags: z.array(z.string()).optional().default([]),
  title: z.string().min(1, 'Project title is required'),
  visible: z.boolean().default(true),
});

const certificationItemSchema = z.object({
  badge: z.string().url().nullable().optional(),
  date: z.string().optional(),
  issuer: z.string().min(1, 'Issuer is required'),
  link: z.string().url().optional(),
  name: z.string().min(1, 'Certification name is required'),
  visible: z.boolean().default(true),
});

const customSectionSchema = z.object({
  content: z.string().min(1, 'Section content is required'),
  title: z.string().min(1, 'Section title is required'),
  visible: z.boolean().default(true),
});

// ── Section wrapper (displayText + items) ──

/**
 * Wraps an item schema into a section object with displayText and items.
 *
 * @param {z.ZodType} itemSchema - The Zod schema for individual items in the section
 * @returns {z.ZodObject} A Zod object schema with displayText and items fields
 */
function sectionOf(itemSchema) {
  return z.object({
    displayText: z.string().optional(),
    items: z.array(itemSchema).default([]),
  });
}

// ── Top-level schemas ──

const basicsSchema = z.object({
  avatar: z.string().url().optional().or(z.literal('')),
  bio: z.string().optional(),
  firstName: z.string().min(1, 'First name is required'),
  greetings: z
    .array(
      z.object({
        language: z.string().min(1),
        text: z.string().min(1),
      }),
    )
    .optional()
    .default([]),
  headline: z.array(z.string()).optional().default([]),
  lastName: z.string().min(1, 'Last name is required'),
  location: locationSchema.optional(),
});

const availabilityBadgeSchema = z.object({
  color: z.enum(['green', 'amber', 'teal', 'blue', 'purple', 'red', 'gray']),
  pulse: z.boolean().optional().default(false),
  text: z.string().min(1),
});

const contactSchema = z.object({
  availability: z.array(availabilityBadgeSchema).optional().default([]),
  displayText: z.string().optional(),
  email: z.string().email().optional(),
  headline: z.string().optional(),
  phone: phoneSchema.optional(),
  resume: z.string().url().optional(),
  socials: z.array(linkSchema).optional().default([]),
});

// ── Profile schema ──

export const profileSchema = z.object({
  basics: basicsSchema,
  certifications: sectionOf(certificationItemSchema).optional(),
  contact: contactSchema.optional(),
  customSections: z.array(customSectionSchema).optional().default([]),
  education: sectionOf(educationItemSchema).optional(),
  experience: sectionOf(experienceItemSchema).optional(),
  projects: sectionOf(projectItemSchema).optional(),
  sectionOrder: z
    .array(z.string())
    .optional()
    .default([
      'experience',
      'projects',
      'education',
      'skills',
      'certifications',
      'customSections',
      'contact',
    ]),
  skills: sectionOf(skillItemSchema).optional(),
});
