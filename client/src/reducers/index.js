import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { userReducer } from "./userReducer"

// We combine the reducers here so that they
// can be left split apart above
const rootReducer = combineReducers({
    loginReducer,
    userReducer
})

export default rootReducer;