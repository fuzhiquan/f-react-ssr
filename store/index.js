import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export function getClientStore() {
    const initialState = window.context.state
    return createStore(reducers, initialState, applyMiddleware(thunk, logger))
}
export function getServerStore() {
    return createStore(reducers, applyMiddleware(thunk, logger))
}