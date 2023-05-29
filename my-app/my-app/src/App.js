import Searchbar from "./components/Searchbar";
import CheckBox from "./components/Checkbox";
import Table from "./components/Table";
import "./App.css";
import React, { useState } from "react";
import { products } from "./data";

export default function Main() {
  const [isChecked, setIsChecked] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  // boxchange
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  // search bar change

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div className="main">
      <h1> Iron Store </h1>
      <Searchbar onChange={handleChange} />
      <CheckBox isChecked={isChecked} onChange={handleCheckboxChange} />
      <Table
        isChecked={isChecked}
        searchInput={searchInput}
        products={products}
      />
    </div>
  );
}
