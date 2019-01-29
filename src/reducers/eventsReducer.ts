
import initialData = require('../calender-data.json');
import * as moment from 'moment';

let initialState = {
    events: initialData,
    currentDate: moment(new Date()).format("DD MMM YYYY")
}

const eventsReducer = (state: any, action: any) => {

    switch (action.type) {
        case "NEXT_DAY":

            let nextDay = moment(action.payload.event, "DD MMM, YYYY").add('days', 1);
            return { ...state, currentDate: moment(nextDay).format("DD MMM YYYY") }

        case "PRIVIOUS_DAY":
            let previousDate = moment(action.payload.event).format("DD MMM YYYY");
            let previousDay = moment(previousDate, "DD MMM, YYYY").subtract(1, 'days');
            return { ...state, currentDate: moment(previousDay).format("DD MMM YYYY") }

        case "TODAY":

            let today = moment(new Date()).format("DD MMM YYYY");
            return { ...state, currentDate: today }

        case "ADD":

            action.payload.id = `${parseInt(state.events[state.events.length - 1].id) + 1}`;
            return { ...state, events: [...state.events, action.payload] }

        case "EDIT":

            const date = moment(action.payload.startTime).format("DD MMM YYYY");
            const startTime = moment(action.payload.startTime, "DD MMM YYYY").format('hh:mm A');
            const endTime = moment(action.payload.endTime, "DD MMM YYYY").format('hh:mm A');

            let updateArray = state.events.filter((element: any) => element.id == action.payload.id)
            updateArray.startTime = startTime
            updateArray.endTime = endTime
            updateArray.date = date
            updateArray.title = action.payload.title
            updateArray.id = action.payload.id

            state.events = state.events.filter((element: any) => element.id != updateArray.id)
            
            return { ...state, events: [...state.events, updateArray] }

        case "REMOVE":

            let newArray = state.events.filter((ele: any) => ele.id != parseInt(action.payload))

            return { ...state, events: newArray }

        default:
            return initialState;
    }
}

export default eventsReducer;