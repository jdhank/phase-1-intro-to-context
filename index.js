// Your code here
const createEmployeeRecord = (recArray) => {
    return {
        firstName : recArray[0],
        familyName : recArray[1],
        title: recArray[2],
        payPerHour : recArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = (recordsArray) => {
    return recordsArray.map(rec => createEmployeeRecord(rec))
}
function createTimeInEvent(event){
    let [date,hour] = event.split(" ")
    let eventObj = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    }
    employee.timeInEvent.push(EventObj)
    
}