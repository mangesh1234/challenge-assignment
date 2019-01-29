import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import allReducers  from '../reducers/index'

const store = createStore(allReducers, 
    applyMiddleware(logger))

export default store