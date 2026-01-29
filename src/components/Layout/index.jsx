import { appState } from '@/context/validate';
import { useAppState } from '@/hooks/useAppState';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useDynamicFavicon } from '@/hooks/useDynamicFavicon';
import log from '@/utils/logger';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { ThemeSelector } from '../ThemeSelector';

const { copyright } = appState;
const currentYear = new Date().getFullYear();
const appVersion = __APP_VERSION__;
const isPreview = import.meta.env.MODE !== 'production';

/**
 * Main layout wrapper component.
 * Handles dynamic favicon based on theme and renders ThemeSelector.
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Content to render within the layout
 * @returns {JSX.Element} The rendered layout
 */
export function Layout({ children }) {
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');

  // Log layout mount with version
  useEffect(() => {
    log.info(`[App] Data-Driven Portfolio v${appVersion}`);
    log.debug('[Layout] Mounted');
    return () => log.debug('[Layout] Unmounted');
  }, []);

  // Track theme's primary color for dynamic favicon
  useEffect(() => {
    /**
     * Updates primary color from CSS variable.
     */
    function updateColor() {
      const color = getComputedStyle(document.documentElement)
        .getPropertyValue('--color-primary')
        .trim();
      if (color) {
        log.debug('[Layout] Primary color updated:', color);
        setPrimaryColor(color);
      }
    }

    updateColor();

    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, {
      attributeFilter: ['class'],
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  // Set dynamic favicon based on theme color
  useDynamicFavicon(primaryColor);

  // Set dynamic document title based on profile
  const { profile } = useAppState();
  useDocumentTitle(profile);

  const mainClasses = [
    'min-h-screen',
    'bg-[var(--color-bg)] text-[var(--color-text)]',
    'transition-colors duration-300',
  ].join(' ');

  const copyrightClasses = [
    'fixed left-1/2 -translate-x-1/2',
    'text-xs text-[var(--color-text)] opacity-40',
    isPreview ? 'bottom-6' : 'bottom-4',
  ].join(' ');

  return (
    <>
      <ThemeSelector />
      <main className={mainClasses}>{children}</main>
      <div className={copyrightClasses}>
        © {currentYear} {copyright.name} · v{appVersion}
      </div>
      {isPreview && (
        <div
          className="fixed inset-x-0 bottom-0 py-1 text-center text-xs"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)',
            color: 'var(--color-primary)',
          }}
        >
          Test Environment - Data is simulated
        </div>
      )}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
