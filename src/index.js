import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/pages/Home'
import ErrorPage from "./components/pages/error-page";
import Apropos from "./components/pages/A_propos";
import Logement from "./components/pages/Logement";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/location/:id",
		element: <Logement />,
		errorElement: <ErrorPage />,
	},
	{
    path: "/a-propos",
    element: <Apropos />,
		errorElement: <ErrorPage />,
  },
	{
    path: "/erreur-logement",
    element: <ErrorPage />,
		errorElement: <ErrorPage />,
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode>
);