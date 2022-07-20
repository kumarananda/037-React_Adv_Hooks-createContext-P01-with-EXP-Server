// inasial state
export const inasialMessage = {
    name : "Ananda Kumar Saha",
    age : 35,
    skill : "MERN",
    error : false
};


// message Reducer
// export const messageReducer = (state, {type, payload}) => {
//     console.log(payload);
//     // when we use spred oprator on input fild than dispatch() send  all input value
//     // when we use spred oprator only on Reducer function than dispatch() send  single input value

//     return state = {...state, ...payload} ;
//     // return state = payload ;
// }


export const messageReducer = (state, {type, payload}) => {
    console.log(payload);
    

    switch(type){

        case  'DEVS_DATA_LOAD' :

            return state = {...state, ...payload} ;

        case 'ALERT_LOAD' : 

            let error_value = ( payload.error === 'Start' ) ? true : false ;
            return state = {...state, error : error_value } ;

        default : 
        return state;
    }
}
