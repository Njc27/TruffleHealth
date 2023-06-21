import {ActionTypes} from '../constants/actionTypes'

const initialState = {
    loginInputFields:[
        {
            path:"email",
            label:"Email",
            type:"text"
        },
        {
            path:"password",
            label:"Password",
            type:"password"

        }
    ],
    signUpFields:[
        {
            path:"firstName",
            label:"First Name",
            type:"text"

        },
        {
            path:"lastName",
            label:"Last Name",
            type:"text"

        },
        {
            path:"email",
            label:"Email",
            type:"text"

        },
        {
            path:"password",
            label:"Password",
            type:"password"
        }
    ]
 };
 export const screenReducer = (state = initialState, {type,payload}) => {
   console.log(type,payload)
    switch (type) {
       default:
          return state;
    }
 }