import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const Pizzacard = () => {
    const [modalShow, setModalShow] = React.useState(false);

    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Orders
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Items</h4>
              <p>
                Thank you for orders and keep hold your bill wait a few minutes.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

      
  return (
    <>
    <Card className='m-3'>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpa_nbHvdVxELcL5wgzCMFNfXakQ_hrAGi0Q&usqp=CAU" />
    <Card.Body>
      <Card.Title>Items</Card.Title>
      <Card.Text>
        Nice choice enjoy your moments with your foods
      </Card.Text>
      <div className='text-center'>
      <Button variant="primary"onClick={() => setModalShow(true)}>Add cart</Button>

      </div>
    </Card.Body>
  </Card> 
  
  <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

  </>
 )
}

export default Pizzacard