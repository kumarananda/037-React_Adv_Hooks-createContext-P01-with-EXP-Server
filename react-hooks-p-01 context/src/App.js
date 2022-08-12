
import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './App.css';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Page3 from './components/pages/Page3';
import Page4 from './components/pages/Page4';
import MsgContext from './context/msgContext';
import foodContexet from './context/foodContexet';


function App() {

  const [msg, setMsg] = useState('');
  const ageCal = (age) => {
    return `your age is ${age}`
  }



  return (
    < >
      <foodContexet.Provider value={{
        sobje : ['alu', "potol", 'bagun', 'sosa', 'gagor'],
        flower : ['golap', 'chamale', 'togor', 'kodom']
      }}>

        <MsgContext.Provider value={ {
          msg, 
          setMsg, 
          ageCal,
          data1 : ['arrayvalue1', "arrayvalue2", "arrayvalue3", "arrayvalue2", ],
          data2 : {
            obj_val1 : 'value',
            obj_val2 : 'value',
            obj_val3 : 'value',
          }

          } }>



            <Container>
              <Row>
                <Col>
                  <Page1/>
                    <hr/>
                  <Page2/>
                    <hr/>
                  <Page3/>        
                    <hr/>
                  <Page4/>
                </Col>
              </Row>
            </Container>

        </MsgContext.Provider>
      </foodContexet.Provider>


    </>
  );
}

export default App;
