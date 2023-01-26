import React, { useEffect, useState } from "react";
import "./LoanEnquiry.css";
import "../../components/reusable/input/enabled/EnabledInput.css";
import "../reusable/select/Select.css";
import "../reusable/search_doc/SearchDoc.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { FiFilePlus } from "react-icons/fi";
import RadioOption from "../reusable/radio/RadioOption";
import Date from "../reusable/date/Date";
import ButtonSection from "../button_section/ButtonSection";
import Box from "@mui/material/Box";
import EAE from "../reusable/input/enabled_and_enabled/EAE";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PopoverL from "../popover/PopoverL";

function LoanEnquiry() {
  // currency constants
  const [currency, setCurrency] = useState("");
  const [currencyCode, setCurrencyCode] = useState("");

  // branch constants
  const [branch, setBranch] = useState("");
  const [branchCode, setBranchCode] = useState("");

  // sector constants
  const [sector, setSector] = useState("");
  const [sectorCode, setSectorCode] = useState("");

  // ro constants
  const [ro, setRo] = useState("");
  const [roCode, setRoCode] = useState("");

  // product constants
  const [product, setProduct] = useState("");
  const [productCode, setProductCode] = useState("");

  const [showCurrencyPopOver, setShowCurrencyPopOver] = useState(false);
  const [showBranchPopOver, setShowBranchPopOver] = useState(false);
  const [showSectorPopOver, setShowSectorPopOver] = useState(false);
  const [showRoPopOver, setShowRoPopOver] = useState(false);
  const [showProductPopOver, setShowProductPopOver] = useState(false);
  const handleshowCurrencyPopOver = () =>
    setShowCurrencyPopOver(!showCurrencyPopOver);
  const handleshowBranchPopOver = () =>
    setShowBranchPopOver(!showBranchPopOver);
  const handleshowSectorPopOver = () =>
    setShowSectorPopOver(!showSectorPopOver);
  const handleshowRoPopOver = () => setShowRoPopOver(!showRoPopOver);
  const handleshowProductPopOver = () =>
    setShowProductPopOver(!showProductPopOver);

  // GET BRANCHES AXIOS CALL
  useEffect(() => {
    // functions to get endpoints
    function getCurrency() {
      return axios.post("http://localhost:4000/get-code-details", {
        code: "CUR",
      });
    }

    function getBranch() {
      return axios.post("http://localhost:4000/get-code-details", {
        code: "BRA",
      });
    }

    function getSector() {
      return axios.post("http://localhost:4000/get-code-details", {
        code: "SEC",
      });
    }

    function getRo() {
      return axios.post("http://localhost:4000/get-code-details", {
        code: "REL",
      });
    }

    function getProduct() {
      return axios.post("http://localhost:4000/get-code-details", {
        code: "PRO",
      });
    }

    function getFacility() {
      return axios.post("http://localhost:4000/get-code-details", {
        code: "FAC",
      });
    }

    function getClassification() {
      return axios.post("http://localhost:4000/get-code-details", {
        code: "CLA",
      });
    }

    Promise.all([
      getCurrency(),
      getBranch(),
      getSector(),
      getRo(),
      getProduct(),
      getFacility(),
      getClassification(),
    ])
      .then(function (results) {
        // get currencies
        const currencies = results[0].data;
        localStorage.setItem("getCurrency", JSON.stringify(currencies));

        // get branches
        const branches = results[1].data;
        localStorage.setItem("getBranch", JSON.stringify(branches));

        // get sectors
        const various_sectors = results[2].data;
        localStorage.setItem("getSector", JSON.stringify(various_sectors));

        // get RO
        const ros = results[3].data;
        localStorage.setItem("getRo", JSON.stringify(ros));

        // get products
        const products = results[4].data;
        localStorage.setItem("getProduct", JSON.stringify(products));

        // get facility
        const facilities = results[5].data;
        localStorage.setItem("getFacility", JSON.stringify(facilities));

        // get classification
        const classifications = results[6].data;
        localStorage.setItem(
          "getClassification",
          JSON.stringify(classifications)
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const columns = [
    {
      field: "ChgCode",
      headerName: "Facility A/C",
      width: 100,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Customer Name",
      headerName: "Customer Name",
      width: 200,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Currency",
      headerName: "Currency",
      width: 100,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Tenor",
      headerName: "Tenor",
      type: "number",
      width: 70,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Fee Amount Per Book",
      headerName: "Effect Date",
      type: "number",
      width: 100,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Rate",
      headerName: "Rate",
      type: "number",
      width: 100,
      editable: true,
      headerClassName: "super-app-theme--header",
    },

    {
      field: "Amt Granted",
      headerName: "Amt Granted",
      type: "number",
      width: 100,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Facility Bal",
      headerName: "Facility Bal",
      type: "number",
      width: 140,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Accrued Int",
      headerName: "Accrued Int",
      type: "number",
      width: 140,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Accrued Pen",
      headerName: "Accrued Pen",
      type: "number",
      width: 140,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Class",
      headerName: "Class",
      type: "number",
      width: 140,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Facility Status",
      headerName: "Facility Status",
      type: "number",
      width: 140,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
  ];

  const rows = [];

  // let le = loan enquiry
  // let ei = enabled input
  // let sd = search doc
  //

  return (
    <div>
      <div className="le__container">
        <hr />
        {/**The Form Body */}
        <div className="le__body">
          {/**The Left Side of the Body */}
          <div className="le__leftSide">
            <div className="le__leftSideDivision">
              <div className="le__first50">
                {/*CUSTOMER NAME*/}

                <div
                  // className="ei__container"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flex: 1,
                    textTransform: "uppercase",
                  }}
                >
                  <div style={{ flex: 0.4, fontSize: "13px" }}>
                    Customer Name
                  </div>

                  <Form.Control
                    type="text"
                    placeholder=" Name"
                    size="sm"
                    style={{ flex: 0.6 }}
                    autoComplete={false}
                    autoSave={false}
                  />
                </div>
                {/*END OF CUSTOMER NAME*/}

                <br />

                {/**CURRENCY*/}
                <div style={{ textTransform: "uppercase" }}>
                  <div
                    // className="sd__container"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <div style={{ flex: 0.4, fontSize: "13px" }}>Currency</div>
                    <div
                      style={{ flex: 0.6, display: "flex" }}
                      className="sd__inputContainer"
                    >
                      <Form.Control
                        type="text"
                        placeholder=""
                        aria-label=""
                        size="sm"
                        className="w-50"
                        autoComplete={false}
                        autoSave={false}
                        value={currencyCode}
                      />
                      <div>
                        <Button
                          variant="info"
                          size="sm"
                          style={{
                            marginLeft: "5px",
                            marginRight: "5px",
                            position: "relative",
                            boxShadow:
                              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                          }}
                          onClick={handleshowCurrencyPopOver}
                        >
                          <FiFilePlus color="white" size={16} />
                          <div style={{ position: "absolute", zIndex: 1 }}>
                            {showCurrencyPopOver ? (
                              <PopoverL
                                header={"Currency"}
                                body={
                                  <div>
                                    {(() => {
                                      var getCurrency = JSON.parse(
                                        localStorage.getItem("getCurrency")
                                      );
                                      var curr = [];
                                      for (
                                        var i = 0;
                                        i < getCurrency.length;
                                        i++
                                      ) {
                                        const description =
                                          getCurrency[i]["description"];
                                        const actual_code =
                                          getCurrency[i]["actual_code"];
                                        // const short_descrp = getBranch[i]["short_descrp"];

                                        curr.push(
                                          <div
                                            key={i}
                                            id={actual_code}
                                            data-value={description}
                                            className="optionToSelect"
                                            onClick={(e) => {
                                              setCurrency(
                                                e.target.getAttribute(
                                                  "data-value"
                                                )
                                              );
                                              setCurrencyCode(
                                                e.target.getAttribute("id")
                                              );
                                            }}
                                          >
                                            {description}
                                          </div>
                                        );
                                      }

                                      return curr;
                                    })()}
                                  </div>
                                }
                              />
                            ) : null}
                          </div>
                        </Button>
                      </div>

                      <Form.Control
                        type="text"
                        placeholder=""
                        size="sm"
                        disabled
                        value={currency}
                        className="w-100"
                        autoComplete={false}
                        autoSave={false}
                      />
                    </div>

                    {/**PopOver for the currency */}
                  </div>
                  {/*END OF CURRENCY */}

                  <br />

                  {/*BRANCH */}
                  <div>
                    <div
                      // className="sd__container"
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ flex: 0.4, fontSize: "13px" }}>Branch</div>
                      <div
                        style={{ flex: 0.6, display: "flex" }}
                        className="sd__inputContainer"
                      >
                        <Form.Control
                          type="text"
                          placeholder=""
                          aria-label=""
                          size="sm"
                          className="w-50"
                          autoComplete={false}
                          autoSave={false}
                          value={branchCode}
                        />

                        <div>
                          <Button
                            variant="info"
                            size="sm"
                            style={{
                              marginLeft: "5px",
                              marginRight: "5px",
                              position: "relative",
                              boxShadow:
                                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                            }}
                            onClick={handleshowBranchPopOver}
                          >
                            <FiFilePlus color="white" size={16} />
                            <div
                              style={{
                                position: "absolute",
                                zIndex: 1,
                              }}
                            >
                              {showBranchPopOver ? (
                                <PopoverL
                                  header={"Branch"}
                                  body={
                                    <div>
                                      {(() => {
                                        var getBranch = JSON.parse(
                                          localStorage.getItem("getBranch")
                                        );
                                        var bra = [];
                                        for (
                                          var i = 0;
                                          i < getBranch.length;
                                          i++
                                        ) {
                                          const description =
                                            getBranch[i]["description"];
                                          const actual_code =
                                            getBranch[i]["actual_code"];
                                          // const short_descrp = getBranch[i]["short_descrp"];

                                          bra.push(
                                            <div
                                              key={i}
                                              id={actual_code}
                                              data-value={description}
                                              className="optionToSelect"
                                              onClick={(e) => {
                                                setBranch(
                                                  e.target.getAttribute(
                                                    "data-value"
                                                  )
                                                );
                                                setBranchCode(
                                                  e.target.getAttribute("id")
                                                );
                                              }}
                                            >
                                              {description}
                                            </div>
                                          );
                                        }

                                        return bra;
                                      })()}
                                    </div>
                                  }
                                />
                              ) : null}
                            </div>
                          </Button>
                        </div>

                        <Form.Control
                          type="text"
                          placeholder=""
                          size="sm"
                          disabled
                          value={branch}
                          className="w-100"
                          autoComplete={false}
                          autoSave={false}
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  {/*END OF BRANCH */}

                  {/*DATE*/}

                  <Date title={"Effective Date"} />
                  {/* <br /> */}

                  <Date title={"Disbursed Date"} />
                  {/* <br /> */}

                  <Date title={"Expiry Date"} />
                  {/* <br /> */}

                  {/*INPUT AND INPUT */}
                  <EAE title={"Days to Expiry"} />
                  {/* <br /> */}

                  <EAE title={"Days to Next Repay b/n"} />
                  <br />

                  {/*CUSTOMER NUMBER*/}

                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      textTransform: "uppercase",
                    }}
                  >
                    <div style={{ flex: 0.4, fontSize: "13px" }}>
                      Customer No.
                    </div>

                    <Form.Control
                      type="text"
                      placeholder="Customer Number"
                      size="sm"
                      style={{ flex: 0.6 }}
                      autoComplete={false}
                      autoSave={false}
                    />
                  </div>
                  {/*END OF CUSTOMER NUMBER*/}
                </div>
              </div>

              {/*SECOND 50 OF THE LEFT SIDE*/}
              <div className="le__second50">
                <div style={{ fontSize: "13px" }}>
                  {/*TYPE OF FACILITY*/}
                  <div className="select__container" style={{ flex: 1 }}>
                    <div
                      style={{
                        flex: 0.4,
                        textTransform: "uppercase",
                      }}
                    >
                      Type of Facility
                    </div>

                    <div style={{ flex: 0.6 }}>
                      <Form.Select size="sm" className="w-100">
                        <option>Select Type of Facility</option>
                        {(() => {
                          var getBranch = JSON.parse(
                            localStorage.getItem("getBranch")
                          );
                          var options = [];
                          for (var i = 0; i < getBranch.length; i++) {
                            const description = getBranch[i]["description"];
                            const actual_code = getBranch[i]["actual_code"];
                            // const short_descrp = getBranch[i]["short_descrp"];

                            options.push(
                              <option key={i} value={actual_code}>
                                {description}
                              </option>
                            );
                          }

                          return options;
                        })()}
                      </Form.Select>
                    </div>
                  </div>
                  {/*END OF SELECT - TYPE OF FACILITY*/}
                  <br />

                  {/*FACILITY A/C*/}
                  <div
                    className="ei__container"
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ flex: 0.4, textTransform: "uppercase" }}>
                      Facility A/C
                    </div>

                    <Form.Control
                      type="text"
                      placeholder="A/C"
                      size="sm"
                      style={{ flex: 0.6 }}
                      autoComplete={false}
                      autoSave={false}
                    />
                  </div>
                  {/*END OF FACILITY A/C*/}

                  <br />

                  {/*REPAYMENT A/C*/}
                  <div
                    className="ei__container"
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ flex: 0.4, textTransform: "uppercase" }}>
                      Repayment A/C
                    </div>

                    <Form.Control
                      type="text"
                      placeholder="A/C"
                      size="sm"
                      style={{ flex: 0.6 }}
                      autoComplete={false}
                      autoSave={false}
                    />
                  </div>
                  <br />

                  {/*SELECT - FACILITY STATUS*/}
                  <div className="select__container" style={{ flex: 1 }}>
                    <div style={{ flex: 0.4, textTransform: "uppercase" }}>
                      Facility Status
                    </div>

                    <div style={{ flex: 0.6 }}>
                      <Form.Select size="sm" className="w-100">
                        <option>Select Facility Status</option>
                        {(() => {
                          var getFacility = JSON.parse(
                            localStorage.getItem("getFacility")
                          );
                          var fac = [];
                          for (var i = 0; i < getFacility.length; i++) {
                            const description = getFacility[i]["description"];
                            const actual_code = getFacility[i]["actual_code"];
                            // const short_descrp = getBranch[i]["short_descrp"];

                            fac.push(
                              <option key={i} value={actual_code}>
                                {description}
                              </option>
                            );
                          }

                          return fac;
                        })()}
                      </Form.Select>
                    </div>
                  </div>
                  {/*END OF SELECT - FACILITY STATUS*/}
                  {/* <br /> */}

                  {/*A/C CLASSIFICATION */}
                  <div className="select__container" style={{ flex: 1 }}>
                    <div style={{ flex: 0.4, textTransform: "uppercase" }}>
                      A/C Classification
                    </div>

                    <div style={{ flex: 0.6 }}>
                      <Form.Select size="sm" className="w-100">
                        <option>Select A/C Classification</option>
                        {(() => {
                          var getClassification = JSON.parse(
                            localStorage.getItem("getClassification")
                          );
                          var clas = [];
                          for (var i = 0; i < getClassification.length; i++) {
                            const description =
                              getClassification[i]["description"];
                            const actual_code =
                              getClassification[i]["actual_code"];
                            // const short_descrp = getBranch[i]["short_descrp"];

                            clas.push(
                              <option key={i} value={actual_code}>
                                {description}
                              </option>
                            );
                          }

                          return clas;
                        })()}
                      </Form.Select>
                    </div>
                  </div>
                  <br />
                  <br />

                  {/*SECTOR*/}
                  <div>
                    <div
                      className="sd__container"
                      style={{
                        flex: 1,
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "13px",
                          flex: 0.4,
                          textTransform: "uppercase",
                        }}
                      >
                        Sector
                      </div>
                      <div
                        style={{ flex: 0.6, display: "flex" }}
                        className="sd__inputContainer"
                      >
                        <Form.Control
                          type="text"
                          placeholder=""
                          aria-label=""
                          size="sm"
                          className="w-50"
                          autoComplete={false}
                          autoSave={false}
                          value={sectorCode}
                        />
                        <div>
                          <Button
                            variant="info"
                            size="sm"
                            style={{
                              marginLeft: "5px",
                              marginRight: "5px",
                              boxShadow:
                                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                            }}
                            onClick={handleshowSectorPopOver}
                          >
                            <FiFilePlus color="white" size={16} />
                            <div style={{ position: "absolute", zIndex: 1 }}>
                              {showSectorPopOver ? (
                                <PopoverL
                                  header={"Sector"}
                                  body={
                                    <div>
                                      {(() => {
                                        var getSector = JSON.parse(
                                          localStorage.getItem("getSector")
                                        );
                                        var sec = [];
                                        for (
                                          var i = 0;
                                          i < getSector.length;
                                          i++
                                        ) {
                                          const description =
                                            getSector[i]["description"];
                                          const actual_code =
                                            getSector[i]["actual_code"];
                                          // const short_descrp = getBranch[i]["short_descrp"];

                                          sec.push(
                                            <div
                                              key={i}
                                              id={actual_code}
                                              data-value={description}
                                              className="optionToSelect"
                                              onClick={(e) => {
                                                setSector(
                                                  e.target.getAttribute(
                                                    "data-value"
                                                  )
                                                );
                                                setSectorCode(
                                                  e.target.getAttribute("id")
                                                );
                                              }}
                                            >
                                              {description}
                                            </div>
                                          );
                                        }

                                        return sec;
                                      })()}
                                    </div>
                                  }
                                />
                              ) : null}
                            </div>
                          </Button>
                        </div>

                        <Form.Control
                          type="text"
                          placeholder=""
                          size="sm"
                          disabled
                          value={sector}
                          className="w-100"
                          autoComplete={false}
                          autoSave={false}
                        />
                      </div>
                    </div>
                    <br />

                    {/*RO*/}
                    <div>
                      <div
                        className="sd__container"
                        style={{
                          flex: 1,
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div style={{ flex: 0.4 }}>RO</div>
                        <div
                          style={{ flex: 0.6, display: "flex" }}
                          className="sd__inputContainer"
                        >
                          <Form.Control
                            type="text"
                            placeholder=""
                            aria-label=""
                            size="sm"
                            className="w-50"
                            autoComplete={false}
                            autoSave={false}
                            value={roCode}
                          />
                          <div>
                            <Button
                              variant="info"
                              size="sm"
                              style={{
                                marginLeft: "5px",
                                marginRight: "5px",
                                boxShadow:
                                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                              }}
                              onClick={handleshowRoPopOver}
                            >
                              <FiFilePlus color="white" size={16} />
                              <div style={{ position: "absolute", zIndex: 1 }}>
                                {showRoPopOver ? (
                                  <PopoverL
                                    header={"RO"}
                                    body={
                                      <div>
                                        {(() => {
                                          var getRo = JSON.parse(
                                            localStorage.getItem("getRo")
                                          );
                                          var ro = [];
                                          for (
                                            var i = 0;
                                            i < getRo.length;
                                            i++
                                          ) {
                                            const description =
                                              getRo[i]["description"];
                                            const actual_code =
                                              getRo[i]["actual_code"];
                                            // const short_descrp = getBranch[i]["short_descrp"];

                                            ro.push(
                                              <div
                                                key={i}
                                                id={actual_code}
                                                data-value={description}
                                                className="optionToSelect"
                                                onClick={(e) => {
                                                  setRo(
                                                    e.target.getAttribute(
                                                      "data-value"
                                                    )
                                                  );
                                                  setRoCode(
                                                    e.target.getAttribute("id")
                                                  );
                                                }}
                                              >
                                                {description}
                                              </div>
                                            );
                                          }

                                          return ro;
                                        })()}
                                      </div>
                                    }
                                  />
                                ) : null}
                              </div>
                            </Button>
                          </div>

                          <Form.Control
                            type="text"
                            placeholder=""
                            size="sm"
                            disabled
                            value={ro}
                            className="w-100"
                            autoComplete={false}
                            autoSave={false}
                          />
                        </div>
                      </div>
                    </div>
                    <br />

                    {/**PRODUCT */}
                    <div>
                      <div
                        className="sd__container"
                        style={{
                          flex: 1,
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div style={{ flex: 0.4, textTransform: "uppercase" }}>
                          Product
                        </div>
                        <div
                          style={{ flex: 0.6, display: "flex" }}
                          className="sd__inputContainer"
                        >
                          <Form.Control
                            type="text"
                            placeholder=""
                            aria-label=""
                            size="sm"
                            className="w-50"
                            autoComplete={false}
                            autoSave={false}
                            value={productCode}
                          />
                          <div>
                            <Button
                              variant="info"
                              size="sm"
                              style={{
                                marginLeft: "5px",
                                marginRight: "5px",
                                boxShadow:
                                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                              }}
                              onClick={handleshowProductPopOver}
                            >
                              <FiFilePlus color="white" size={16} />
                              <div style={{ position: "absolute", zIndex: 1 }}>
                                {showProductPopOver ? (
                                  <PopoverL
                                    header={"Product"}
                                    body={
                                      <div>
                                        {(() => {
                                          var getProduct = JSON.parse(
                                            localStorage.getItem("getProduct")
                                          );
                                          var prod = [];
                                          for (
                                            var i = 0;
                                            i < getProduct.length;
                                            i++
                                          ) {
                                            const description =
                                              getProduct[i]["description"];
                                            const actual_code =
                                              getProduct[i]["actual_code"];
                                            // const short_descrp = getBranch[i]["short_descrp"];

                                            prod.push(
                                              <div
                                                key={i}
                                                id={actual_code}
                                                data-value={description}
                                                className="optionToSelect"
                                                onClick={(e) => {
                                                  setProduct(
                                                    e.target.getAttribute(
                                                      "data-value"
                                                    )
                                                  );
                                                  setProductCode(
                                                    e.target.getAttribute("id")
                                                  );
                                                }}
                                              >
                                                {description}
                                              </div>
                                            );
                                          }

                                          return prod;
                                        })()}
                                      </div>
                                    }
                                  />
                                ) : null}
                              </div>
                            </Button>
                          </div>

                          <Form.Control
                            type="text"
                            placeholder=""
                            size="sm"
                            disabled
                            value={product}
                            className="w-100"
                            autoComplete={false}
                            autoSave={false}
                          />
                        </div>
                      </div>
                      {/*END OF PRODUCT*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/**The Right Side of the Body */}
          <div className="le__rightSide">
            <div>
              <RadioOption title="Interest in Suspense" />
              <RadioOption title="Penal in Suspense" />
              <RadioOption title="Backdated Loans" />
              <RadioOption title="Canceled" />
              <RadioOption title="Restructured" />
              <RadioOption title="In Arrears" />
              <RadioOption title="With Penalty" />
              <RadioOption title="Expired" />
              <RadioOption title="Classified" />
              <RadioOption title="Arrears Interest" />
            </div>
          </div>
        </div>

        {/**The Print Button and Button Group */}
        <div>
          <ButtonSection />
        </div>

        {/**The Data Table */}

        <div>
          <Box
            sx={{
              height: "220px",
              width: "auto",
              marginLeft: "20px",
              "& .super-app-theme--header": {
                backgroundColor: "rgb(85, 130, 192)",
                color: "white",
                fontWeight: "800",
              },
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
        </div>
        <div
          className="le__count"
          style={{ display: "flex", marginLeft: "80px", padding: "5px" }}
        >
          {" "}
          <div style={{ marginRight: "20px" }}>Count</div>
          <input type="text" disabled />
        </div>
      </div>
    </div>
  );
}

export default LoanEnquiry;
