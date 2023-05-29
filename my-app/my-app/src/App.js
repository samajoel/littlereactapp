import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import CheckBox from "./components/Checkbox";
import Table from "./components/Table";
import DataFetcher from "./components/DataFetcher";
import ProductDetails from "./components/ProductDetails";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Main() {
  const [isChecked, setIsChecked] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState(null);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onDataFetched = (data) => {
    setData(data);
  };

  return (
    <Router>
      <div className="main">
        <h1>Iron Store</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Searchbar value={searchInput} onChange={handleChange} />
                <CheckBox
                  isChecked={isChecked}
                  onChange={handleCheckboxChange}
                />
                {data ? (
                  <Table
                    isChecked={isChecked}
                    searchInput={searchInput}
                    data={data}
                  />
                ) : (
                  <DataFetcher onDataFetched={onDataFetched} />
                )}
              </>
            }
          />
          <Route
            path="/product/:productId"
            element={<ProductDetails data={data} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
