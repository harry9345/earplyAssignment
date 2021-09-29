import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthButton } from "../../../components/auth/Auth";

import "./navigation.scss";

export default function Navigation(props) {
  return (
    <Navbar fixed="top" bg="light" expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand> News From NewsAPI</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/main">Main </NavLink>
            <NavLink to="/story">Story </NavLink>
            <NavLink to="/profile">Profile </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Navbar.Brand>{props.name}</Navbar.Brand>
          <AuthButton />
        </Nav>
      </Container>
    </Navbar>
  );
}
