import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../actions'

export const loginReducer = (state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('token') ? true : false
}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                isFetching: true,
                isAuthenticated: false
            }
        case LOGIN_SUCCESS:
            return {
                isFetching: false,
                isAuthenticated: true,
                sucessMessage: action.successMessage,
                errorMessage: ""
            }
        case LOGIN_FAILURE:
            return {
                isFetching: false,
                isAuthenticated: false,
                sucessMessage: "",
                errorMessage: action.message
            }
        case LOGOUT_SUCCESS:
            return{
                isFetching: true,
                isAuthenticated: false
            }
        default:
            return state
    }
}