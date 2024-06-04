import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import About from "./components/about/About.jsx";
import Main from "./components/Main.jsx";
import Layout from "./rout/Layout.jsx";
import FilterList from "./components/FilterList.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <>
            <FilterList />
            <Main />
          </>
        ),
      },
      ,
      {
        path: "/contact",
        element: <Contact />,
      },
      ,
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  ,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
