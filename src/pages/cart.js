import React from "react";

function Cart() {
  return (
    <div class="products-section flex">
      <aside class="sidebar-cart mr-4">
        <figure>
          <div class="card-container ml-128 mt-32 m-8">
            <img
              class="img-size"
              src="/images/guardian-gears-3.jpg"
              alt="Sample"
            />
          </div>
          <div class="card-text-container">
            <div class="mb-2 fw-6 fs-6">Guardian Gears Saddle Bag</div>

            <div class="mb-2 fw-5 fs-6">Guardian Gears</div>
            <div>
              <span class="fs-6">Quantity</span>
              <i class="fas fa-minus"></i>
              <input class="w-11" id="number" type="number" value="2" />

              <i class="fa fa-plus" aria-hidden="true"></i>
            </div>

            <div>
              <span class="fs-6 fw-5 mb-2">₹ 6,758</span>
            </div>
            <div class="card-footer flex-align-center mr-1">
              <div>
                <button class="btn-icon btn-link">
                  <span> Remove from Cart </span>
                </button>
                <button class="btn-icon btn-link">
                  <span> Move to Wishlist </span>
                </button>
              </div>
            </div>
          </div>
        </figure>
      </aside>
      <main class="products-display grow">
        <figure>
          <div class="card-container mt-32">
            <div class="card-text-container">
              <div class="mb-4 fw-6 fs-6">Price Detail</div>
              <div class="mb-4 fw-6 fs-6">Quantity - 2Nos.</div>
              <div class="mb-4 fw-6 fs-6">Unit Price ₹ 3,399</div>
              <div class="mb-2 fw-6 fs-6">SubTotal ₹ 6,758</div>
              <div>
                <input class="my-8" type="checkbox" id="gift" name="gift" />
                <label class="fs-6" for="gift">
                  This order contains a gift
                </label>
              </div>
              <div class="card-footer flex-align-center mr-1">
                <button class="btn-icon btn-link mb-8">
                  <span> Proceed to Buy </span>
                </button>
              </div>
            </div>
          </div>
        </figure>
      </main>
    </div>
  );
}
export default Cart;
