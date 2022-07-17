// inasial state
export const inasialMessage = {
    name : "Ananda Kumar Saha",
    age : 35,
    skill : "MERN",
    error : false
};

// message Reducer
export const messageReducer = (state, {type, payload}) => {
    console.log(payload);
    // when we use spred oprator on input fild than dispatch() send  all input value
    // when we use spred oprator only on Reducer function than dispatch() send  single input value

    return state = {...state, ...payload} ;
    // return state = payload ;
}
