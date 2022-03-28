import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Luggage from "./pages/luggage";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

import { CartContext } from "./context/cart-context.js";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContext.Provider value={{ items: 5 }}>
        <App />
      </CartContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
