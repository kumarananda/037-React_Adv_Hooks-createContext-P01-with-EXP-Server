import React from 'react'
import { useContext } from 'react'
import foodContexet from '../../context/foodContexet';
import MsgContext from '../../context/msgContext'

const Page2 = () => {
  const { msg, data1  } = useContext(MsgContext);
  const {sobje} = useContext(foodContexet)
  // console.log(sobje);

  return (
    <div>
        <h1 >{msg}</h1>
        <div>
          <ul>
              {
                data1.map(itemn => 
                  <li>{itemn}</li>
                )
              }
            </ul>
        </div>


    </div>
  )
}

export default Page2