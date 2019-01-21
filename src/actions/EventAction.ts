
export const getTimezoneDifference = (time: any) => {
    return time + new Date().getTimezoneOffset() * 60 * 1000
}
export const nextDay = (eventData: any) => {
    console.log("eventData==", new Date(eventData.target.attributes[0].value))
    return {
        type: "NEXT_DAY",
        payload: {
            event: new Date(eventData.target.attributes[0].value)
        }
    }
}

export const previousDay = (eventData: any) => {
    // console.log("eventData=="+JSON.stringify(eventData))
    return {
        type: "PRIVIOUS_DAY",
        payload: {
            event: new Date(eventData.target.attributes[0].value)
        }
    }
}
export const today = (eventData: any) => {
    // console.log("eventData=="+JSON.stringify(eventData))
    return {
        type: "TODAY",
        payload: {
            event: new Date(eventData.target.attributes[0].value)
        }
    }
}

export const add = (eventData: any) => {

    let addEventObject = {
        startDate: new Date(getTimezoneDifference(eventData.target["0"].valueAsNumber)) || "",
        endDate: new Date(getTimezoneDifference(eventData.target["1"].valueAsNumber)) || "",
        agenda: eventData.target["2"].value || ""
    }
    return {
        type: "ADD",
        payload: addEventObject
    }
}
export const edit = (eventData: any) => {
    // console.log("eventData=="+JSON.stringify(eventData))
    return {
        type: "EDIT",
        payload: {
            event: new Date(eventData.target.attributes[0].value)
        }
    }
}
export const remove = (eventData: any) => {
    // console.log("eventData=="+JSON.stringify(eventData))
    return {
        type: "REMOVE",
        payload: {
            event: new Date(eventData.target.attributes[0].value)
        }
    }
}