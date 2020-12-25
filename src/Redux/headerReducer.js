const TOGGLE_IS_LOGGED = 'TOGGLE_IS_LOGGED'

const initialState = {
    isLogged: localStorage.getItem('login') || false,
}

const headerReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case TOGGLE_IS_LOGGED :
            return {...state, isLogged: payload}
        default:
            return state
    }
}

export const toggleIsLogged = bool => {
    localStorage.setItem('login', bool.toString())
    return {type: TOGGLE_IS_LOGGED, payload: bool}
}

export default headerReducer