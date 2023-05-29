import React from "react";
import "../App.css";

export default function Table({ isChecked, searchInput, data }) {
  const filteredProducts = isChecked
    ? data.filter((product) => product.inStock)
    : data;

  const filteredAndSearchedProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
  );

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
          {filteredAndSearchedProducts.length > 0 ? (
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
