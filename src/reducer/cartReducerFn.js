import { ACTION_TYPE } from "../utils/const";

export const cartReducerFn = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case ACTION_TYPE.UPDATE_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };
  }
};
