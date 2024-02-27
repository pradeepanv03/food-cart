import React, { useState }from 'react'
import { Container, Row, Col, Image, Button, ToastContainer  } from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast';
// import ToastContainer from 'react-bootstrap/ToastContainer';
const Pickoftheweek = () => {

    const [show, setShow] = useState(false);

  return (
<section id='musttry' className='my-3'>
<div className='text-center'>

<h2 className='display-5 text-primary py-3'>
<span><i class="bi bi-search-heart"></i></span>
 Pick of the week</h2>
 </div>

 <Container>
 <Row className='align-items-center'>
<Col md={7}>
<Image className='' src='https://cdn.pixabay.com/photo/2023/05/28/11/47/ai-generated-8023476_1280.jpg' fluid={true} alt='Pizza' rounded></Image>
</Col>
<Col md={5}>
    <div>
        <h1>Specifical Noodels</h1>
        <p className='lead text-muted'>Food is any substance consumed by an organism for nutritional support.</p>
        <Button onClick={() => setShow(true) }>
        <i class="bi bi-basket"></i>  Buy Now
        </Button>
    </div>
</Col>
</Row>

<ToastContainer
          className="position-fixed bottom-0 end-0 p-3"
          position={'bottom-end'}
          style={{ zIndex: 1 }}
        >
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added!</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body> Items added to cart</Toast.Body>
          </Toast>
        </ToastContainer>

 </Container>
 
</section>
    )
}

export default Pickoftheweek