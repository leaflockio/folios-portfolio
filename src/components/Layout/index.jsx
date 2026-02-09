import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { appState } from '@/context/validate';
import { useAppState } from '@/hooks/useAppState';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useDynamicFavicon } from '@/hooks/useDynamicFavicon';
import log from '@/utils/logger';

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

  const mainClasses = 'flex min-h-screen flex-col bg-[var(--color-bg)] text-[var(--color-text)]';

  return (
    <div className={mainClasses}>
      <ThemeSelector />
      <main className="flex-1">{children}</main>
      <footer className="fixed inset-x-0 bottom-0 z-20">
        <div className="bg-[var(--color-bg)] py-4 text-center text-xs transition-colors duration-300">
          <span className="opacity-25">
            © {currentYear} {copyright.prefix ? `${copyright.prefix} ` : ''}
            {copyright.name}
            {copyright.suffix ? ` ${copyright.suffix}` : ''} · v{appVersion}
          </span>
        </div>
        {isPreview && (
          <div
            className="py-2 text-center text-xs"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-bg)',
            }}
          >
            Test Environment - Data is simulated
          </div>
        )}
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
