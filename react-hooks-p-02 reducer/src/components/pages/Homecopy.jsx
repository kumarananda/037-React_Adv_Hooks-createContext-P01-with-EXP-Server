// // >>03
// import React, { useReducer } from 'react'
// import { Card, Col, Container, Row } from 'react-bootstrap'
// import { inasialMessage, messageReducer } from '../../Reducers/messageReducer';



// const Homecopy = () => {

//   const [message, dispatch] = useReducer(messageReducer, inasialMessage);
//   console.log(message.name);

//   return (
//     <>
//       <Container className='my-5'>
//         <Row className='justify-content-center'>
//           <Col md={4}>
//             <Card className='shadow'>
//               <Card.Body>
//                 <input type='text' className='form-control' value={message.name} onChange={(e) => dispatch({type:'', paload : {...message, name: e.target.value}})} />
//                 <input type='text' className='form-control' value={message.age} onChange={(e) => dispatch({type:'', paload : {...message, age: e.target.value}})} />
//                 <hr />
//                 <h1>{message.name}</h1>
//                 <h1>{message.age}</h1>
//               </Card.Body>
//             </Card>
//           </Col>

//         </Row>
//       </Container>
    
//     </>
//   )
// }

// export default Homecopy;




// // >>02
// import React, { useReducer } from 'react'
// // import { useState } from 'react'
// import { Card, Col, Container, Row } from 'react-bootstrap'

// // 01
// // const reducer = (state, action) => {
// //   // console.log(action);
// //   return state = action.paload
// // }
// // // hare inetial/default value == state
// // // action recive object type data from dispatch
// // 02


// const messageReducer = (state, {type, paload}) => {

//   return state = paload;

// }

// const inasialMessage = 'Value is changeable vai ReducerPayload'




// const Homecopy = () => {

//   const [message, dispatch] = useReducer(messageReducer, inasialMessage);
//       // value
//       //       function call from DOM
//       //                                 function call from JS(out of components)
//       //                                                inasial/default value


//   return (
//     <>
//       <Container className='my-5'>
//         <Row className='justify-content-center'>
//           <Col md={4}>
//             <Card className='shadow'>
//               <Card.Body>
//                 <input type='text' className='form-control' value={message} onChange={(e) => dispatch({type:'', paload : e.target.value})} />
//                 <hr />
//                 <h1>{message}</h1>
//               </Card.Body>
//             </Card>
//           </Col>

//         </Row>
//       </Container>
    
//     </>
//   )
// }

// export default Homecopy




// // >> 01
// import React, { useReducer } from 'react'
// // import { useState } from 'react'
// import { Card, Col, Container, Row } from 'react-bootstrap'

// // 01
// // const reducer = (state, action) => {
// //   // console.log(action);
// //   return state = action.paload
// // }
// // // hare inetial/default value == state
// // // action recive object type data from dispatch
// // 02
// const reducer = (state, {type, paload}) => {

//   return state = paload;

// }




// const Homecopy = () => {

//   // const [kotha, setKotha] = useState('I love Reducers');

//   const [kotha, dispatch] = useReducer(reducer, 'This is reducer & paload');
//       // value
//       //       function call from DOM
//       //                                function call from JS(out of components)
//       //                                             inasial/default value


//   return (
//     <>
//       <Container className='my-5'>
//         <Row className='justify-content-center'>
//           <Col md={4}>
//             <Card className='shadow'>
//               <Card.Body>
//                 <input type='text' className='form-control' value={kotha} onChange={(e) => dispatch({type:'', paload : e.target.value})} />
//                 <hr />
//                 <h1>{kotha}</h1>
//               </Card.Body>
//             </Card>
//           </Col>

//         </Row>
//       </Container>
    
//     </>
//   )
// }

// export default Homecopy