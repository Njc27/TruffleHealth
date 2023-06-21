import {ActionTypes} from '../constants/actionTypes'

const initialState = {
    userData:[],
    loggedInUser:{}
 };
 export const userReducer = (state = initialState, {type,payload}) => {
   console.log(type,payload)
    switch (type) {
        case(ActionTypes.SIGNUP_ACTION):
      return {...state,userData:[...state.userData,...payload]}
      case(ActionTypes.LOGIN_ACTION):
      return {...state,loggedInUser:payload}
       default:
          return state;
    }
 }