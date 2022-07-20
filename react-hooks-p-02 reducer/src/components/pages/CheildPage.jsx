import React from 'react'
import { useContext } from 'react'
import MsgContext from '../../context/msgContext'

const CheildPage = () => {
  const {msg, setMsg, ageCal} = useContext(MsgContext, )
  return (
    <>
        <h1>From CheildPage</h1>
        <div>
        <input type="text" value={msg} onChange={e => setMsg(e.target.value)} />
        <p> {ageCal(35)} </p>
    </div>
    </>
  )
}

export default CheildPage;