import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cart-context";

function Product(props) {
  const { cartState, cartDispatch } = useCartContext();

  const { image, title, condition, brand, price, rating, _id } = props.product;

  const navigate = useNavigate();

  return (
    <div className="card-container m-8">
      <img className="img-size" src={image} alt="Sample" />
      <div className="card-text-container">
        {" "}
        <div className="mb-2 fw-6 fs-6">{title}</div>
        <div className="card-badge">{condition}</div>
        <div className="mb-2 fw-5 fs-6">{brand}</div>
        <div>
          <span className="fs-6 fw-5 mb-2">Rs. {price}</span>
        </div>
        <div className="card-footer flex-align-center mr-1">
          {!cartState.cartArray.find((item) => item._id === _id) ? (
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
          {!cartState.wishlistArray.some((item) => item._id === _id) ? (
            <button
              onClick={() =>
                cartDispatch({
                  type: "ADD_TO_WISHLIST",
                  payload: props.product,
                })
              }
            >
              <i className="far fa-heart fa-2xl"></i>
            </button>
          ) : (
            <button
              onClick={() =>
                cartDispatch({
                  type: "ALREADY_IN_WISHLIST",
                  payload: props.product,
                })
              }
            >
              <i className="fa-solid fa-heart fa-2xl"></i>{" "}
            </button>
          )}
          <i className="fas fa-share-alt fa-2xl"></i>
          <span className="fs-8">
            {rating}
            <i className="fa-solid fa-star"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Product;
