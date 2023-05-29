import Searchbar from "./components/Searchbar";
import CheckBox from "./components/Checkbox";
import Table from "./components/Table";
import DataFetcher from "./components/DataFetcher";
import "./App.css";
import React, { useState } from "react";

export default function Main() {
  const [isChecked, setIsChecked] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState(null);
  // boxchange
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  // search bar change

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const onDataFetched = (data) => {
    setData(data);
  };

  return (
    <div className="main">
      <h1> Iron Store </h1>
      <Searchbar onChange={handleChange} />
      <CheckBox isChecked={isChecked} onChange={handleCheckboxChange} />
      {data ? (
        <Table isChecked={isChecked} searchInput={searchInput} data={data} />
      ) : (
        <DataFetcher onDataFetched={onDataFetched} />
      )}
    </div>
  );
}
