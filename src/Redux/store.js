import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import footerReducer from './footerReducer'
import headerReducer from './headerReducer'
import globalContextReducer from './globalContextReducer'


const reducers = combineReducers({
    global: globalContextReducer,
    header: headerReducer,
    footer: footerReducer,
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store