import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
import { useContext } from "react";

const defaultContextValue = { items: 0 };

const CartContext = createContext(defaultContextValue);

const useCartContext = () => useContext(CartContext);

const cartReducerFn = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartArray: [...state.cartArray, { ...action.payload, quantity: 1 }],
      };
    case "INCREMENT":
      return {
        ...state,
        cartArray: state.cartArray.map((item) => {
          if (item._id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    case "DECREMENT":
      return {
        ...state,
        cartArray: state.cartArray.map((item) => {
          if (item._id === action.payload && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartArray: state.cartArray.map((item) => {
          if (item._id === action.payload) {
            return { ...item, quantity: 0 };
          }
          return item;
        }),
      };
  }
};

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducerFn, {
    cartArray: [],
  });
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { useCartContext, CartProvider };
