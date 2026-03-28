// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import './App.css';
import { Layout } from './components/Layout';
import { AppStateProvider } from './context/AppStateProvider';
import { useAppState } from './hooks/useAppState';
import { ErrorPage } from './pages/ErrorPage';
import { PortfolioPage } from './pages/PortfolioPage';

/**
 * Main application component.
 * Wraps the app in AppStateProvider for global state access.
 *
 * @returns {JSX.Element} The rendered App component
 */
function App() {
  return (
    <AppStateProvider>
      <AppContent />
    </AppStateProvider>
  );
}

/**
 * Inner app component that consumes the app state context.
 * Renders PortfolioPage or ErrorPage based on profile loading status.
 *
 * @returns {JSX.Element|null} The rendered content
 */
function AppContent() {
  const { envConfig, isLoading, profile } = useAppState();

  if (isLoading) {
    return null;
  }

  return (
    <Layout>
      {profile ? <PortfolioPage profile={profile} /> : <ErrorPage envConfig={envConfig} />}
    </Layout>
  );
}

export default App;
