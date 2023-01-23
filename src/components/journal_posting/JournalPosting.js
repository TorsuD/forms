import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./JournalPosting.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function JournalPosting() {
  // useStates
  // api calls
  axios
    .post("http://localhost:4000/get-code-details", {
      code: "CUR",
    })
    .then(function (response) {
      console.log(response);
      localStorage.setItem("getCurrency", JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  // the columns and rows
  const columns = [
    {
      field: "ChgCode",
      headerName: "Account Description",
      width: 200,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Debit",
      headerName: "Debit",
      width: 100,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Credit",
      headerName: "Credit",
      width: 90,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Branch",
      headerName: "Branch",
      type: "text",
      width: 85,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Narration",
      headerName: "Narration",
      type: "text",
      width: 300,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
  ];

  const rows = [];
  //let jp = journal posting
  return (
    <div>
      <div className="jp__container">
        <hr />

        {/*SCAN DOCUMENT*/}
        <div
          style={{
            padding: "5px",
            margin: 10,
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            borderRadius: 20,
          }}
        >
          <form>
            <div
              style={{
                padding: "10px",
              }}
            >
              <div className="jp__scanDocumentID">
                <div className="jd__sdi" style={{ flex: 1 }}>
                  {/*SCAN DOCUMENT ID*/}

                  <div
                    style={{
                      flex: 0.2,
                      marginRight: 20,
                      textTransform: "uppercase",
                      fontSize: "13px",
                    }}
                  >
                    Scan Document id *
                  </div>
                  <div style={{ display: "flex", flex: 0.8 }} className="jp_formAndButton">
                    <Form.Control
                      type="text"
                      placeholder="Document Id"
                      size="sm"
                      className="w-50"
                      autoComplete={false}
                      autoSave={false}
                    />
                    <Button
                      variant="outline-primary"
                      size="sm"
                      // className="w-25"
                      style={{
                        marginLeft: "5px",
                        fontSize: "13px",
                        boxShadow:
                          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                      }}
                    >
                      View Document
                    </Button>
                  </div>
                </div>
              </div>
              <br />

              {/*SECOND ROW */}
              {/*CURRENCY*/}
              <div className="jp__currency" style={{ flex: 1 }}>
                <div
                  className="jp__cTitle"
                  style={{
                    flex: 0.2,
                    marginRight: 20,
                    textTransform: "uppercase",
                    fontSize: "13px",
                  }}
                >
                  Currency *
                </div>
                <div style={{ display: "flex", flex: 0.8 }}>
                  <Form.Select size="sm" className="w-50">
                    <option>Select currency</option>
                    {(() => {
                      var getCurrency = JSON.parse(
                        localStorage.getItem("getCurrency")
                      );
                      var curr = [];
                      for (var i = 0; i < getCurrency.length; i++) {
                        const description = getCurrency[i]["description"];
                        const actual_code = getCurrency[i]["actual_code"];
                        // const short_descrp = getBranch[i]["short_descrp"];

                        curr.push(
                          <option key={i} value={actual_code}>
                            {description}
                          </option>
                        );
                      }

                      return curr;
                    })()}
                  </Form.Select>
                </div>
              </div>

              {/*VIEW DATE*/}
              <div style={{ flex: 1 }}>
                <div className="jp__viewDate" style={{ flex: 1 }}>
                  <div
                    className="jp__vdTitle"
                    style={{
                      flex: 0.2,
                      marginRight: 20,
                      textTransform: "uppercase",
                      fontSize: "13px",
                    }}
                  >
                    View Date *
                  </div>

                  <input
                    type="date"
                    placeholder="05-AUG-22"
                    style={{
                      border: "1px solid var(--usg-blue)",
                      width: "50%",
                      borderRadius: "5px",
                      height: "30px",
                      flex: 0.2,
                    }}
                  />
                </div>

                {/*SECOND BOX SHADOW */}
                {/*DOCUMENT REF*/}
                <div
                  style={{
                    marginTop: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <div className="jp__documentRef" style={{ flex: 0.5 }}>
                    <div
                      className="jp__drTitle"
                      style={{
                        flex: 0.2,
                        marginRight: 20,
                        textTransform: "uppercase",
                        fontSize: "13px",
                      }}
                    >
                      Document Ref *
                    </div>

                    <div style={{ flex: 0.8 }}>
                      <Form.Control
                        type="text"
                        placeholder="Document Id"
                        size="sm"
                        className="w-50"
                        autoComplete={false}
                        autoSave={false}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <br />

              {/*FOURTH ROW */}
              <div className="jp__documentTransDetails" style={{ flex: 0.5 }}>
                <div
                  className="jp__drTitle"
                  style={{
                    flex: 0.2,
                    textTransform: "uppercase",
                    marginRight: 20,
                    fontSize: "13px",
                  }}
                >
                  Transaction Details *
                </div>
                <div style={{ flex: 0.8 }}>
                  <Form.Control
                    as="textarea"
                    type="text"
                    placeholder="Please enter transaction details"
                    size="sm"
                    className="w-50"
                    autoComplete={false}
                    autoSave={false}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        <br />

        {/*THE BUTTON GROUP SECTION*/}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px",
            borderTop: "3px solid var(--usg-blue)",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <Button
              variant="outline-primary"
              // className="w-50"
              size="sm"
              style={{
                marginRight: "10px",
                fontSize: "13px",

                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              Posted Transaction
            </Button>
            <Button
              variant="outline-primary"
              // className="w-100 mb-1"
              size="sm"
              style={{
                marginRight: "10px",
                fontSize: "13px",

                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              View Suspended
            </Button>{" "}
          </div>
          <div style={{ display: "flex" }}>
            <Button
              variant="outline-primary"
              // className="w-75 mb-1"
              size="sm"
              style={{
                marginRight: "10px",
                fontSize: "13px",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              Clear
            </Button>{" "}
            <Button
              variant="outline-primary"
              // className="w-75 mb-1"
              size="sm"
              style={{
                marginRight: "10px",
                fontSize: "13px",

                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              Suspend
            </Button>{" "}
            <Button
              variant="outline-success"
              // className="w-75 mb-1"
              size="sm"
              style={{
                marginRight: "10px",
                fontSize: "13px",

                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              Post
            </Button>{" "}
            <Button
              variant="outline-danger"
              size="sm"
              // className="w-75 mb-1"
              style={{
                marginRight: "10px",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              Exit
            </Button>{" "}
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            backgroundColor: "var(--usg-blue)",
            padding: "5px",
            color: "white",
            fontSize: "16px",
          }}
        >
          JOURNAL
        </div>
        {/**THE DATA TABLE */}
        <div>
          {/**Data Table */}
          <Box
            sx={{
              height: "220px",
              width: "auto",
              padding: "10px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",

              "& .super-app-theme--header": {
                backgroundColor: "rgb(85, 130, 192)",
                color: "white",
                fontSize: "13px",
                textAlign: "center",
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
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            fontWeight: 500,
            color: "var(--usg-blueHeader)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "100%",
                textAlign: "right",
                marginRight: "10px",
                textTransform: "uppercase",
                fontSize: "13px",
              }}
            >
              Account name
            </div>
            <Form.Control
              type="text"
              placeholder=""
              disabled
              size="sm"
              className="w-100"
              style={{ marginRight: "10px" }}
              autoComplete={false}
              autoSave={false}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "100%",
                textAlign: "right",
                marginRight: "10px",
                textTransform: "uppercase",
                fontSize: "13px",
              }}
            >
              Chart Group
            </div>
            <Form.Control
              type="text"
              placeholder=""
              disabled
              size="sm"
              className="w-100"
              autoComplete={false}
              autoSave={false}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "100%",
                textAlign: "right",
                marginRight: "10px",
                marginLeft: "5px",
                textTransform: "uppercase",
                fontSize: "13px",
              }}
            >
              Account Balance
            </div>
            <Form.Control
              type="text"
              placeholder=""
              size="sm"
              disabled
              className="w-100"
              autoComplete={false}
              autoSave={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JournalPosting;
