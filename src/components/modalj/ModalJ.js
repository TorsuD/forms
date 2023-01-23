import "./ModalJ.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import JournalPosting from "../journal_posting/JournalPosting";
import { FiFilePlus, FiX } from "react-icons/fi";
import Swal from "sweetalert2";

function ModalJ() {
  const [show, setShow] = useState(false);

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

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Journal Posting
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Body className="p-0">
          <div
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              fontSize: "13px",
            }}
          >
            <div className="navbar__container">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >
                <FiFilePlus style={{ marginRight: "7px" }} />
                JOURNAL
              </div>
              <div style={{ padding: "3px" }} onClick={handleExit}>
                <FiX size={18} />
              </div>
            </div>

            <JournalPosting />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalJ;
