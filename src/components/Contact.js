import React from 'react'
import { Container, Row, Col, InputGroup, Form, FloatingLabel, Button} from 'react-bootstrap'

const Contact = () => {
  return (
<section id='contact' className='pg-light py-3'>

<div className='text-center my-2 py-3'>
    <h1 className='display-5 text-primary py-3'>
        Coments <i class="bi bi-chat-left-heart"></i>
    </h1>
    </div>
<Container>
    <Row className='justify-content-center'>
        <Col md={6}>
            <Form>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i class="bi bi-envelope"></i></InputGroup.Text>

            <FloatingLabel
        controlId="floatingInput"
        label="Email address"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>

      </InputGroup>

      <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i class="bi bi-person-fill"></i></InputGroup.Text>

            <FloatingLabel
        controlId="floatingInput"
        label="Name"
      >
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>

      </InputGroup>
      
      <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
      <Button as="input" type="submit" value="Submit" />
            </Form>
        </Col>
    </Row>
</Container>
</section>
  )
}

export default Contact