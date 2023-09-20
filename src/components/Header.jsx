import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <br />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="text-success" to="/">Home</Link>
            <Link to="/about" className="text-secondary">ABOUT</Link>
            <Link to="/class" className="text-warning">CLASSES</Link>
            <Link to="/blog" className="text-danger">BLOG</Link>
            <Link to="/pages" className="text-info">PAGES</Link>
            <Link className="text-primary" to="/contact">CONTACT</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
