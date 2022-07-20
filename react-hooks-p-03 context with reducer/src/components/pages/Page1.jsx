import React from 'react'
import { useContext } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import MsgContext from '../../context/MsgContex';




const Page1 = () => {

  const {msgState} = useContext(MsgContext);
    
  return (
    <>
      <Container className='my-5'>
        <Row className='justify-content-center'>
          <Col md={5}>
            <Card className='shadow'>
              <Card.Body>
              <div className='my-3'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat ducimus reiciendis reprehenderit error consequatur maiores itaque consequuntur, laborum ratione suscipit debitis nihil id beatae illum veniam officiis odit voluptatum sunt.</p>
                <h1>{msgState}</h1>
              </div>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>

    </>
  )
}

export default Page1