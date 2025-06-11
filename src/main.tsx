import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './router/index.tsx';
import { store } from './store/index.ts';
import { Provider } from 'react-redux';

/**
 * Main entry point for the React application.
 *
 * This file initializes the React application by creating a root container
 * and rendering the main application structure within it. It sets up the router
 * configuration using RouterProvider and wraps the application in StrictMode
 * for additional development checks.
 *
 * @module main
 * @requires react
 * @requires react-dom/client
 * @requires react-router
 * @requires ./router/index.tsx
 * @requires ./index.css
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
