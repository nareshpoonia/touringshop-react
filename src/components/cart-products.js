import { useCartContext } from "../context/cart-context";
import { useAuth } from "../context/auth-context";
import { addToWishlist, removeFromCart, updateCart } from "../utilities";
import { useEffect } from "react";

function Cartproducts(props) {
  const { cartState, cartDispatch } = useCartContext();
  const { title, brand, _id, qty, price } = props.product;
  const { authToken } = useAuth();

  async function remove() {
    try {
      const updatedCart = await removeFromCart(authToken, _id);
      cartDispatch({ type: "ADD_TO_CART", payload: updatedCart.data.cart });
    } catch (error) {
      console.error(error);
    }
  }

  async function moveToWishlist() {
    const isProductAlreadyInWishlist = cartState.wishlist.find(
      (item) => item._id == _id
    );
    if (!isProductAlreadyInWishlist) {
      try {
        const updatedCart = await removeFromCart(authToken, _id);
        const updatedWishlist = await addToWishlist(authToken, props.product);
        cartDispatch({ type: "ADD_TO_CART", payload: updatedCart.data.cart });
        cartDispatch({
          type: "UPDATE_WISHLIST",
          payload: updatedWishlist.data.wishlist,
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      remove();
    }
  }

  async function update(actionType) {
    try {
      const updatedCart = await updateCart(authToken, _id, actionType);
      cartDispatch({ type: "ADD_TO_CART", payload: updatedCart.data.cart });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <aside className="sidebar-cart mr-4">
        <div>
          <div className="card-container ml-128 mt-32 m-8"></div>
          <div className="card-text-container">
            <div className="mb-2 fw-6 fs-6">{title}</div>
            <div className="mb-2 fw-5 fs-6">{brand}</div>
            <div>
              <span className="fs-6">Quantity</span>
              <button disabled={qty === 1} onClick={() => update("decrement")}>
                <i className="fas fa-minus"></i>
              </button>
              <span className="w-11 fs-6 mx-4">{qty}</span>
              <button onClick={() => update("increment")}>
                <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
            <div>
              <span className="fs-6 fw-5 mb-2">Rs.{price}</span>
            </div>
            <div className="card-footer flex-align-center mr-1">
              <div>
                <button onClick={remove}>Remove from Cart</button>
                <button onClick={moveToWishlist} className="btn-icon btn-link">
                  Move to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
export default Cartproducts;
