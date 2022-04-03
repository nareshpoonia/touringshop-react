import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cart-context";

function Product(props) {
  const [btnName, setBtnName] = useState("Add To Cart");
  const { cartState, cartDispatch } = useCartContext();
  console.log(cartState.cartArray);

  const navigate = useNavigate();
  return (
    <figure>
      <div className="card-container m-8">
        <img className="img-size" src={props.product.image} alt="Sample" />
        <div className="card-text-container">
          {" "}
          <div className="mb-2 fw-6 fs-6">{props.product.title}</div>
          <div className="card-badge">{props.product.condition}</div>
          <div className="mb-2 fw-5 fs-6">{props.product.brand}</div>
          <div>
            <span className="fs-6 fw-5 mb-2">{props.product.price}</span>
          </div>
          <div className="card-footer flex-align-center mr-1">
            {!cartState.cartArray.find(
              (item) => item._id === props.product._id
            ) ? (
              <button
                onClick={() =>
                  cartDispatch({
                    type: "ADD_TO_CART",
                    payload: props.product,
                  })
                }
                className="btn-icon btn-link"
              >
                <i className="fas fa-cart-plus heart"></i>
                <span>Add To Cart</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  navigate("/cart");
                }}
                className="btn-icon btn-link"
              >
                <i className="fas fa-cart-plus heart"></i>
                <span>View Cart</span>
              </button>
            )}
            <i className="far fa-heart fa-2xl"></i>
            <i className="fas fa-share-alt fa-2xl"></i>
            <span className="fs-8">
              {props.product.rating}
              <i className="fa-solid fa-star"></i>
            </span>
          </div>
        </div>
      </div>
    </figure>
  );
}
export default Product;
