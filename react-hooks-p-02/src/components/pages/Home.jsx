// >>04
import React, { useReducer } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { inasialMessage, messageReducer } from '../../Reducers/messageReducer';



const Home = () => {

  const [messageState, dispatch] = useReducer(messageReducer, inasialMessage);

  return (
    <>
      <Container className='my-5'>
        <Row className='justify-content-center'>
          <Col md={4}>
            <Card className='shadow'>
              <Card.Body>
                {/* <input value={messageState.name} onChange={ (e) => dispatch({payload : {...messageState, name : e.target.value }})} placeholder='Enter your Name'  type='text' className='form-control'  /> <br />
                <input value={messageState.age} onChange={ (e) => dispatch({payload : {...messageState, age : e.target.value }})} placeholder='Enter your Mail'  type='text' className='form-control'  /> <br />
                <input value={messageState.skill} onChange={ (e) => dispatch({payload : {...messageState, skill : e.target.value }})} placeholder='Enter your Phone'  type='text' className='form-control'  />
                <hr /> */}

                <input placeholder='Enter your Name'  type='text' className='form-control' value={messageState.name} onChange={ e => dispatch({payload : { name : e.target.value }})}   /> <br />
                <input placeholder='Enter your Age'  type='text' className='form-control' value={messageState.age} onChange={ e => dispatch({payload : { age : e.target.value }})}   /> <br />
                <input placeholder='Enter your Skill'  type='text' className='form-control' value={messageState.skill} onChange={ e => dispatch({payload : { skill : e.target.value }})}   />
                <hr />
                <p>Name: {messageState.name}</p>
                <p>Age: {messageState.age}</p>
                <p>Skill : {messageState.skill}</p>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    
    </>
  )
}

export default Home;


