import React from "react";
import "../App.css";
import { products } from "../data";

export default function Table({ isChecked, searchInput }) {
  const filteredProducts = isChecked
    ? products.filter((product) => product.inStock)
    : products;

  const filteredAndSearchedProducts = searchInput
    ? filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    : filteredProducts;

  return (
    <div className="tablecontainer">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(filteredAndSearchedProducts) &&
          filteredAndSearchedProducts.length > 0 ? (
            filteredAndSearchedProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No products available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
