import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import exchangeReducer from './exchangeReducer'
import footerReducer from './footerReducer'
import headerReducer from './headerReducer'


const reducers = combineReducers({
    exchange: exchangeReducer,
    header: headerReducer,
    footer: footerReducer,
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store