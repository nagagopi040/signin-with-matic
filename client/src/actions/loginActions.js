// There are three possible states for our login
// process and we need actions for each of them
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

function requestLogin(creds) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    }
}

function receiveLogin(user) {
    console.log(user)
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        token: user.token,
        successMessage: user.message
    }
}

function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

export function loginUser(creds) {

    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `email=${creds.email}&password=${creds.password}`
    }

    return dispatch => {
        dispatch(requestLogin(creds));
        return fetch('http://localhost:8080/auth/signin', config)
            .then(response => response.json())
            .then( data => {
                if(data){
                    localStorage.setItem('token', data.token);
                    dispatch(receiveLogin(data));
                } else {
                    dispatch(loginError(data.message))
                    return Promise.reject(data)
                }
            }).catch(err => console.log("Error: ", err))
    }
}