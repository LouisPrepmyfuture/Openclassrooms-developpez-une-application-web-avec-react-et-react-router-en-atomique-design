import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/templates/Home'
import ErrorPage from "./components/templates/error-page";
import Apropos from "./components/templates/A_propos";
import Logement from "./components/templates/Logement";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);;