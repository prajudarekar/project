import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


function NavLink() {
  return (
    <><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        
        <Nav className="justify-content-end" style={{ width: "100%" }}>
        
  
  

          <Nav.Link href="#deets"><Link to="">Home</Link></Nav.Link>
          <Nav.Link href="#deets"><Link to="/about">About</Link></Nav.Link>
          <Nav.Link href="#deets"><Link to="/contact">Contact</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </>
  );
}

export default NavLink;