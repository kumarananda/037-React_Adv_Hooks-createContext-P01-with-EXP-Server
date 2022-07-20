

import { useContext } from 'react';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'
import MsgContext from '../../context/MsgContex';




const Home = () => {

  const { msgState, dispatch  } = useContext(MsgContext);


  return (
    <>
      <Container className='my-5'>
        <Row className='justify-content-center'>
          <Col md={5}>
            <Card className='shadow'>
              <Card.Body>
                <input onChange={e => dispatch({type : 'Msg_Udate' , payload : e.target.value})} type="text" value={msgState}  className='form-control' />
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    
    </>
  )
}

export default Home;


