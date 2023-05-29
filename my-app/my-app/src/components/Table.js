import React from "react";
import { products } from "../data.js";
import "../App.css";

export default function Table() {
  return (
    <div className="tablecontainer">
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {products.map((product) => (
          <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
