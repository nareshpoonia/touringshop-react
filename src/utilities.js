import axios from "axios";

function getCart(authToken) {
  return axios.get(`/api/user/cart`, {
    headers: { authorization: authToken },
  });
}

function addToCart(authToken, product) {
  return axios.post(
    `/api/user/cart`,
    {
      product,
    },
    {
      headers: {
        authorization: authToken,
      },
    }
  );
}

function removeFromCart(authToken, productId) {
  return axios.delete(`/api/user/cart/${productId}`, {
    headers: {
      authorization: authToken,
    },
  });
}

function updateCart(authToken, productId, actionToBeTaken) {
  return axios.post(
    `/api/user/cart/${productId}`,
    {
      action: {
        type: actionToBeTaken,
      },
    },
    {
      headers: { authorization: authToken },
    }
  );
}

function removeFromWishlist(authToken, productId) {
  return axios.delete(`api/user/wishlist/${productId}`, {
    headers: { authorization: authToken },
  });
}

function addToWishlist(authToken, product) {
  return axios.post(
    `api/user/wishlist`,
    {
      product,
    },
    {
      headers: { authorization: authToken },
    }
  );
}

function getWishlist(authToken) {
  return axios.get("/api/user/wishlist", {
    headers: { authorization: authToken },
  });
}

export {
  getCart,
  addToCart,
  removeFromCart,
  updateCart,
  removeFromWishlist,
  addToWishlist,
  getWishlist,
};
