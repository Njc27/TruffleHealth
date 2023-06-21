import { combineReducers } from "redux";
import {userReducer} from "./userReducer";
import {billReducer} from "./billReducer";
import { screenReducer } from "./screenReducer";


const reducers = combineReducers({
    user:userReducer,
    bills:billReducer,
    screens:screenReducer
})

export default reducers