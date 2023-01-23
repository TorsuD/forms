import React from "react";
import Form from "react-bootstrap/Form";
import "./EAE.css";

function EAE({ title }) {
  return (
    <div>
      <div
        className="eae__container"
        style={{
          flex: 1,
          marginTop: "5px",
        }}
      >
        <div style={{ flex: 0.4, fontSize: "13px" }} className="eae__title">
          {title}
        </div>

        <div
          style={{ display: "flex", alignItems: "center", flex: 0.6 }}
          className="eae__inputContainer"
        >
          <Form.Control
            type="text"
            placeholder=""
            size="sm"
            className="w-100"
          />
          <div
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              color: "var(--usg-blue)",
              fontWeight: "500",
            }}
          >
            {" "}
            and{" "}
          </div>
          <Form.Control
            type="text"
            placeholder=""
            size="sm"
            className="w-100"
          />
        </div>
      </div>
    </div>
  );
}

export default EAE;
