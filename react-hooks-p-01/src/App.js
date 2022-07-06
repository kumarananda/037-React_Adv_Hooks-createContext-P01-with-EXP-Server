
import {Container, Row, Col} from 'react-bootstrap'
import './App.css';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Page3 from './components/pages/Page3';
import Page4 from './components/pages/Page4';

function App() {
  return (
    < >
      
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
    </>
  );
}

export default App;
