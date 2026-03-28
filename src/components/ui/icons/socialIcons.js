// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import {
  DribbbleIcon,
  GitHubIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedInIcon,
  MediumIcon,
  TwitterIcon,
  YouTubeIcon,
} from './index';

const SOCIAL_ICON_MAP = new Map([
  ['dribbble', DribbbleIcon],
  ['github', GitHubIcon],
  ['instagram', InstagramIcon],
  ['linkedin', LinkedInIcon],
  ['medium', MediumIcon],
  ['twitter', TwitterIcon],
  ['x', TwitterIcon],
  ['youtube', YouTubeIcon],
]);

/**
 * Returns the icon component for a social platform label.
 * Falls back to GlobeIcon for unknown platforms.
 *
 * @param {string} label - The social platform label (e.g. "GitHub", "LinkedIn")
 * @returns {Function} The matching icon component
 */
export function getSocialIcon(label) {
  return SOCIAL_ICON_MAP.get(label.toLowerCase()) || GlobeIcon;
}
