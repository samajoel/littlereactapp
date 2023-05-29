import Searchbar from "./components/Searchbar";
import CheckBox from "./components/Checkbox";
import Table from "./components/Table";
import "./App.css";
import React, { useState } from "react";

export default function Main() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="main">
      <h1> Iron Store </h1>
      <Searchbar />
      <CheckBox isChecked={isChecked} onChange={handleCheckboxChange} />
      <Table isChecked={isChecked} />
    </div>
  );
}
