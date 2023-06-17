import { combineReducers } from "redux";
import {userReducer} from "./userReducer";
import {billReducer} from "./billReducer";


const reducers = combineReducers({
    user:userReducer,
    bills:billReducer
})

export default reducers