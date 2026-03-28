// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import { z } from 'zod';

// ── Safe URL validator (blocks javascript:, data:, file: protocols) ──

const safeUrl = z
  .string()
  .url()
  .refine(url => /^https?:\/\//i.test(url), {
    message: 'URL must use http or https protocol',
  });

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
  url: safeUrl,
});

const projectLinkSchema = z.object({
  label: z.string().min(1),
  type: z.enum(['demo', 'github', 'gitlab', 'bitbucket', 'codepen', 'codesandbox']).optional(),
  url: safeUrl,
});

// ── Section item schemas ──

const descriptionSchema = z
  .object({
    content: z.string().min(1, 'Description content is required'),
    format: z.enum(['text', 'markdown']).default('text'),
  })
  .optional();

const experienceItemSchema = z.object({
  company: z.string().min(1, 'Company name is required'),
  description: descriptionSchema,
  endDate: z.string().nullable().optional(),
  location: locationSchema.nullable().optional(),
  logo: safeUrl.nullable().optional(),
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
  link: safeUrl.nullable().optional(),
  year: z.string().optional(),
});

const educationItemSchema = z.object({
  courses: z.array(courseSchema).optional().default([]),
  degree: z.string().optional(),
  endDate: z.string().optional(),
  field: z.string().optional(),
  grade: z.string().optional(),
  institution: z.string().min(1, 'Institution name is required'),
  link: safeUrl.optional(),
  location: locationSchema.nullable().optional(),
  logo: safeUrl.nullable().optional(),
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
  image: z.array(safeUrl).optional().default([]),
  links: z.array(projectLinkSchema).optional().default([]),
  order: z.number().int().optional(),
  tags: z.array(z.string()).optional().default([]),
  title: z.string().min(1, 'Project title is required'),
  visible: z.boolean().default(true),
});

const certificationItemSchema = z.object({
  badge: safeUrl.nullable().optional(),
  date: z.string().optional(),
  issuer: z.string().min(1, 'Issuer is required'),
  link: safeUrl.optional(),
  name: z.string().min(1, 'Certification name is required'),
  order: z.number().int().optional(),
  visible: z.boolean().default(true),
});

// ── Custom section schemas ──

const customSectionItemSchema = z.object({
  date: z.string().optional(),
  description: z.string().optional(),
  image: safeUrl.optional(),
  link: z
    .object({
      label: z.string().default('Learn more'),
      url: safeUrl,
    })
    .optional(),
  tags: z.array(z.string()).optional().default([]),
  title: z.string().optional(),
});

const customSectionSchema = z
  .object({
    columns: z.number().min(1).max(4).optional(),
    content: z.string().optional(),
    contentFormat: z.enum(['text', 'markdown']).optional().default('markdown'),
    icon: z.string().optional(),
    items: z.array(customSectionItemSchema).optional().default([]),
    itemsPerPage: z.number().int().min(1).max(20).optional(),
    pagination: z.enum(['none', 'expand', 'paginate']).optional().default('none'),
    title: z.string().min(1, 'Section title is required'),
    type: z.enum(['text', 'list', 'cards', 'gallery', 'timeline']).default('text'),
    visible: z.boolean().default(true),
  })
  .refine(
    data => {
      if (data.type === 'text') {
        return data.content && data.content.length > 0;
      }
      return data.items && data.items.length > 0;
    },
    {
      message: "Text sections require 'content', other types require 'items'",
    },
  );

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
  avatar: safeUrl.optional().or(z.literal('')),
  bio: z.string().optional(),
  displayName: z
    .string()
    .max(24, 'Display name must be 24 characters or less for best layout')
    .optional(),
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
  resume: safeUrl.optional(),
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
  skills: sectionOf(skillItemSchema)
    .extend({
      categoryOrder: z.array(z.string()).optional().default([]),
    })
    .optional(),
});
