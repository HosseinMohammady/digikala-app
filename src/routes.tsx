import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import HomePage from "./pages/home/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products/:id", element: <ProductDetailPage /> },
    ],
  },
]);

export default router;
