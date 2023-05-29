import React from "react";
import "../App.css";

export default function CheckBox({ isChecked, onChange }) {
  return (
    <div className="input">
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <h5>Only Show Products in Stock</h5>
    </div>
  );
}
