import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Navbar data-bs-theme="dark" style={{ backgroundColor: "#9f1094" }}>
        <Container>
          <Nav
            className="me-auto"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div className="me-5">
              <span className="text-light">
                9:30am-6-30pm Mon-Sun | +9230001234567 | DHA Lahore
              </span>
            </div>
            <div className="">
              <Link to="" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="" className="text-white me-4">
                <i className="fab fa-google"></i>
              </Link>
              <Link to="" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </Link>
              <Link to="" className="text-white me-4">
                <i className="fab fa-github"></i>
              </Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
