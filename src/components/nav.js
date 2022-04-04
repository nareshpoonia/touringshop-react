import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart-context";

function Nav() {
  const { cartState, cartDispatch } = useCartContext();
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
            <i className="far fa-heart fa-xl mx-8 "></i>
          </Link>
          <Link to="/cart">
            <i className="fas fa-cart-plus"></i>
            {totalQuantities > 0 ? (
              <span className="icon-badge flex-center mx-8 my-4 ">
                {totalQuantities}
              </span>
            ) : null}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
