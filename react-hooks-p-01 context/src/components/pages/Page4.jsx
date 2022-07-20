import React from 'react'
import { useContext } from 'react'
import MsgContext from '../../context/msgContext'

const Page4 = () => {
  const {msg, setMsg, ageCal} = useContext(MsgContext)
  return (
    <div>
        <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />

        <p>{ageCal(31)}</p>
    </div>
  )
}

export default Page4