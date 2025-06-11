import { Outlet } from 'react-router';
import Header from '../../features/header/Header';

/**
 * Root layout component that provides the basic structure for all pages.
 *
 * This component renders a consistent layout with a header and main content area.
 * It uses the Outlet component from React Router to render nested route components
 * within the main content area.
 *
 * @returns A React element representing the application's root layout structure
 */
function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
