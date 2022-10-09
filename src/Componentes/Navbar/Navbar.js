import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="container-navbar">
          <Container >
            <Navbar.Brand>
              <NavLink className="button-navbar" to="/">GEMDAM</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Gemdam Mobile
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className="button-navbar" to="/">HOME</NavLink>
                  <NavLink className="button-navbar" to="/nosotros">NOSOTROS</NavLink>
                  <NavLink className="button-navbar" to="/AR">AR</NavLink>
                  <NavLink className="button-navbar" to="/VR">VR</NavLink>
                  <NavLink className="button-navbar" to="/web">WEB</NavLink>
                  <NavLink className="button-navbar" to="/contacto">CONTACTO</NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
