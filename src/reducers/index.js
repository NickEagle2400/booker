import bookListReducer from "./bookListReducer.js";
import bookDetailsReducer from "./bookDetailsReducer.js"
import { combineReducers } from "redux";

const allReducers = combineReducers({
    bookListReducer: bookListReducer,
    bookDetailsReducer: bookDetailsReducer
})

export default allReducers