import React from "react";
import { useCartContext } from "../context/cart-context";
import { useState } from "react";

function Cartproducts(props) {
  const { cartState, cartDispatch } = useCartContext();

  console.log(cartState.cartItem);
  return (
    <div>
      <aside className="sidebar-cart mr-4">
        <div>
          <figure>
            <div className="card-container ml-128 mt-32 m-8"></div>
            <div className="card-text-container">
              <div className="mb-2 fw-6 fs-6">{props.product.title}</div>
              <div className="mb-2 fw-5 fs-6">{props.product.brand}</div>
              <div>
                <span className="fs-6">Quantity</span>
                <button
                  onClick={() =>
                    cartDispatch({
                      type: "DECREMENT",
                      payload: props.product._id,
                    })
                  }
                >
                  <i className="fas fa-minus"></i>
                </button>
                <input
                  className="w-11"
                  id="number"
                  type="number"
                  value={props.product.quantity}
                />
                <button
                  onClick={() =>
                    cartDispatch({
                      type: "INCREMENT",
                      payload: props.product._id,
                    })
                  }
                >
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
              </div>
              <div>
                <span className="fs-6 fw-5 mb-2">Rs.{props.product.price}</span>
              </div>
              <div className="card-footer flex-align-center mr-1">
                <div>
                  <button
                    onClick={() =>
                      cartDispatch({
                        type: "REMOVE_FROM_CART",
                        payload: props.product._id,
                      })
                    }
                    className="btn-icon btn-link"
                  >
                    <span> Remove from Cart </span>
                  </button>
                  <button className="btn-icon btn-link">
                    <span> Move to Wishlist </span>
                  </button>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </aside>
    </div>
  );
}
export default Cartproducts;
