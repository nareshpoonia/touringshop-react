import { createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { reducerFn } from "../utilities/reducerFn";

const ProductContext = createContext(null);

const useProductContext = () => useContext(ProductContext);

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, {
    sortBy: null,
    fastDelivery: false,
    outOfStock: true,
    maxPrice: 30000,
    categories: {
      isLuggage: false,
      isRidingGear: false,
    },
    ratings: 5,
    price: {
      isUnder5000: false,
      isUnder10000: false,
    },
    products: [],
  });

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {" "}
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContextProvider, useProductContext };
