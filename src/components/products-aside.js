import React from "react";
function ProductsAside() {
  return (
    <div>
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
    </div>
  );
}

export default ProductsAside;
