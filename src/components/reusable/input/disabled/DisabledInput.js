import React from "react";
import "./DisabledInput.css";

function DisabledInput({ title }) {
  return (
    <div>
      <div className="di__container">
        <div>{title}</div>
        <input
          type={"text"}
          style={{
            marginLeft: "10px",
            width: "150px",
            backgroundColor: "var(--usg-grey)",
            border: "1px solid var(--usg-grey)",
            borderRadius: "3px",
          }}
        />
      </div>
    </div>
  );
}

export default DisabledInput;
