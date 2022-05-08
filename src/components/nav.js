import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart-context";

function Nav() {
  const { cartState, cartDispatch } = useCartContext();
  const wishlistQuantities = cartState.wishlistArray.length;
  const totalQuantities = cartState.cartArray.reduce(
    (acc, curr) => curr.quantity + acc,
    0
  );

  return (
    <nav className="c-navbar flex-center justify-between px-4">
      <Link to="/">
        <h1 className="fs-8">Touring Shop</h1>{" "}
      </Link>
      <div className="search-bar">
        <input className="flex-center nav-input" type="search" />
        <i className="fa fa-search search-icon" aria-hidden="true"></i>
      </div>
      <ul className="flex-col text-center">
        <li className="fs-7 mx-8">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-item fs-7 mx-8">
          <Link to="/wishlist">
            <div className="new-badge">
              <i className="far fa-heart fa-xl px-4  "></i>
              {wishlistQuantities > 0 ? (
                <span className="icon-badge flex-center">
                  {wishlistQuantities}
                </span>
              ) : null}
            </div>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <div className="new-badge">
              <i className="fas fa-cart-plus fa-2x ml-8 mx-4"></i>
              {totalQuantities > 0 ? (
                <span className="icon-badge flex-center">
                  {totalQuantities}
                </span>
              ) : null}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
