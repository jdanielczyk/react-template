import type { IRoute } from '../type';
import Menu from './Menu';

/**
 * MenuContainer component responsible for rendering the navigation menu.
 *
 * This component defines the application routes and passes them to the Menu component.
 * It serves as a container for the navigation menu, handling the routing configuration
 * without directly dealing with styling or UI elements.
 *
 * @returns A Menu component populated with application routes
 */
function MenuContainer() {
  const routes: IRoute[] = [
    { path: '/', label: 'Home' },
    { path: '/todos', label: 'Todos' },
    { path: '/about', label: 'About' },
  ];

  return <Menu routes={routes} />;
}

export default MenuContainer;
