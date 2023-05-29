import React from "react";
import { useParams, Link } from "react-router-dom";
import "../App.css";

export default function ProductDetails({ data }) {
  const { productId } = useParams();
  const product = data.find((item) => item.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="tablecontainer">
      <h2>Product Details</h2>
      <div>
        <ul>
          <li>📛 Name: {product.name}</li>
          <li>📊 Category: {product.category}</li>
          <li>🏷️ Price: {product.price}</li>
          <li>📈 In Stock: {product.inStock ? "Yes" : "No"}</li>
        </ul>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
