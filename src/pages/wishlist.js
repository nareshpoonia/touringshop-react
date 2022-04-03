import React from "react";
import { useContext } from "react";
import { useCartContext } from "../context/cart-context";

function Login() {
  const { state, dispatch } = useCartContext();

  return (
    <div>
      <main className="products-display grow">
        <div className="pt-32 flex-center">
          <h1>My Wishlist</h1>
        </div>
        <div className="flex-wrap flex">
          <figure>
            <div className="card-container m-8">
              <img
                className="img-size"
                src="/images/guardian-gears-3.jpg"
                alt="Sample"
              />
              <div className="card-text-container">
                <div className="mb-2 fw-6 fs-6">Guardian Gears Saddle Bag</div>
                <div className="mb-2 fw-5 fs-6">Guardian Gears</div>
                <div>
                  <span className="fs-6 fw-5 mb-2">₹ 3,399</span>
                </div>
                <div className="card-footer flex-align-center mr-1">
                  <button className="btn-icon btn-link">
                    <span> Move to Cart </span>
                  </button>
                  <button className="btn-icon btn-link">
                    <span>Remove from Wishlist </span>
                  </button>
                </div>
              </div>
            </div>
          </figure>
          <figure>
            <div className="card-container m-8">
              <img
                className="img-size"
                src="/images/konnen-panniers.jpg"
                alt="Sample"
              />
              <div className="card-text-container">
                <div className="mb-2 fw-6 fs-6">Konnen Panniers</div>
                <div className="mb-2 fw-5 fs-6">Konnen</div>
                <div>
                  <span className="fs-6 fw-5 mb-2">₹ 9,596</span>
                </div>
                <div className="card-footer flex-align-center mr-1">
                  <button className="btn-icon btn-link">
                    <span> Move to Cart </span>
                  </button>
                  <button className="btn-icon btn-link">
                    <span>Remove from Wishlist </span>
                  </button>
                </div>
              </div>
            </div>
          </figure>
          <figure>
            <div className="card-container m-8">
              <img
                className="img-size"
                src="/images/refit-top-box.jpg"
                alt="Sample"
              />
              <div className="card-text-container">
                <div className="mb-2 fw-6 fs-6">Refit Top Box</div>
                <div className="mb-2 fw-5 fs-6">Refit</div>
                <div>
                  <span className="fs-6 fw-5 mb-2">₹ 23,422</span>
                </div>
                <div className="card-footer flex-align-center mr-1">
                  <button className="btn-icon btn-link">
                    <span> Move to Cart </span>
                  </button>
                  <button className="btn-icon btn-link">
                    <span>Remove from Wishlist </span>
                  </button>
                </div>
              </div>
            </div>
          </figure>
          <figure>
            <div className="card-container m-8">
              <img
                className="img-size"
                src="/images/refit-top-box.jpg"
                alt="Sample"
              />
              <div className="card-text-container">
                <div className="mb-2 fw-6 fs-6">Refit Top Box</div>
                <div className="mb-2 fw-5 fs-6">Refit</div>
                <div>
                  <span className="fs-6 fw-5 mb-2">₹ 23,422</span>
                </div>
                <div className="card-footer flex-align-center mr-1">
                  <button className="btn-icon btn-link">
                    <span> Move to Cart </span>
                  </button>
                  <button className="btn-icon btn-link">
                    <span>Remove from Wishlist </span>
                  </button>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </main>
    </div>
  );
}

export default Login;
