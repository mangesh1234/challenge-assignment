import {combineReducers} from "redux";
import eventsReducer from "./eventsReducer";

const allReducers = combineReducers({
    events: eventsReducer
});

export default allReducers;