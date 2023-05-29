import React from "react";
import "../App.css";

export default function Searchbar({ onChange }) {
  return (
    <div className="search">
      <h3>Search</h3>
      <input
        type="search"
        placeholder="Search here"
        onChange={onChange}
      ></input>
    </div>
  );
}
