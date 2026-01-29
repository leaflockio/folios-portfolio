import { useEffect } from 'react';

/**
 * Hook to dynamically set the document title based on profile data.
 * Sets "{firstName} - {currentRole}" if a current role exists,
 * otherwise just "{firstName}". Falls back to the default HTML title
 * when no profile is provided.
 *
 * @param {object|null} profile - The validated profile data
 */
export function useDocumentTitle(profile) {
  useEffect(() => {
    if (!profile) return;

    const { firstName } = profile.basics;
    const currentRole = profile.experience?.items?.find(e => e.visible && !e.endDate)?.role;

    document.title = currentRole ? `${firstName} - ${currentRole}` : firstName;
  }, [profile]);
}
