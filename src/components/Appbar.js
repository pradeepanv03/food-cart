import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from './Cart';

const Appbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary position-static">
    <Container>
      <Navbar.Brand href="#home"><h2 className='text-primary'><span><i class="bi bi-yelp"></i></span>Pizza Shop</h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        <Nav >
          <Nav.Link href="#home" className='fw-bold'>Home</Nav.Link>
          <Nav.Link href="#menu"className='fw-bold'>Menu</Nav.Link>
          <Nav.Link href="#musttry"className='fw-bold'>Must Try</Nav.Link>
          <Nav.Link href="#contact"className='fw-bold'>Contact</Nav.Link>
          <Cart/>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Appbar