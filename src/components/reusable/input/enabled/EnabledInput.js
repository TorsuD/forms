import React from "react";
import "./EnabledInput.css";

function EnabledInput({ title }) {
  // let ei = enabled input
  return (
    <div>
      <div className="ei__container" style={{ flex: 1, marginTop: "10px" }}>
        <div style={{ flex: 0.4 }}>{title}</div>
        <input
          type={"text"}
          style={{
            marginLeft: "10px",
            borderRadius: "5px",
            border: "2px solid var(--usg-blue)",
            flex: 0.6,
          }}
          className="ei__input"
        />
      </div>
    </div>
  );
}

export default EnabledInput;
