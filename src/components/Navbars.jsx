import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Navbars = () => {
  return (
    <>
      <br />
      <Navbar className="bg-light" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link
              className="text-success mx-5 fs-4 bold"
              style={{ textDecoration: "none" }}
              to="/"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-secondary mx-5 fs-4"
              style={{ textDecoration: "none" }}
            >
              ABOUT
            </Link>
            <Link
              to="/class"
              className="text-warning mx-5 fs-4"
              style={{ textDecoration: "none" }}
            >
              CLASSES
            </Link>
            <Link
              to="/blog"
              className="text-danger mx-5 fs-4"
              style={{ textDecoration: "none" }}
            >
              BLOG
            </Link>
            <Link
              to="/pages"
              className="text-info mx-5  fs-4"
              style={{ textDecoration: "none" }}
            >
              PAGES
            </Link>
            <Link
              className="text-primary mx-5 fs-4"
              to="/contact"
              style={{ textDecoration: "none" }}
            >
              CONTACT
            </Link>
            <Link to="" className="text-info me-4">
            <i className="fa fa-search"></i>
              </Link>
              <Link to="" className="text-info me-4">
              <i className="fa fa-shopping-cart"></i>
              </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
