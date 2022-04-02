import logo from "./logo.png";
import hero from "./assets/images/hero-image.jpg";
import saddle from "./assets/images/saddle-bags.jpg";
import gears from "./assets/images/riding-gear.jpg";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Nav from "./components/nav";
import Login from "./pages/login";
import Wishlist from "./pages/wishlist";
import SignUp from "./pages/sign-up";
import Cart from "./pages/cart";
import ProductListing from "./pages/product-listing";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/products" element={<ProductListing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
