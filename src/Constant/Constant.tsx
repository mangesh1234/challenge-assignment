export  const adjustDatepickerTime = (date : any) => {
    let myDate = new Date(date);
    let month = (myDate.getMonth() + 1) < 10 ? `0${myDate.getMonth() + 1}` : `${myDate.getMonth() + 1}`
    let hours = (myDate.getHours()) < 10 ? `0${myDate.getHours()}` : `${myDate.getHours()}`
    let minuts = (myDate.getMinutes()) < 10 ? `0${myDate.getMinutes()}` : `${myDate.getMinutes()}`
    let seconds = (myDate.getSeconds()) < 10 ? `0${myDate.getSeconds()}` : `${myDate.getSeconds()}`
    return `${myDate.getFullYear()}-${month}-${myDate.getDate()}T${hours}:${minuts}:${seconds}.${myDate.getMilliseconds()}`
}