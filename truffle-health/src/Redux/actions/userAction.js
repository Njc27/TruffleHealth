import {ActionTypes} from '../constants/actionTypes'


export const registerUser=(user_data)=>{
    return async dispatch =>{
        dispatch({
            type:ActionTypes.SIGNUP_ACTION,
            payload:user_data
        })
    }
}

export const loginUser=(login_data)=>{
    return async dispatch =>{
        dispatch({
            type:ActionTypes.LOGIN_ACTION,
            payload:login_data
        })
    }
}




