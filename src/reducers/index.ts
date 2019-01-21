import {combineReducers} from "redux";
import eventsReducer from "./eventsReducer";
// import dateReducer from "./todos";



const allReducers = combineReducers({
    events: eventsReducer,
    // name: dateReducer
});

export default allReducers;