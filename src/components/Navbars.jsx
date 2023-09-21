import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import logoImage from '/images/logo192.png'
import logoImage from "../images/logo192.png";

export const Navbars = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
            className="text-secondary mx-3"
            style={{ textDecoration: "none" }}
          >
            <span>
              <i className="fa fa-home mx-1"></i>
            </span>
            ABOUT
          </Link>
          <Link
            to="/class"
            className="text-warning mx-3"
            style={{ textDecoration: "none" }}
          >
            <span>
              <i className="fa fa-home mx-1"></i>
            </span>
            CLASSES
          </Link>
          <Link
            to="/blog"
            className="text-danger mx-3"
            style={{ textDecoration: "none" }}
          >
            <span>
              <i className="fa fa-home mx-1"></i>
            </span>
            BLOG
          </Link>
          <Link
            to="/pages"
            className="text-info mx-3"
            style={{ textDecoration: "none" }}
          >
            <span>
              <i className="fa fa-home mx-1"></i>
            </span>
            PAGES
          </Link>
          <Link
            className="text-primary mx-3"
            to="/contact"
            style={{ textDecoration: "none" }}
          >
            <span>
              <i className="fa fa-home mx-1"></i>
            </span>
            CONTACT
          </Link>
          <Link to="" className="text-info mx-3">
            <i className="fa fa-search"></i>
          </Link>
          <Link to="" className="text-info mx-3">
            <i className="fa fa-shopping-cart"></i>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
