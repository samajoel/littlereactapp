import React from "react";
import { products } from "./data";
import "./App.css";

function Searchbar() {
  return (
    <div className="search">
      <h3>Search</h3>
      <input></input>
    </div>
  );
}

function CheckBox() {
  return (
    <div className="input">
      <input type="checkbox"></input>
      <h5>Only Show Products in Stock</h5>
    </div>
  );
}

function Table() {
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
