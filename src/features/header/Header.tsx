/**
 * Header component that renders the application's header section.
 * Displays the application title and includes the navigation menu.
 *
 * @returns JSX element representing the header of the application
 */
import Menu from './components/Menu';

function Header() {
  return (
    <header>
      <h1 className="text-3xl font-bold">Insurance catalog v2</h1>
      <Menu />
    </header>
  );
}

export default Header;
