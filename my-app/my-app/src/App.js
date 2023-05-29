import React from "react";
import Searchbar from "./components/Searchbar";
import CheckBox from "./components/Checkbox";
import Table from "./components/Table";
import "./App.css";

export default function Main() {
  return (
    <div className="main">
      <h1> Iron Store </h1>
      <Searchbar />
      <CheckBox />
      <Table />
    </div>
  );
}
