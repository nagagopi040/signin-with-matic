import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";

// We combine the reducers here so that they
// can be left split apart above
const rootReducer = combineReducers({
    loginReducer
})

export default rootReducer;