import React from "react";
import { Modal, Button } from "react-bootstrap";

export const AddCart = ({ show, handleClose }) => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: "500px",
          backgroundColor: "#f8f9fa",
          boxShadow: "-1px 0 10px rgba(0,0,0,0.1)",
          transition: "0.3s",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="p-3" style={{ flex: "1" }}>
          <Modal.Header>
            <Modal.Title variant="secondary">Sidebar Content</Modal.Title>
            <i
              className="fa fa-close"
              style={{ cursor: "pointer" }}
              onClick={handleClose}
            ></i>
          </Modal.Header>
          <Modal.Body>Are you sure you want to Add to Cart</Modal.Body>
        </div>
        <Button
          className="bg-info text-light m-3"
          onClick={handleClose}
          style={{ padding: "10px", textAlign: "center" }}
        >
          Close
        </Button>
      </div>
    </>
  );
};
