import { useCartContext } from "../context/cart-context";
import { useAuth } from "../context/auth-context";
import { updateCart, addToCart, removeFromWishlist } from "../utilities";
import { ACTION_TYPE } from "../utils/const";

export function WishlistProducts(props) {
  const { title, brand, price, _id } = props.wishlist;
  const { cartState, cartDispatch } = useCartContext();
  const { authToken } = useAuth();

  function cartAction() {
    if (authToken) {
      const isItemAlreadyInCart = cartState.cart.find(
        (item) => item._id === _id
      );
      if (isItemAlreadyInCart) {
        (async () => {
          try {
            const updatedCart = await updateCart(authToken, _id, "increment");
            console.log("updated", updatedCart);
            cartDispatch({
              type: ACTION_TYPE.ADD_TO_CART,
              payload: updatedCart.data.cart,
            });
          } catch (error) {
            console.log(error);
          }
        })();
      } else {
        (async () => {
          try {
            const updatedCart = await addToCart(authToken, props.wishlist);
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
            const updatedWishlist = await removeFromWishlist(authToken, _id);
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
              props.wishlist
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
  console.log(cartState);
  return (
    <div className="flex-wrap flex">
      <div className="card-container m-8">
        <img
          className="img-size"
          src="/images/guardian-gears-3.jpg"
          alt="Sample"
        />
        <div className="card-text-container">
          <div className="mb-2 fw-6 fs-6">{title}</div>
          <div className="mb-2 fw-5 fs-6">{brand}</div>
          <div>
            <span className="fs-6 fw-5 mb-2">₹ {price}</span>
          </div>
          <div className="card-footer flex-align-center mr-1">
            <button onClick={cartAction} className="btn-icon btn-link">
              Move to Cart
            </button>
            <button onClick={wishlistAction} className="btn-icon btn-link">
              Remove from Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
