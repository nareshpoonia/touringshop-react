import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function LuggageProductDisplay() {
  const [products, setProducts] = useState([]);

  const dataArray = products;
  console.log(dataArray);

  async function getProducts() {
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className="products-display grow mt-16">
      <div className="flex-wrap flex">
        {products.map((product) => {
          return (
            <figure>
              <div className="card-container m-8">
                <img className="img-size" src={product.image} alt="Sample" />
                <div className="card-text-container">
                  {" "}
                  <div className="mb-2 fw-6 fs-6">{product.title}</div>
                  <div className="card-badge">{product.condition}</div>
                  <div className="mb-2 fw-5 fs-6">{product.brand}</div>
                  <div>
                    <span className="fs-6 fw-5 mb-2">{product.price}</span>
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
          );
        })}
      </div>
    </main>
  );
}

export default LuggageProductDisplay;
