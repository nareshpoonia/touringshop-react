import React from "react";
import { Link } from "react-router-dom";
function Nav() {
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
            <i className="far fa-heart fa-xl mr-4"></i>
          </Link>
          <Link to="/cart">
            <i className="fas fa-cart-plus"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
