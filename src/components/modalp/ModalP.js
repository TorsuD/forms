import React, { useState } from "react";
import LoanEnquiry from "../loan_enquiry/LoanEnquiry";
import "./ModalP.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FiFilePlus, FiMinus, FiX } from "react-icons/fi";
import Swal from "sweetalert2";
import MinimizedTab from "../minimized_tab/MinimizedTab";

function ModalP() {
  var minimizedModal = [];
  var nameOfModal = "Loan Enquiry";
  const [show, setShow] = useState(false);
  const [showMin, setShowMin] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleExit = () => {
    Swal.fire({
      title: "Are you sure you want to close the form?",
      text: "You will lose the data you filled in this form!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, exit this form!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleClose();
      }
    });
  };

  // {click ? <LoanEnquiry /> : ""}
  return (
    <div style={{}}>
      {/**Button for the Loan Enquiry */}
      <div>
        <Button variant="primary" onClick={handleShow}>
          Loan Enquiry
        </Button>
        <br />
        <br />
        <br />

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="xl"
        >
          <Modal.Body className="p-0">
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                fontSize: "12px",
              }}
            >
              <div className="navbar__container">
                <div className="navbar__title">
                  {" "}
                  <FiFilePlus style={{ marginRight: "7px" }} />
                  Facility General Enquiry
                </div>
                <div style={{ display: "flex" }}>
                  <div
                    style={{ padding: 5 }}
                    onClick={() => {
                      minimizedModal.push(nameOfModal);

                      if (minimizedModal.length > 0) {
                        console.log(minimizedModal);
                        setShowMin(true);
                        handleClose();
                      } else {
                        console.log("Nothing is here");
                      }
                    }}
                  >
                    <FiMinus size={18} />
                  </div>

                  <div
                    style={{ padding: "3px" }}
                    onClick={() => {
                      handleExit();
                      minimizedModal.pop(nameOfModal);
                    }}
                  >
                    <FiX size={18} />
                  </div>
                </div>
              </div>

              <LoanEnquiry />
            </div>
          </Modal.Body>
        </Modal>

        <div className={showMin ? "display" : "none"}>
          <MinimizedTab
            title={nameOfModal}
            handleShow={() => {
              handleShow();
              minimizedModal.pop(nameOfModal);
              console.log(minimizedModal);

              if (minimizedModal.length === 0) {
                console.log(minimizedModal);
                setShowMin(false);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ModalP;
