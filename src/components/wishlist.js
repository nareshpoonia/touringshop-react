import { useCartContext } from "../context/cart-context";

export function WishlistProducts(props) {
  const { title, brand, price } = props.wishlist;
  const { cartState, cartDispatch } = useCartContext();
  console.log(props.wishlist);

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
            <button
              onClick={() =>
                cartDispatch({ type: "MOVE_TO_CART", payload: props.wishlist })
              }
              className="btn-icon btn-link"
            >
              Move to Cart
            </button>
            <button
              onClick={() =>
                cartDispatch({
                  type: "REMOVE_FROM_WISHLIST",
                  payload: props.wishlist,
                })
              }
              className="btn-icon btn-link"
            >
              Remove from Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
