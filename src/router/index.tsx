import { createBrowserRouter } from 'react-router';
import Home from '../features/home/Home';
import About from '../features/about/About';
import RootLayout from '../shared/layouts/RootLayout';
import Todos from '../features/todos/Todos';

/**
 * Router configuration for the application using React Router.
 *
 * This router defines the application's routing structure with:
 *
 * The router uses createBrowserRouter which leverages the HTML5 history API
 * to implement client-side routing with URL segments.
 *
 * @see {@link https://reactrouter.com/en/main/routers/create-browser-router} for createBrowserRouter documentation
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'todos',
        element: <Todos />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

export default router;
