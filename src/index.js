import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

import { CartProvider } from "./context/cart-context";
import { WishlistProvider } from "./context/wishlist-context";
import { ProductContextProvider } from "./context/products-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </CartProvider>
      </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
