


export const initialMsg =  "Banglatdesh"


// msg reducer function
export const msgReducer = (state, {type, payload}) => {

    switch(type){
        case 'Msg_Udate' :
            return payload;
        
        default :
            return state
    }

    
}

// create our msg reducer
// cell form provider 