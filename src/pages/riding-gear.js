import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cart-context";

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import LuggageProductDisplay from "../components/luggage-product-display";
import ProductsAside from "../components/products-aside";

function RidingGear() {
  const { items } = useContext(CartContext);

  const [products, setProducts] = useState([]);

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
    <div>
      <div className="products-section flex">
        <ProductsAside />
        <main className="products-display grow mt-16">
          <div className="flex-wrap flex">
            <LuggageProductDisplay />
          </div>
        </main>
      </div>
    </div>
  );
}

export default RidingGear;
