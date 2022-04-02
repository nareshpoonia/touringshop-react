import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useProductContext } from "../context/products-context";

function FilterSection() {
  const { state, dispatch } = useProductContext();

  async function getProducts() {
    try {
      const response = await axios.get("/api/products");
      console.log(response.data.products);
      dispatch({
        type: "PRODUCTS",
        payload: response.data.products,
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const sortProducts = (state, products) => {
    switch (state.sortBy) {
      case "LOW_TO_HIGH":
        console.log("This is running");
        return [...products].sort((a, b) => a.price - b.price);
      case "HIGH_TO_LOW":
        return [...products].sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  const filterCategories = (state, products) => {
    const isAllCategoriesClear = Object.values(state.categories).reduce(
      (accumulator, initialValue) => {
        return accumulator || initialValue;
      },
      false
    );
    if (!isAllCategoriesClear) {
      return products;
    }
    return products.filter((product) => {
      if (product.categoryName === "luggage") {
        return state.categories.isLuggage;
      } else {
        return state.categories.isRidingGear;
      }
    });
  };

  const filterPrice = (state, products) => {
    return [...products].filter((product) => product.price < state.maxPrice);
  };

  const filterRatings = (state, products) => {
    return [...products].filter((product) => product.rating < state.ratings);
  };

  let productsToBeShown = sortProducts(state, state.products);
  productsToBeShown = filterCategories(state, productsToBeShown);
  productsToBeShown = filterPrice(state, productsToBeShown);
  productsToBeShown = filterRatings(state, productsToBeShown);

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
            onClick={() =>
              dispatch({ type: "LOW_TO_HIGH", payload: "LOW_TO_HIGH" })
            }
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
            onClick={() =>
              dispatch({ type: "HIGH_TO_LOW", payload: "HIGH_TO_LOW" })
            }
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
            onChange={(e) => dispatch({ type: e.target.value })}
            className="mx-8 mt-4"
            type="checkbox"
            id="saddle"
            name="saddle"
            value="IS_LUGGAGE"
            checked={state.categories.isLuggage}
          />
          <label className="fs-6" htmlFor="saddle">
            Luggage
          </label>
        </div>
        <div>
          <input
            onChange={(e) => dispatch({ type: e.target.value })}
            className="mx-8 mt-8"
            type="checkbox"
            name="panniers"
            id="panniers"
            value="IS_RIDING_GEAR"
            checked={state.categories.isRidingGear}
          />
          <label className="fs-6" htmlFor="panniers">
            Riding Gears
          </label>
        </div>

        <div className="m-8">
          <label className="fs-8" htmlFor="price">
            Price
          </label>
          <input
            onChange={(e) =>
              dispatch({ type: "MAX_PRICE", payload: e.target.value })
            }
            value={state.maxPrice}
            className="ratings-slider"
            type="range"
            id="price"
            name="price"
            min={5000}
            max={30000}
          />
        </div>
        <div className="m-8">
          <label htmlFor="ratings" className="fs-8">
            Ratings
          </label>
          <input
            onChange={(e) =>
              dispatch({ type: "RATINGS", payload: e.target.value })
            }
            value={state.ratings}
            className="ratings-slider"
            type="range"
            id="ratings"
            name="ratings"
            min={0}
            max={5}
          />
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

export default FilterSection;
