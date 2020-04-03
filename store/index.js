import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import logger from 'redux-logger'

export function getClientStore() {
    return createStore(reducers, applyMiddleware(logger))
}
export function getServerStore() {
    return createStore(reducers, applyMiddleware(logger))
}

