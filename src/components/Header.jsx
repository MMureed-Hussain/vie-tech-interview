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
                <i class="fa fa-clock-o m-1"></i> 9:30am-6-30pm Mon-Sun |
                <i class="fa fa-phone m-1 "></i>+9230001234567 |
                <i class="fa-solid fa-location-dot mx-1"></i>DHA Lahore
              </span>
            </div>
            <div className="">
              <Link to="" className="text-white me-4">
                <i class="fab fa-facebook-messenger "></i>
              </Link>
              <Link to="" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="" className="text-white me-4">
              <i class="fa-brands fa-vimeo-v"></i>
              </Link>
              <Link to="" className="text-white me-4">
                <i className="fab fa-skype"></i>
              </Link>
              <Link to="" className="text-white me-4">
              <i class="fa-solid fa-wifi"></i>
              </Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
