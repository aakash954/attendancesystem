import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./bootstrap.min.css";
import "./App.css";

class Top extends Component {
  render() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>Coba Doang</Navbar.Brand>
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Portfolio</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      </>
    );
  }
}

export default Top;
