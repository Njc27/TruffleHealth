import {ActionTypes} from '../constants/actionTypes'

const initialState = {
    billData:[]
 };
 export const billReducer = (state = initialState, {type,payload}) => {
   console.log(type,payload)
    switch (type) {
        case(ActionTypes.SUBMIT_BILLS):
      return {...state,...payload}
       default:
          return state;
    }
 }