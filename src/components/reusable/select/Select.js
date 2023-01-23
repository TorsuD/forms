import React from "react";
import "./Select.css";

function Select({ title }) {
  return (
    <div>
      <div className="select__container" style={{ flex: 1 }}>
        <div style={{ flex: 0.4 }}>{title}</div>
        <select
          style={{
            marginLeft: "10px",
            width: "100px",
            padding: "2px",
            borderRadius: "5px",
            border: "2px solid var(--usg-blue)",
            flex: 0.6,
          }}
        >
          <option></option>
          <option>BRA</option>
          <option>BRA</option>
        </select>
        <div></div>
      </div>
    </div>
  );
}

export default Select;
