// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import {
  BuildingIcon,
  CodeIcon,
  FactoryIcon,
  FolderOpenIcon,
  LandmarkIcon,
  LayoutIcon,
  LightbulbIcon,
  MedalIcon,
  OfficeIcon,
  RosetteIcon,
  ServerIcon,
  ShieldIcon,
  StarIcon,
  TerminalIcon,
  TrophyIcon,
  WarehouseIcon,
} from './index';

const ORG_FALLBACK_ICONS = [BuildingIcon, OfficeIcon, LandmarkIcon, FactoryIcon, WarehouseIcon];

const CERT_FALLBACK_ICONS = [StarIcon, ShieldIcon, TrophyIcon, MedalIcon, RosetteIcon];

const PROJECT_FALLBACK_ICONS = [
  CodeIcon,
  TerminalIcon,
  LayoutIcon,
  LightbulbIcon,
  FolderOpenIcon,
  ServerIcon,
];

/**
 * Returns a fallback icon for a certification by index.
 * Cycles through the pool so adjacent items look different.
 *
 * @param {number} index - The item index in the list
 * @returns {Function} An icon component
 */
export function getCertFallback(index) {
  return CERT_FALLBACK_ICONS.at(index % CERT_FALLBACK_ICONS.length);
}

/**
 * Returns a fallback icon for an organization by index.
 * Cycles through the pool so adjacent items look different.
 *
 * @param {number} index - The item index in the list
 * @returns {Function} An icon component
 */
export function getOrgFallback(index) {
  return ORG_FALLBACK_ICONS.at(index % ORG_FALLBACK_ICONS.length);
}

/**
 * Returns a fallback icon for a project by index.
 * Cycles through the pool so adjacent items look different.
 *
 * @param {number} index - The item index in the list
 * @returns {Function} An icon component
 */
export function getProjectFallback(index) {
  return PROJECT_FALLBACK_ICONS.at(index % PROJECT_FALLBACK_ICONS.length);
}
