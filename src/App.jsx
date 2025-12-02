import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/UserPage";
import Contact from "./pages/COntact";
import Error from "./pages/Error";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import "./styles/common.css";
import Cart from "./pages/Cart";
import ProductList from "./components/ProductList";
import ProductInfo from "./pages/ProductInfo";
import ProductLayout from "./layouts/ProductLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="users" element={<UserPage />} />
        <Route path="users/:uname" element={<UserPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<ProductLayout />}>
          <Route path="info" element={<ProductInfo />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
