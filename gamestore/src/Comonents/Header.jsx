import React from "react";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
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

            <Navbar bg="light" expand="lg">

                <Container fluid>

                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll">

                        <Nav

                            className="me-auto my-2 my-lg-0"

                            style={{ maxHeight: "100px" }}

                            navbarScroll

                        >

                            <div className="d-flex">

                                <Nav.Link href="#action1">Home</Nav.Link>

                                <Nav.Link href="#action2">Register</Nav.Link>

                                <Nav.Link href="#action2">Login</Nav.Link>

                            </div>

                        </Nav>

                        <div className="d-flex">

                            <span className="iconify" data-icon="akar-icons:heart"></span>
                            <FavoriteTwoToneIcon sx={{color:"red" ,fontSize:12}}/>
                        </div>

                    </Navbar.Collapse>

                </Container>

            </Navbar>

        </>

    );

}