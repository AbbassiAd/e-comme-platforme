import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Profile from "./pages/user/Profile.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Home from "./pages/Home.jsx";
import AdminRoute from "./pages/admin/AdminRoute.jsx";
import AdminMenu from "./pages/admin/AdminMenu.jsx";
import UpdateProduct from "./pages/product/UpdateProduct.jsx";
import AddProduct from "./pages/product/AddProduct.jsx";
import UpdatePub from "./pages/pub/UpdatePub.jsx";
import AddPub from "./pages/pub/AddPub.jsx";

import Products from "./pages/Products.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Service from "./pages/Service.jsx";
import About from "./pages/About.jsx";
import ProductDetails from "./pages/product/ProductDetails.jsx";
import Favorites from "./redux/features/favorites/Favorites.jsx";
import ProductByCategory from "./pages/product/ProductByCategor.jsx";
import Paiment from "./pages/Commander/Paiment.jsx";
import Cart from "./redux/features/cart/Cart.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/service" element={<Service />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/:id" element={<ProductDetails />} />

      <Route path="/favorites" element={<Favorites />} />
      {/* <Route path="/cart" element={<Cart />} /> */}

      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="/admin" element={<AdminRoute />}>
        <Route path="" element={<AdminMenu />} />
        <Route path="update-product/:id" element={<UpdateProduct />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="update-pub/:id" element={<UpdatePub />} />
        <Route path="add-pub" element={<AddPub />} />
      </Route>
      <Route path="/products/category/:id" element={<ProductByCategory />} />
      <Route path="/ordre" element={<Paiment />} />
      <Route path="/cart" element={<Cart />} />
      
      <Route path="" index={true} element={<Home />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
