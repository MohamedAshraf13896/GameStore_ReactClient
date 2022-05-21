import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import "../App.css";

import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
} from "react-bootstrap";

import "../index.css";

export function Header() {
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div
                style={{ margin: "0 0 0 30px", padding: "10px" }}
                className="d-flex"
              >
                <Nav.Link
                  style={{
                    fontSize: "19px",
                    marginRight: "30px",
                    color: "#c7c1c1",
                  }}
                  href="#action1"
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  style={{
                    fontSize: "19px",
                    marginRight: "30px",
                    color: "#c7c1c1",
                  }}
                  href="#action2"
                >
                  Register
                </Nav.Link>

                <Nav.Link
                  style={{
                    fontSize: "19px",
                    marginRight: "30px",
                    color: "#c7c1c1",
                  }}
                  href="#action2"
                >
                  Login
                </Nav.Link>
              </div>
            </Nav>

            <div className="d-flex">
              <span className="iconify" data-icon="akar-icons:heart"></span>
              <LocalGroceryStoreOutlinedIcon sx={{ color: "#c7c1c1" }} />
              <FavoriteBorderIcon
                sx={{ margin: "0 50px 0 30px", color: "#c7c1c1" }}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
