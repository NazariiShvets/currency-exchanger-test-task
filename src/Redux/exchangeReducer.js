import axios from 'axios'


const TOGGLE_EXCHANGES_FETCHING = 'TOGGLE_EXCHANGES_FETCHING'
const SET_EXCHANGES = 'SET_EXCHANGES'
const SET_INITIAL_EXCHANGES = 'SET_INITIAL_EXCHANGES'
const SET_EXCHANGE_TO_FAVORITES = 'SET_EXCHANGE_TO_FAVORITES'

const initialState = {
    exchanges: [],
    isExchangesFetching: true,
    favoriteExchanges: [],
}

const exchangeReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_EXCHANGE_TO_FAVORITES :
            return {...state, favoriteExchanges: [...state.favoriteExchanges, payload]}
        case TOGGLE_EXCHANGES_FETCHING :
            return {...state, isExchangesFetching: payload}
        case SET_EXCHANGES :
            return {...state, exchanges: payload}
        case SET_INITIAL_EXCHANGES:
            return {...initialState}
        default :
            return state
    }
}

const isFetching = bool => ({type: TOGGLE_EXCHANGES_FETCHING, payload: bool})
export const setExchanges = arr => ({type: SET_EXCHANGES, payload: arr})
export const addToFavoriteButtonHandler = obj => ({type: SET_EXCHANGE_TO_FAVORITES, payload: obj})
export const setInitialStateToExchanges = () => ({type: SET_INITIAL_EXCHANGES})

export const getExchanges = () => async dispatch => {
    dispatch(isFetching(true))
    const response = await axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`)
    const favoriteRates = response.data.filter(rate => true)
    dispatch(setExchanges(response.data))
    dispatch(isFetching(false))
}

export default exchangeReducer