import React, { useState } from "react";
import "../App.css";

export default function Searchbar({ products }) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    products.filter((product) => {
      return product.name.match(searchInput);
    });
  }

  return (
    <div className="search">
      <h3>Search</h3>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      ></input>
    </div>
  );
}
