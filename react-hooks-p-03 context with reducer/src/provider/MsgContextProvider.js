import { useReducer } from "react"
import MsgContext from "../context/MsgContex.js"
import { initialMsg, msgReducer } from "../Reducer/msgReducer.js"


const MsgContextProvider = ({children}) => {

    // created/decelired Reducer function  call from context-provider
    const [msgState, dispatch] = useReducer(msgReducer, initialMsg);

  return (
    <MsgContext.Provider value={{ msgState, dispatch }}>
        {children}
    </MsgContext.Provider>
  )
}

export default MsgContextProvider;