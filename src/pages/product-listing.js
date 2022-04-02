import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cart-context";
import { reducerFn } from "../utilities/reducerFn";

import axios from "axios";
import { useEffect } from "react";

import LuggageProductDisplay from "../components/luggage-product-display";
import FilterSection from "../components/filter-section";

import { useProductContext } from "../context/products-context";

function ProductListing() {
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
      <div className="products-section flex">
        <div>
          <FilterSection />
        </div>
        <main className="products-display grow mt-16">
          <div className="flex-wrap flex">
            <main className="products-display grow mt-16">
              <div className="flex-wrap flex">
                {productsToBeShown.map((product) => {
                  return (
                    <figure>
                      <div className="card-container m-8">
                        <img
                          className="img-size"
                          src={product.image}
                          alt="Sample"
                        />
                        <div className="card-text-container">
                          {" "}
                          <div className="mb-2 fw-6 fs-6">{product.title}</div>
                          <div className="card-badge">{product.condition}</div>
                          <div className="mb-2 fw-5 fs-6">{product.brand}</div>
                          <div>
                            <span className="fs-6 fw-5 mb-2">
                              {product.price}
                            </span>
                          </div>
                          <div className="card-footer flex-align-center mr-1">
                            <button className="btn-icon btn-link">
                              <i className="fas fa-cart-plus heart"></i>
                              <span> Add to Cart </span>
                            </button>
                            <i className="far fa-heart fa-2xl"></i>
                            <i className="fas fa-share-alt fa-2xl"></i>
                            <span className="fs-8">
                              {product.rating}
                              <i className="fa-solid fa-star"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </figure>
                  );
                })}
              </div>
            </main>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProductListing;
