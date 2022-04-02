import React from "react";
import { createContext } from "react";

const defaultContextValue = { items: 4 };

const CartContext = createContext(defaultContextValue);

const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={defaultContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
