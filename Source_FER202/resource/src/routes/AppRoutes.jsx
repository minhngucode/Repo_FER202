import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "../page/ProductPage";
import OrderHistoryPage from "../page/OrderHistoryPage";

// Cấu hình routes
const routes = [
  {
    path: "/",
    element: (
      <ProductPage />
    ),
  },
  {
    path: "/orders",
    element: (
      <OrderHistoryPage />
    ),
  },
];

const AppRoutes = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
