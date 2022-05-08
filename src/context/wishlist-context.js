import { createContext, useReducer, useContext } from "react";

import { wishlistReducerFn } from "../reducer/wishlistReducerFn";

const wishlistContext = createContext();

const useWishlistContext = () => useContext(wishlistContext);

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducerFn, {
    wishlistArray: [],
  });

  return (
    <wishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </wishlistContext.Provider>
  );
};

export { useWishlistContext, WishlistProvider };
