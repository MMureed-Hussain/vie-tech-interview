import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import logoImage from "../images/logo192.png";
import { AddCart } from "./AddCart";

export const Navbars = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleTrashIconClick = () => {
    setShowSidebar(true);
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle className="m-2" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ justifyContent: "center" }}
        >
          <Nav className="mr-auto" style={{ fontWeight: "bold" }}>
            <Link className="mx-3" to="/" style={{ textDecoration: "none" }}>
              <img
                src={logoImage}
                alt="Logo"
                style={{ maxWidth: "100px", maxHeight: "30px" }} // Adjust image dimensions as needed
              />
              <span style={{ color: "green" }}>K</span>
              <span style={{ color: "blue" }}>i</span>
              <span style={{ color: "red" }}>tt</span>
              <span style={{ color: "blue" }}>o</span>
              <span style={{ color: "red" }}>n</span>
            </Link>
            <Link
              className="text-success mx-3"
              to="/"
              style={{ textDecoration: "none" }}
            >
              <span>
                <i className="fa fa-home mx-1"></i>
              </span>
              HOME
            </Link>
            <Link
              to="/about"
              className="mx-3"
              style={{ textDecoration: "none", color: "#9f1094" }}
            >
              <span>
                <i className="fa fa-user mx-1"></i>
              </span>
              ABOUT
            </Link>
            <Link
              to="/class"
              className="text-danger mx-3"
              style={{ textDecoration: "none" }}
            >
              <span>
                <i className="fa fa-file-text-o mx-1"></i>
              </span>
              CLASSES
            </Link>
            <Link
              to="/blog"
              className="text-info mx-3"
              style={{ textDecoration: "none" }}
            >
              <span>
                <i className="fa fa-pencil mx-1"></i>
              </span>
              BLOG
            </Link>
            <Link
              to="/pages"
              className="mx-3"
              style={{ textDecoration: "none", color: "red" }}
            >
              <span>
                <i className="fa fa-align-justify mx-1"></i>
              </span>
              PAGES
            </Link>
            <Link
              className="text-primary mx-3"
              to="/contact"
              style={{ textDecoration: "none" }}
            >
              <span>
                <i class="fa-solid fa-location-dot mx-1"></i>
              </span>
              CONTACT
            </Link>
            <Link to="" className="mx-3" style={{ color: "#9f1094" }}>
              <i className="fa fa-search"></i>
            </Link>
            <Link
              to=""
              className="text-secondary mx-3"
              onClick={handleTrashIconClick}
            >
              <i className="fa fa-trash-o"></i>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {showSidebar && (
        <AddCart show={showSidebar} handleClose={handleCloseSidebar} />
      )}
    </>
  );
};
