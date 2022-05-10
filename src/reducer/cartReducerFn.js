export const cartReducerFn = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(state);
      return {
        ...state,
        cartArray: [...state.cartArray, { ...action.payload, quantity: 1 }],
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlistArray: [
          ...state.wishlistArray,
          { ...action.payload, wishlistQuantity: 1 },
        ],
      };
    case "ALREADY_IN_WISHLIST":
      return {
        ...state,
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
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlistArray: state.wishlistArray.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    case "MOVE_TO_CART":
      let newCartArray = state.cartArray;
      if (state.cartArray.length === 0) {
        newCartArray = [{ ...action.payload, quantity: 1 }];
      } else if (state.cartArray.length > 0) {
        if (state.cartArray.find((item) => item._id == action.payload._id)) {
          newCartArray = state.cartArray.map((item) => {
            if (item._id == action.payload._id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });
        } else {
          newCartArray = state.cartArray.push(action.payload);
        }
        console.log(newCartArray);
      }

      return {
        ...state,
        cartArray: newCartArray,
        wishlistArray: state.wishlistArray.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    case "MOVE_TO_WISHLIST":
      console.log(state);
      let newWishlistArray = state.wishlistArray;
      if (state.wishlistArray.length === 0) {
        newWishlistArray = [{ ...action.payload }];
      } else {
        if (
          state.wishlistArray.find((item) => item._id == action.payload._id)
        ) {
          newWishlistArray = state.wishlistArray;
        } else {
          newWishlistArray.push(action.payload);
        }
      }
      return {
        ...state,
        wishlistArray: newWishlistArray,
        cartArray: state.cartArray.filter(
          (item) => item._id !== action.payload._id
        ),
      };
  }
};
