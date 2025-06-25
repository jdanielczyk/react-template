import MenuContainer from './components/MenuContainer';

/**
 * Header component that renders the application's header section.
 * Displays the application title and includes the navigation menu.
 *
 * @returns JSX element representing the header of the application
 */
function Header() {
  return (
    <header>
      <h1 className="text-3xl font-bold">React template</h1>
      <MenuContainer />
    </header>
  );
}

export default Header;
