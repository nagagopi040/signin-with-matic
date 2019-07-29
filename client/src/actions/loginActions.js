// There are three possible states for our login
// process and we need actions for each of them
export const USER_LOGIN = "USER_LOGIN"

export function userLogin(user) {
    return {
        type: USER_LOGIN,
        isFetching: false,
        isAuthenticated: true,
        token: user.token
    }
}