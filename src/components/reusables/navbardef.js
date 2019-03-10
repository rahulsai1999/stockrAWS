import React, { Component } from "react";
import {Button,Navbar,Nav} from 'react-bootstrap';

class NavbarDef extends Component {
  render() {
    return (
      <div>
       <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#/">Home</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Navbar.Brand href="#home">Stockr</Navbar.Brand>
        </Nav>
          <Button variant="danger" href="#login">Login</Button>
          <Button variant="success" href="#signup">Signup</Button>
        </Navbar>
      </div>
    );
  }
}
 
export default NavbarDef;