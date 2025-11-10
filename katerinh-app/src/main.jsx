import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css'

import App from './App.jsx'
import FormApp from './pages/FormApp/FormApp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // When the URL is "/", show the <App /> component
  },
  {
    path: "form", // When the URL is "/contact", show the <FormApp /> component
    element: <FormApp />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
