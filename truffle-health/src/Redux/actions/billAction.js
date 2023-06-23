import {ActionTypes} from '../constants/actionTypes'


export const submitBill=(bill_data)=>{
    return async dispatch =>{
        dispatch({
            type:ActionTypes.SUBMIT_BILLS,
            payload:bill_data
        })
    }
}

export const updateBill=(bill_data)=>{
    return async dispatch =>{
        dispatch({
            type:ActionTypes.UPDATE_BILL,
            payload:bill_data
        })
    }
}

