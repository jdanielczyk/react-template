import { NavLink } from 'react-router';
import type { IRoute } from '../type';

/**
 * Menu component that renders navigation links.
 *
 * This component displays a horizontal navigation menu with links generated from the provided routes.
 * Each route is rendered as a NavLink component from react-router.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {IRoute[]} [props.routes] - Optional array of route objects to display in the menu.
 * @returns {JSX.Element} A navigation component containing NavLinks.
 */
function Menu({ routes }: Readonly<{ routes?: IRoute[] }>) {
  return (
    <nav className="flex gap-4">
      {routes?.map(route => (
        <NavLink key={route.path} to={route.path}>
          {route.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;
