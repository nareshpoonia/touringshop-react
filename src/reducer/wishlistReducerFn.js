export const wishlistReducerFn = (wishlistState, wishlistAction) => {
  switch (wishlistAction.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...wishlistState,
        wishlistArray: [
          ...wishlistState.wishlistArray,
          { ...wishlistAction.payload, quantity: 1 },
        ],
      };
    default:
      return wishlistState;
  }
};
