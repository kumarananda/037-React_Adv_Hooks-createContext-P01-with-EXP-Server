import React, { useReducer } from 'react'
// import { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'


const reducer = (state, action) => {
  // console.log(action);
  return state = action.paload
}
// hare inetial/default value == state
// action recive object type data from dispatch



const Home = () => {

  // const [kotha, setKotha] = useState('I love Reducers');

  const [kotha, dispatch] = useReducer(reducer, 'This is reducer');
      // value
      //       function call from DOM
      //                                function call from JS(out of components)
      //                                            inasial/default value


  return (
    <>
      <Container className='my-5'>
        <Row className='justify-content-center'>
          <Col md={4}>
            <Card className='shadow'>
              <Card.Body>
                <input type='text' className='form-control' value={kotha} onChange={(e) => dispatch({type:'', paload : e.target.value})} />
                <hr />
                <h1>{kotha}</h1>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    
    </>
  )
}

export default Home