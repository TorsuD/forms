import React from "react";
import "./Date.css";

function Date({ title }) {
  return (
    <div>
      <div
        className="date__container"
        style={{
          flex: 1,
          marginTop: "5px",
          alignItems: "center",
          border: "3px solid var(--usg-blue)",
          padding: "5px",
          borderRadius: "10px",
        }}
      >
        <div style={{ flex: 0.4 }} className="d__title">
          {title}
        </div>

        <div
          style={{ flex: 0.6, display: "flex", alignItems: "center" }}
          className="d__inputContainer"
        >
          <input
            type="date"
            style={{
              border: "1px solid #0DCAF0",
              width: "90px",
              borderRadius: "5px",
              height: "30px",
            }}
          />

          <div
            style={{
              color: "var(--usg-blue)",
              fontWeight: 500,
              textAlign: "center",
              marginLeft: 10,
              marginRight: 10,
            }}
            className="d__to"
          >
            To
          </div>

          <input
            type="date"
            style={{
              border: "1px solid #0DCAF0",
              borderRadius: "5px",
              width: "90px",
              height: "30px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Date;
