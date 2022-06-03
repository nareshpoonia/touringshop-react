import Cartproducts from "../components/cart-products";
import { useCartContext } from "../context/cart-context";
import { useEffect } from "react";
import { getCart } from "../utilities";

function Cart() {
  const { cartState, cartDispatch } = useCartContext();
  const totalPrice = cartState.cart.reduce(
    (acc, curr) => curr.price * curr.qty + acc,
    0
  );
  const totalQuantities = cartState.cart.reduce(
    (acc, curr) => curr.qty + acc,
    0
  );

  useEffect(() => {
    if (!cartState.cart) {
      (async () => {
        try {
          const cartItems = await getCart(authToken);
          cartDispatch({
            type: "ADD_TO_CART",
            payload: cartItems?.data.cart,
          });
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, []);

  return (
    <div>
      <div className="products-section flex">
        {cartState.cart.map((product) => {
          return <Cartproducts key={product._id} product={product} />;
        })}
        <main className="products-display grow">
          <div className="card-container mt-32">
            <div className="card-text-container">
              <div className="mb-4 fw-6 fs-6">Price Detail</div>
              <div className="mb-4 fw-6 fs-6">Quantity {totalQuantities}</div>
              <div className="mb-2 fw-6 fs-6">Total Price {totalPrice}</div>
              <div>
                <input className="my-8" type="checkbox" id="gift" name="gift" />
                <label className="fs-6" htmlFor="gift">
                  This order contains a gift
                </label>
              </div>
              <div className="card-footer flex-align-center mr-1">
                <button className="btn-icon btn-link mb-8">
                  <span> Proceed to Buy </span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default Cart;
