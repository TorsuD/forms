import React from "react";
import "./RadioOption.css";
import Form from "react-bootstrap/Form";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

function RadioOption({ title }) {
  return (
    <div>
      <form>
        <div
          className="radio__container"
          style={{ flex: 1, marginBottom: "15px", fontSize: "13px" }}
        >
          <div
            style={{
              marginRight: "20px",
              flex: 0.5,
              textAlign: "right",
              fontWeight: "400",
            }}
          >
            {title}
          </div>

          <div style={{ flex: 0.5 }}>
            <Form style={{ display: "flex", fontWeight: "700" }}>
              <Form.Check inline label="Yes" name="group1" type={"radio"} />
              <Form.Check inline label="No" name="group2" type={"radio"} />
              <Form.Check inline label="All" name="group3" type={"radio"} />
            </Form>
            {/* <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton id="tbg-radio-1" value={1}>
                Radio 1 (pre-checked)
              </ToggleButton>
              <ToggleButton id="tbg-radio-2" value={2}>
                Radio 2
              </ToggleButton>
              <ToggleButton id="tbg-radio-3" value={3}>
                Radio 3
              </ToggleButton>
            </ToggleButtonGroup> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default RadioOption;
