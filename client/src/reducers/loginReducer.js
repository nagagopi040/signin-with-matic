import { USER_LOGIN, LOGOUT_SUCCESS } from "../actions";

export function loginReducer(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem("token") ? true : false
}, action) {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                isAuthenticated: true
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        default:
            return state
    }
}