import React from 'react'
import { useContext } from 'react'
import MsgContext from '../../context/msgContext'

const Page4 = () => {
  const {msg, setMsg} = useContext(MsgContext)
  return (
    <div>
        <input type="text" value={msg} onChange={(e) => setMsg} />
    </div>
  )
}

export default Page4