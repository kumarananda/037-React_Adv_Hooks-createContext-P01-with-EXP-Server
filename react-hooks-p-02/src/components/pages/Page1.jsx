import React from 'react'
import { useContext } from 'react'
import MsgContext from '../../context/msgContext'



const Page1 = () => {

  const {msg, setMsg, } = useContext(MsgContext)
    
  return (
    <div>
      <input type="text" value={msg} onChange={e => setMsg(e.target.value)} />
    </div>
  )
}

export default Page1