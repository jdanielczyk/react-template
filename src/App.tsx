import { Outlet } from 'react-router';
import './App.css';
import Header from './features/header/Header';

/**
 * Root application component that defines the basic structure of the app.
 *
 * This component sets up the main layout of the application with a header
 * and a main content area. It utilizes React Router's Outlet component
 * to render child routes in the main section.
 *
 * @returns The rendered application structure with header and dynamic content area
 */
function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
