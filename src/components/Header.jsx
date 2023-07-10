import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="secondary" data-bs-theme="dark" color="light">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>AYA</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>

          <Nav.Link onClick={() => navigate("/about")}>About me</Nav.Link>

          <Nav.Link onClick={() => navigate("/hobbies")}>Hobbies</Nav.Link>

          <Nav.Link onClick={() => navigate("/skills")}>Skills</Nav.Link>

          <Nav.Link onClick={() => navigate("/education")}>Education</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
