import React from "react";
import "./MinimizedTab.css";
import { Button } from "react-bootstrap";
import { FiMinimize } from "react-icons/fi";

function MinimizedTab({ title, handleShow }) {
  return (
    <div style={{ position: "absolute", bottom: 0, color: "white" }}>
      <div className="m__container">
        <div>{title}</div>
        <Button className="m__min" onClick={handleShow}>
          <FiMinimize size={14} />
        </Button>
      </div>
    </div>
  );
}

export default MinimizedTab;
