import React from "react";
import "./CustomerName.css";

function CustomerName() {
  return (
    <div>
      <div className="cn__container" style={{ flex: 1 }}>
        <div style={{ flex: 0.5 }}>Customer Name</div>
        <input
          type={"text"}
          style={{
            marginLeft: "10px",
            borderRadius: "3px",
            border: "2px solid var(--usg-blue)",
            marginRight: "10px",
            flex: 0.5,
          }}
        />
      </div>
    </div>
  );
}

export default CustomerName;
