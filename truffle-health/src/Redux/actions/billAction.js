import {ActionTypes} from '../constants/actionTypes'


export const submitBill=(bill_data)=>{
    return async dispatch =>{
        dispatch({
            type:ActionTypes.SUBMIT_BILLS,
            payload:bill_data
        })
    }
}

