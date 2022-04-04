import axios from "axios";
import { useEffect } from "react";
import FilterSection from "../components/filter-section";
import { useProductContext } from "../context/products-context";
import Product from "../components/product";

function ProductListing() {
  const { state, dispatch } = useProductContext();

  async function getProducts() {
    try {
      const response = await axios.get("/api/products");
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
                  return <Product key={product._id} product={product} />;
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
