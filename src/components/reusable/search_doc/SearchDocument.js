import React from "react";
import "./SearchDoc.css";
import doc from "../../../assets/fetch.png";

function SearchDocument({ title, onClick }) {
  return (
    <div>
      <div
        className="sd__container"
        style={{ flex: 1, marginTop: "10px", alignItems: "center" }}
      >
        <div style={{ flex: 0.5 }}>{title}</div>
        <div
          style={{ flex: 0.5, display: "flex" }}
          className="sd__inputContainer"
        >
          <input
            type={"text"}
            style={{
              width: "100px",
              borderRadius: "5px",
              border: "2px solid var(--usg-blue)",
            }}
            className="sd__enabledButton"
          />
          <div>
            <button
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                borderRadius: "5px",
                padding: "4px 9px",
                border: "2px solid var(--usg-blue)",
              }}
              onClick={{ onClick }}
              className="sd__button"
            >
              <img src={doc} alt="" style={{ height: "15px" }} />
            </button>
          </div>

          {/**<<<DISABLED INPUT>>> */}
          <input
            type={"text"}
            style={{
              width: "100px",
              borderRadius: "5px",
              border: "2px solid grey",
            }}
            className="sd__disabledButton"
            disabled
          />
        </div>
      </div>
    </div>
  );
}

export default SearchDocument;
