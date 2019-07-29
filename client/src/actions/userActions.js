// There are three possible states for our user
// process and we need actions for each of them
export const USERDATA_REQUEST = "USERDATA_REQUEST"
export const USERDATA_SUCCESS = "USERDATA_SUCCESS"
export const USERDATA_FAILURE = "USERDATA_FAILURE"

function requestUserData() {
    return {
        type: USERDATA_REQUEST,
        isFetching: true
    }
}

function receiveUserData(user) {
    return {
        type: USERDATA_SUCCESS,
        isFetching: false,
        user,
        successMessage: user.message
    }
}

function userError(message) {
    return {
        type: USERDATA_FAILURE,
        isFetching: false,
        errorMessage: message
    }
}

export function getUserData(token) {

    let config = {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    return dispatch => {
        dispatch(requestUserData())

        return fetch("http://localhost:8080/user", config)
            .then(response => response.json())
            .then( data => {
                if (data) {
                    dispatch(receiveUserData(data.user))
                } else {
                    dispatch(userError(data.message))
                    return Promise.reject(data)
                }
            }).catch(err => console.log("Error: ", err))
    }
}