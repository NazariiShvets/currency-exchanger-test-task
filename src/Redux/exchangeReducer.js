import axios from 'axios'


const TOGGLE_EXCHANGES_FETCHING = 'TOGGLE_EXCHANGES_FETCHING'
const SET_EXCHANGES = 'SET_EXCHANGES'
const SET_INITIAL_EXCHANGES = 'SET_INITIAL_EXCHANGES'
const SET_EXCHANGE_TO_FAVORITES = 'SET_EXCHANGE_TO_FAVORITES'
const REMOVE_EXCHANGE_FROM_FAVORITES = 'REMOVE_EXCHANGE_FROM_FAVORITES'
const SET_BASIC_RATE = 'SET_BASIC_RATE'

const initialState = {
    exchanges: [],
    isExchangesFetching: true,
    favoriteExchanges: [],
    basicRate: {
        r030: 1,
        txt: 'Українська гривня',
        rate: 1,
        cc: 'UAH',
        exchangedate: '28.12.2020'
    },
}

const exchangeReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_EXCHANGE_TO_FAVORITES :
            return {...state, favoriteExchanges: [...state.favoriteExchanges, payload]}
        case REMOVE_EXCHANGE_FROM_FAVORITES :
            return {...state, favoriteExchanges: state.favoriteExchanges.filter(rate => rate.r030 !== payload.r030)}
        case TOGGLE_EXCHANGES_FETCHING :
            return {...state, isExchangesFetching: payload}
        case SET_EXCHANGES :
            return {...state, exchanges: payload}
        case SET_BASIC_RATE :
            return {...state, basicRate: payload}
        case SET_INITIAL_EXCHANGES:
            return {...initialState, favoriteExchanges: state.favoriteExchanges}
        default :
            return state
    }
}

const isFetching = bool => ({type: TOGGLE_EXCHANGES_FETCHING, payload: bool})
export const setExchanges = arr => ({type: SET_EXCHANGES, payload: arr})
export const addToFavorite = obj => ({type: SET_EXCHANGE_TO_FAVORITES, payload: obj})
export const removeFromFavorite = obj => ({type: REMOVE_EXCHANGE_FROM_FAVORITES, payload: obj})
export const setBasicRate = obj => ({type: SET_BASIC_RATE, payload: obj})
export const setInitialStateToExchanges = () => ({type: SET_INITIAL_EXCHANGES})

export const getExchanges = () => async dispatch => {
    dispatch(isFetching(true))
    const {data} = await axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`)
    data.push({
        r030: 1,
        txt: 'Українська гривня',
        rate: 1,
        cc: 'UAH',
        exchangedate: '28.12.2020'
    })
    dispatch(setExchanges(data))
    dispatch(isFetching(false))
}

export default exchangeReducer