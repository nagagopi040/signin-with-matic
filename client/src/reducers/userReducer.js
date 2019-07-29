import { USERDATA_REQUEST, USERDATA_SUCCESS, USERDATA_FAILURE } from '../actions'

export const userReducer = (state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('token') ? true : false
}, action) => {
    switch (action.type) {
        case USERDATA_REQUEST:
            return {
                isFetching: true,
            }
        case USERDATA_SUCCESS:
            return {
                isFetching: false,
                errorMessage: '',
                user: action.user,
                successMessage: action.message
            }
        case USERDATA_FAILURE:
            return {
                isFetching: false,
                errorMessage: action.message
            }
        default:
            return state
    }
}