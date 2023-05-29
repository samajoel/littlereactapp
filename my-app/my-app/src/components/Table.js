import React from "react";
import "../App.css";
import { products } from "../data";

export default function Table({ isChecked }) {
  const filteredProducts = isChecked
    ? products.filter((product) => product.inStock)
    : products;

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
          {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
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
