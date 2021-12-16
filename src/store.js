import { createStore } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducer/index";

//global store
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;