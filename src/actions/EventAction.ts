
import * as moment from 'moment';

export const getTimezoneDifference = (time: any) => {
    return time + new Date().getTimezoneOffset() * 60 * 1000
}

export const nextDay = (eventData: any) => {
    return {
        type: "NEXT_DAY",
        payload: {
            event: new Date(eventData.target.attributes[0].value)
        }
    }
}

export const previousDay = (eventData: any) => {
    return {
        type: "PRIVIOUS_DAY",
        payload: {
            event: new Date(eventData.target.attributes[0].value)
        }
    }
}
export const today = (eventData: any) => {
    return {
        type: "TODAY",
        payload: {
            event: new Date(eventData.target.attributes[0].value)
        }
    }
}

export const add = (eventData: any) => {

    let addEventObject = {
        title: eventData.target["0"].value || "",
        startTime: new Date(getTimezoneDifference(eventData.target["1"].valueAsNumber)) || "",
        endTime: new Date(getTimezoneDifference(eventData.target["2"].valueAsNumber)) || ""
    }

    const date = moment(addEventObject.startTime).format("DD MMM YYYY");
    const startTime = moment(addEventObject.startTime, "DD MMM YYYY").format('hh:mm A');
    const endTime = moment(addEventObject.endTime, "DD MMM YYYY").format('hh:mm A');
    
    let newEventObject = {
        date: date,
        title: addEventObject.title,
        startTime: startTime,
        endTime: endTime

    }
    return {
        type: "ADD",
        payload: newEventObject
    }
}
export const edit = (eventData: any, updateID: any) => {

    let addEventObject = {
        title: eventData.target["0"].value || "",
        startTime: new Date(getTimezoneDifference(eventData.target["1"].valueAsNumber)) || "",
        endTime: new Date(getTimezoneDifference(eventData.target["2"].valueAsNumber)) || "",
        id: updateID
    }
    return {
        type: "EDIT",
        payload: addEventObject
    }
}

export const remove = (eventData: any) => {
    const id = eventData.target.dataset.val;
    return {
        type: "REMOVE",
        payload: id
    }
}