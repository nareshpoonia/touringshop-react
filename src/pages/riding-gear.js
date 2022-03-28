import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cart-context";

function RidingGear() {
  const { items } = useContext(CartContext);

  return (
    <div>
      <div className="products-section flex">
        <aside className="sidebar mr-4">
          <div className="mt-8">
            <span className="mx-8 fs-8 mb-8">Filters</span>
            <span className="mx-8 fs-8 clear-all-btn">Clear All</span>
          </div>
          <div className="m-8">
            <span className="fs-8 sort">Sort By</span>
          </div>
          <div>
            <input
              className="mx-8 mt-4"
              type="radio"
              id="low"
              name="sort"
              value="low"
            />
            <label className="fs-6" htmlFor="low">
              Price - Low to High
            </label>
          </div>
          <div>
            <input
              className="mx-8 mt-8"
              type="radio"
              name="sort"
              id="high"
              value="high"
            />
            <label className="fs-6" htmlFor="high">
              Price - High to Low
            </label>
          </div>

          <div className="m-8">
            <span className="fs-8 sort">Category</span>
          </div>
          <div>
            <input
              className="mx-8 mt-4"
              type="checkbox"
              id="saddle"
              name="saddle"
            />
            <label className="fs-6" htmlFor="saddle">
              Saddle Bag
            </label>
          </div>
          <div>
            <input
              className="mx-8 mt-8"
              type="checkbox"
              name="panniers"
              id="panniers"
            />
            <label className="fs-6" htmlFor="panniers">
              Panniers
            </label>
            <div className="m-8">
              <span className="fs-8">Ratings</span>
            </div>
            <div className="m-8">
              <input
                className="ratings-slider"
                type="range"
                id="ratings"
                name="ratings"
                min="0"
                max="5"
              />
              <label htmlFor="ratings"></label>
            </div>
            <div className="fs-8 m-8 flex justify-between">
              <span>1</span>
              <span>3</span>
              <span>5</span>
            </div>
          </div>
        </aside>
        <main className="products-display grow">
          <h1 className="ml-8 mt-8">Showing all products</h1>
          <div className="flex-wrap flex">
            <figure>
              <div className="card-container m-8">
                <img
                  className="img-size"
                  src="/images/guardian-gears-3.jpg"
                  alt="Sample"
                />
                <div className="card-text-container">
                  <div className="mb-2 fw-6 fs-6">
                    Guardian Gears Saddle Bag
                  </div>
                  <div className="card-badge">New</div>
                  <div className="mb-2 fw-5 fs-6">Guardian Gears</div>
                  <div>
                    <span className="fs-6 fw-5 mb-2">₹ 3,399</span>
                  </div>
                  <div className="card-footer flex-align-center mr-1">
                    <button className="btn-icon btn-link">
                      <i className="fas fa-cart-plus heart"></i>
                      <span> Add to Cart </span>
                    </button>
                    <i className="far fa-heart fa-2xl"></i>
                    <i className="fas fa-share-alt fa-2xl"></i>
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
                  <div className="card-badge">New</div>
                  <div className="mb-2 fw-5 fs-6">Konnen</div>
                  <div>
                    <span className="fs-6 fw-5 mb-2">₹ 9,596</span>
                  </div>
                  <div className="card-footer flex-align-center mr-1">
                    <button className="btn-icon btn-link">
                      <i className="fas fa-cart-plus"></i>
                      <span> Add to Cart </span>
                    </button>
                    <i className="far fa-heart fa-2xl"></i>
                    <i className="fas fa-share-alt fa-2xl"></i>
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
                  <div className="card-badge">New</div>
                  <div className="mb-2 fw-5 fs-6">Refit</div>
                  <div>
                    <span className="fs-6 fw-5 mb-2">₹ 23,422</span>
                  </div>
                  <div className="card-footer flex-align-center mr-1">
                    <button className="btn-icon btn-link">
                      <i className="fas fa-cart-plus"></i>
                      <span> Add to Cart </span>
                    </button>
                    <i className="far fa-heart fa-2xl"></i>
                    <i className="fas fa-share-alt fa-2xl"></i>
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
                  <div className="card-badge">New</div>
                  <div className="mb-2 fw-5 fs-6">Refit</div>
                  <div>
                    <span className="fs-6 fw-5 mb-2">₹ 23,422</span>
                  </div>
                  <div className="card-footer flex-align-center mr-1">
                    <button className="btn-icon btn-link">
                      <i className="fas fa-cart-plus"></i>
                      <span> Add to Cart </span>
                    </button>
                    <i className="far fa-heart fa-2xl"></i>
                    <i className="fas fa-share-alt fa-2xl"></i>
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
                  <div className="card-badge">New</div>
                  <div className="mb-2 fw-5 fs-6">Refit</div>
                  <div>
                    <span className="fs-6 fw-5 mb-2">₹ 23,422</span>
                  </div>
                  <div className="card-footer flex-align-center mr-1">
                    <button className="btn-icon btn-link">
                      <i className="fas fa-cart-plus"></i>
                      <span> Add to Cart </span>
                    </button>
                    <i className="far fa-heart fa-2xl"></i>
                    <i className="fas fa-share-alt fa-2xl"></i>
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
                  <div className="card-badge">New</div>
                  <div className="mb-2 fw-5 fs-6">Refit</div>
                  <div>
                    <span className="fs-6 fw-5 mb-2">₹ 23,422</span>
                  </div>
                  <div className="card-footer flex-align-center mr-1">
                    <button className="btn-icon btn-link">
                      <i className="fas fa-cart-plus"></i>
                      <span> Add to Cart </span>
                    </button>
                    <i className="far fa-heart fa-2xl"></i>
                    <i className="fas fa-share-alt fa-2xl"></i>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </main>
      </div>
    </div>
  );
}

export default RidingGear;
