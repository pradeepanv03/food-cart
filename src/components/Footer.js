import React from 'react'
import './Footer.css';
 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
const Footer = () => {
    return (
<section id='foot'>
    
            <div className='container-fluid' >

                {/* <div className='row'>
                    <div className='col-md-3 col-sm-6'>
                        <h4> Lorem ipsum</h4>
                        <ul className='list-unstyled'>
                            <li> Lorem ipsum</li>
                            <li> Lorem ipsum</li>
                            <li> Lorem ipsum</li>
                            <li> Lorem ipsum</li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4> Lorem ipsum</h4>
                        <ul className='list-unstyled'>
                            <li> Lorem ipsum</li>
                            <li> Lorem ipsum</li>
                            <li> Lorem ipsum</li>
                            <li> Lorem ipsum</li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4> Lorem ipsum</h4>
                        <ul className='list-unstyled'>
                            <li> Lorem ipsum</li>
                            <li> Lorem ipsum</li>
                            <li> Lorem ipsum</li>
                            <li> Lorem ipsum</li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4> Lorem ipsum</h4>
                        <ul className='list-unstyled'>
                            <li> Lorem ipsum</li>
                            <li> Lorem ipsum</li>
                            <li> Lorem ipsum</li>
                            <li> Lorem ipsum</li>
                        </ul>
                    </div>
    
                </div> */}
            </div>
            <Navbar expand="md" className="bg-body-tertiary " >
            <Container>
              <Navbar.Brand href="#home" className='justify-content-center'><p >copyright 2024</p></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                <Nav >
                  <Nav.Link href="https://twitter.com/" className='fw-bold'><i class="bi bi-twitter-x"></i></Nav.Link>
                  <Nav.Link href="https://www.instagram.com/"className='fw-bold'><i class="bi bi-instagram"></i></Nav.Link>
                  <Nav.Link href="https://www.facebook.com/"className='fw-bold'><i class="bi bi-facebook"></i></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
</section>
)
    }



            export default Footer



