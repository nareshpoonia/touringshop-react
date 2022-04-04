export const reducerFn = (state, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: action.payload };
    case "HIGH_TO_LOW":
      return { ...state, sortBy: action.payload };
    case "PRODUCTS":
      return { ...state, products: action.payload };
    case "IS_LUGGAGE":
      return {
        ...state,
        categories: {
          ...state.categories,
          isLuggage: !state.categories.isLuggage,
        },
      };
    case "IS_RIDING_GEAR":
      return {
        ...state,
        categories: {
          ...state.categories,
          isRidingGear: !state.categories.isRidingGear,
        },
      };
    case "IS_UNDER_5000":
      return {
        ...state,
        price: {
          ...state.price,
          isUnder5000: !state.price.isUnder5000,
        },
      };
    case "IS_UNDER_10000":
      return {
        ...state,
        price: {
          ...state.price,
          isUnder10000: !state.price.isUnder10000,
          isUnder5000: !state.price.isUnder5000,
        },
      };
    case "MAX_PRICE":
      return {
        ...state,
        maxPrice: action.payload,
      };
    case "RATINGS":
      return {
        ...state,
        ratings: action.payload,
      };
    default:
      return state;
  }
};
