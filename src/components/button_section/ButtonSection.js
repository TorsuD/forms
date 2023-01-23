import React from "react";
import "./ButtonSection.css";
import Button from "react-bootstrap/Button";
import { FiFilePlus, FiPower, FiRefreshCcw } from "react-icons/fi";

function ButtonSection() {
  return (
    <div className="bs">
      <div className="bs__container">
        {/**button left side */}
        <div style={{ marginLeft: "20px" }}>
          <Button
            variant="outline-primary"
            className="w-100"
            style={{
              boxShadow:
                " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              fontSize: "13px",
            }}
          >
            Print Report
          </Button>{" "}
        </div>

        <div className="bs__buttonGroup" style={{ display: "flex" }}>
          <Button
            variant="outline-primary"
            className="w-50 m-1"
            style={{
              marginRight: "10px",
              boxShadow:
                " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              fontSize: "13px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <FiFilePlus style={{ marginRight: 10 }} />
              <div>Fetch</div>
            </div>
          </Button>{" "}
          <Button
            variant="outline-success"
            className="w-50 m-1"
            style={{
              marginRight: "10px",
              boxShadow:
                " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <FiRefreshCcw color="greenyellow" style={{ marginRight: 10 }} />
              <div style={{ fontSize: "13px" }}>Refresh</div>
            </div>
          </Button>{" "}
          <Button
            variant="outline-danger"
            className="w-50 m-1"
            style={{
              marginRight: "10px",
              boxShadow:
                " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <FiPower color="pink" style={{ marginRight: 10 }} />{" "}
              <div style={{ fontSize: "13px" }}>Exit</div>
            </div>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default ButtonSection;
