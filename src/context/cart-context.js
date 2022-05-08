import { useReducer, useContext, createContext } from "react";
import { cartReducerFn } from "../reducer/cartReducerFn";

const defaultContextValue = { items: 0 };

const CartContext = createContext(defaultContextValue);

const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducerFn, {
    cartArray: [],
    wishlistArray: [],
  });

  console.log(cartState);

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCartContext, CartProvider };
