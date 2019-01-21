import { Events } from "../models/NameEvent";
import initialData = require('../calender-data.json');
import * as moment from 'moment';

let initialState = {
    events:initialData,
    currentDate: moment(new Date()).format("DD MMM YYYY")
}

const eventsReducer = (state:any, action: any) => {

    switch (action.type) {
        case "NEXT_DAY" :
        let nextDate = moment(action.payload.event).format("DD MMM YYYY");
        let nextDay = moment(action.payload.event, "DD MMM, YYYY").add('days', 1);
        console.log('nextDay',moment(nextDay).format("DD MMM YYYY"))
        return {...state, currentDate:moment(nextDay).format("DD MMM YYYY")}

        case "PRIVIOUS_DAY" :
        let previousDate = moment(action.payload.event).format("DD MMM YYYY");
        let previousDay = moment(previousDate, "DD MMM, YYYY").subtract(1, 'days');
        return {...state, currentDate:moment(previousDay).format("DD MMM YYYY")}

        case "TODAY" :
        let today = moment(new Date()).format("DD MMM YYYY");
        return {...state, currentDate:today}

        case "ADD" :
        return {...state, events:[...state.events, action.payload.addEventObject]}

        case "UPDATE" :
        
        return {...state, currentDate:moment(previousDay).format("DD MMM YYYY")}

        case "DELETE" :
      
        return {...state, currentDate:moment(previousDay).format("DD MMM YYYY")}

        default :
            return initialState;

        // case ADDEVENT:
        //     newState = [
        //         // ...state,
        //         action.payload.task, 
        //     ];
        //     console.log("reducer")
        //     return newState;
        // case DELETE_TASK:
        //     // return state.filter(task => task.id !== action.payload.id);
        // return state;
        // default:
        //     return initialState;
    }
}

export default eventsReducer;