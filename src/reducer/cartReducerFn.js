export const cartReducerFn = (state, action) => {
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
        cartArray: state.cartArray.filter(
          (item) => item._id !== action.payload
        ),
      };
  }
};
