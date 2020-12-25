const TOGGLE_IS_DARK_THEME = 'TOGGLE_IS_DARK_THEME'

const initialState = {
    isDarkTheme: localStorage.getItem('darkTheme') || false,
}

const globalContextReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case TOGGLE_IS_DARK_THEME :
            return {...state, isDarkTheme: payload}
        default :
            return state
    }
}


export const toggleIsDarkTheme = bool => ({type: TOGGLE_IS_DARK_THEME, payload: bool})

export default globalContextReducer