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
            type:"password",
            regEx :/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
        }
    ],
    billFields:[
        {
            path:"fname",
            label:"First Name",
            type:"text",
            container:"left",
            validation:"Cannot be empty"
        },
        {
            path:"lname",
            label:"Last Name",
            type:"text",
            container:"left",
            validation:"Cannot be empty"


        },
        {
            path:"email",
            label:"Email",
            type:"text",
            container:"left",
            regEx:/[a-z.]*[@]\bnortheastern.edu/,


        },
        {
            path:"phoneNumber",
            label:"Phone Number",
            type:"text",
            container:"left",
            regEx:/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
            validation:"Expected 000-000-0000"


        },
        {
            path:"stName",
            label:"Street Name",
            type:"text",
            container:"left",
            validation:"Cannot be empty"


        },
        {
            path:"city",
            label:"City",
            type:"text",
            container:"left",
            validation:"Cannot be empty"


        },
        {
            path:"state",
            label:"State",
            type:"text",
            container:"right",
            validation:"Cannot be empty"


        },
        {
            path:"zip",
            label:"Zip",
            type:"text",
            container:"right",
            validation:"Cannot be empty"


        },
        {
            path:"Hname",
            label:"Hospital Name",
            type:"text",
            container:"right",
            validation:"Cannot be empty"


        },
       
        {
            path:"billAmount",
            label:"Bill amount",
            type:"number",
            container:"right",
            validation:"Cannot be empty"


        },
        // {
        //     path:"dos",
        //     label:"Date of Service",
        //     type:"date",
        //     container:"right"

        // },
        // {
        //     path:"image",
        //     label:"Photo of bill",
        //     type:"file",
        //     container:"right"

        // },

    ]
 };
 export const screenReducer = (state = initialState, {type,payload}) => {
   console.log(type,payload)
    switch (type) {
       default:
          return state;
    }
 }