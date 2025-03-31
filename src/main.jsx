import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { VisibilityProvider } from "./utils/Visibilitycontext.jsx";
import Sign from "./Signin.jsx/Sign.jsx";
import ProductLayout from "./ProductLayout/ProductLayout.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ScrollToTop from "./utils/ScrolltoTop.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import Blog from "./Blog/Blog.jsx";
import Refund from "./Policy/Refund.jsx";
import Privacy from "./Policy/Privacy.jsx";
import TermsCons from "./Policy/TermsCons.jsx";

// Layout Component to Wrap Routes with ScrollToTop
const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

const Routes = createBrowserRouter([
  {
    element: <Layout />, // Wrap all routes inside Layout to apply ScrollToTop globally
    children: [
      { path: "/signin", element: <Sign /> },
      { path: "/Home", element: <App /> },
      { path: "/user/:username", element: <App /> },
      { path: "/", element: <App /> },
      {
        path: "/user/:username/api/product",
        element: (
          <VisibilityProvider>
            <Navbar />
            <ProductLayout />
          </VisibilityProvider>
        ),
      },
      {
        path: "/api/blog",
        element: (
          <VisibilityProvider>
            <Navbar />
            <Blog />
          </VisibilityProvider>
        ),
      },
      { path: "/return&refundpolicies", element: <Refund /> },
      { path: "/&&privacypolicy", element: <Privacy /> },
      { path: "/terms&&conditions", element: <TermsCons /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Routes} />
  </StrictMode>
);
