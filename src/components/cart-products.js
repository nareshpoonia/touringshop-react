import { useCartContext } from "../context/cart-context";

function Cartproducts(props) {
  const { cartState, cartDispatch } = useCartContext();
  const { title, brand, _id, quantity, price } = props.product;

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
              <button
                onClick={() =>
                  cartDispatch({
                    type: "DECREMENT",
                    payload: _id,
                  })
                }
              >
                <i className="fas fa-minus"></i>
              </button>
              <input
                className="w-11"
                id="number"
                type="number"
                value={quantity}
              />
              <button
                onClick={() =>
                  cartDispatch({
                    type: "INCREMENT",
                    payload: _id,
                  })
                }
              >
                <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
            <div>
              <span className="fs-6 fw-5 mb-2">Rs.{price}</span>
            </div>
            <div className="card-footer flex-align-center mr-1">
              <div>
                <button
                  onClick={() =>
                    cartDispatch({
                      type: "REMOVE_FROM_CART",
                      payload: _id,
                    })
                  }
                  className="btn-icon btn-link"
                >
                  Remove from Cart
                </button>
                <button
                  onClick={() =>
                    cartDispatch({
                      type: "MOVE_TO_WISHLIST",
                      payload: props.product,
                    })
                  }
                  className="btn-icon btn-link"
                >
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
