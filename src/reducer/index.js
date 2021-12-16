import todoReducer from "./todoReducer";
import { combineReducers } from "redux";

//rootReducer store in store.js
const rootReducer = combineReducers({
    todoReducer
})

export default rootReducer;