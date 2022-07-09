
import { useState } from 'react';
// import {Container, Row, Col} from 'react-bootstrap'
import './App.css';
// import Page1 from './components/pages/Page1';
// import Page2 from './components/pages/Page2';
// import Page3 from './components/pages/Page3';
// import Page4 from './components/pages/Page4';
// import MsgContext from './context/msgContext';
// import foodContexet from './context/foodContexet';
import Home from './components/pages/Home';


function App() {

  const [msg, setMsg] = useState('');
  const ageCal = (age) => {
    return `your age is ${age}`
  }



  return (
    <>

      <Home/>

    </>
  );
}

export default App;
