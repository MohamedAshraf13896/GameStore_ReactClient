import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { NavLink } from "react-router-dom";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import "../App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../index.css";
export function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="bg-transparent" variant="dark">
        <Container className="mt-3">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="mt-2"
                style={{
                  fontSize: "23px",
                  margin: "40px 30px 30px 30px",
                }}
              >
                <NavLink
                  className="mt-2 "
                  style={{
                    color: "rgb(202 210 215)",
                    textDecoration: "none",
                  }}
                  to={`/`}
                >
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link
                className="mt-2"
                style={{
                  fontSize: "23px",
                  marginRight: "30px",
                }}
              >
                {" "}
                <NavLink
                  className="mt-2"
                  style={{
                    color: "rgb(202 210 215)",
                    textDecoration: "none",
                  }}
                  to={`/Register`}
                >
                  Register
                </NavLink>
              </Nav.Link>
              <Nav.Link
                className="mt-2"
                style={{
                  fontSize: "23px",
                  marginRight: "30px",
                }}
              >
                {" "}
                <NavLink
                  className="mt-2"
                  style={{
                    color: "rgb(202 210 215)",
                    textDecoration: "none",
                  }}
                  to={`/Login`}
                >
                  Login
                </NavLink>
              </Nav.Link>
              <NavDropdown
                className="mt-2"
                style={{
                  fontSize: "23px",
                  marginRight: "30px",
                }}
                title="Admin"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <NavLink
                    className="mt-2 fa-caret-down"
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                    to={`/Forms`}
                  >
                    Add Game
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    className="mt-2"
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                    to={`/AddCateogory`}
                  >
                    Add Cateogory
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    className="mt-2"
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                    to={`/AddPlatform`}
                  >
                    Add Platform
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="d-flex mt-3">
          <span className="iconify" data-icon="akar-icons:heart"></span>
          <LocalGroceryStoreOutlinedIcon sx={{ color: "#c7c1c1" }} />
          <FavoriteBorderIcon
            sx={{ margin: "0 50px 0 30px", color: "#c7c1c1" }}
          />
        </div>
      </Navbar>
    </>
  );
}
