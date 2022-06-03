import { useNavigate, useLocation } from "react-router-dom";
import { useCartContext } from "../context/cart-context";
import { useAuth } from "../context/auth-context";

import {
  updateCart,
  addToCart,
  removeFromWishlist,
  addToWishlist,
} from "../utilities";

function Product(props) {
  const { cartState, cartDispatch } = useCartContext();
  const { authToken } = useAuth();
  const { image, title, condition, brand, price, rating, _id } = props.product;
  const location = useLocation();

  const navigate = useNavigate();

  function cartAction() {
    if (authToken) {
      const isItemAlreadyInCart = cartState.cart.find(
        (item) => item._id === _id
      );
      if (isItemAlreadyInCart) {
        (async () => {
          try {
            const updatedCart = await updateCart(
              authToken,
              props.product._id,
              "increment"
            );
            console.log(updatedCart);
            cartDispatch({
              type: "ADD_T0_CART",
              payload: updatedCart.data.cart,
            });
          } catch (error) {
            console.log(error);
          }
        })();
      } else {
        (async () => {
          try {
            const updatedCart = await addToCart(authToken, props.product);
            console.log(updatedCart);
            cartDispatch({
              type: "ADD_TO_CART",
              payload: updatedCart.data.cart,
            });
          } catch (error) {
            console.error(error);
          }
        })();
      }
    } else {
      navigate("/login", {
        state: { from: location },
        replace: true,
      });
    }
  }

  function wishlistAction() {
    if (authToken) {
      const isItemAlreadyInWishlist = cartState.wishlist.find(
        (item) => item._id === _id
      );
      if (isItemAlreadyInWishlist) {
        (async () => {
          try {
            const updatedWishlist = await removeFromWishlist(
              authToken,
              props.product._id
            );
            cartDispatch({
              type: "UPDATE_WISHLIST",
              payload: updatedWishlist.data.wishlist,
            });
          } catch (error) {
            console.error(error);
          }
        })();
      } else {
        (async () => {
          try {
            const updatedWishlist = await addToWishlist(
              authToken,
              props.product
            );
            cartDispatch({
              type: "UPDATE_WISHLIST",
              payload: updatedWishlist.data.wishlist,
            });
          } catch (error) {
            console.error(error);
          }
        })();
      }
    } else {
      navigate("/login", {
        state: { from: location },
        replace: true,
      });
    }
  }

  return (
    <div className="card-container m-8">
      <img className="img-size" src={image} alt="Sample" />
      <div className="card-text-container">
        {" "}
        <div className="mb-2 fw-6 fs-6">{title}</div>
        <div className="card-badge">{condition}</div>
        <div className="mb-2 fw-5 fs-6">{brand}</div>
        <div>
          <span className="fs-6 fw-5 mb-2">Rs. {price}</span>
        </div>
        <div className="card-footer flex-align-center mr-1">
          <button className="btn-icon btn-link" onClick={cartAction}>
            {" "}
            ADD TO CART
          </button>
          <button onClick={wishlistAction}>
            <i className="far fa-heart fa-2xl"></i>
          </button>
          <i className="fas fa-share-alt fa-2xl"></i>
          <span className="fs-8">
            {rating}
            <i className="fa-solid fa-star"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Product;
