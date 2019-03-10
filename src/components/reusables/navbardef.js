import React, { Component } from "react";
import {Button,Navbar,Nav} from 'react-bootstrap';

class NavbarDef extends Component {
  render() {
    return (
      <div>
       <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="#/">Home</Nav.Link>
        <Nav.Link href="#login">Login</Nav.Link>
        <Nav.Link href="#signup">Signup</Nav.Link>
        </Nav>
        <Button variant="outline-info" href="#login">Login</Button>
        </Navbar>
      </div>
    );
  }
}
 
export default NavbarDef;