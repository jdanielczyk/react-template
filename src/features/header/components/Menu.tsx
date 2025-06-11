/**
 * Navigation menu component that displays links to different routes in the application.
 * Renders a horizontal navigation bar with links to Home and About pages.
 *
 * @returns A navigation element containing NavLink components for site navigation.
 * @example
 * ```tsx
 * <Menu />
 * ```
 */
import { NavLink } from 'react-router';

function Menu() {
  return (
    <nav className="flex gap-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/todos">Todos</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default Menu;
