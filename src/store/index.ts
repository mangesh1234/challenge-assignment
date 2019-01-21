import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import allReducers  from '../reducers/index'
import { Name } from "../models/NameEvent";
import * as moment from 'moment';

let todaysDate = (new Date());

export interface IAppState {
    currentDate:any
}

const INITIAL_STATE: IAppState = {
    currentDate : moment(todaysDate).format("DD MMM, YYYY")
}


const store = createStore(allReducers, 
    INITIAL_STATE as any,
    applyMiddleware(logger))

export default store