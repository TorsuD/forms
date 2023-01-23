import React from "react";
import "./PopoverL.css";
import { BsFillTriangleFill } from "react-icons/bs";
import { FiX } from "react-icons/fi";

function PopoverL({ header, body }) {
  return (
    <div>
      <div>
        <BsFillTriangleFill color="var(--usg-blue)" />
      </div>
      <div className="p__container">
        <div
          className="p__header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {header} <FiX />
        </div>

        <div className="p__body">{body}</div>
      </div>
    </div>
  );
}

export default PopoverL;
