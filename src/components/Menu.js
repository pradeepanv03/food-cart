import React, { useState } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import Pizzacard from './Pizzacard'

const Menu = () => {

    const [menu] = useState([1,2,3,4,5,6])
  return (
    <section className='bg-light' id='menu'>
        <Container>
            <div className='text-center'>
            <h3 className='text-primary my-3 py-5'> Trust me enjoy your food 
            <i class="bi bi-tiktok"></i>
            </h3>
            </div>
            <Row>
                {
                    menu.map((item) => {
                        return (
                        <Col md={6} lg={4} key={item}>
                <Pizzacard/>
                </Col>
                     ) })
                
            }
                
            </Row>
        </Container>
    </section>
  )
}

export default Menu