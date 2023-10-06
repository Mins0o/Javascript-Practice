var gUpdateHandle = setInterval(updateTimer, 1000);
var gTargetDate;

function initializePage(){
    let date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    $("#targetDate")[0].value = dateToInputFormat(date);
    $("#targetTime")[0].value = timeToInputFormat(date);
    gTargetDate = date;
    updateTimer()
}

document.addEventListener('DOMContentLoaded', initializePage(), false);

function zeropad(input, length){
    return("0".repeat(length) + input).slice(-length);
}

function dateToInputFormat(inputDate){
    let year = inputDate.getFullYear();
    let month = zeropad(inputDate.getMonth()+1,2); // month is 0 indexed
    let day = zeropad(inputDate.getDate(),2);
    return year + "-" + month + "-" + day;
}

function timeToInputFormat(inputDate){
    let hour = zeropad(inputDate.getHours(),2);
    let minute = zeropad(inputDate.getMinutes(),2);
    let seconds = zeropad(inputDate.getSeconds(),2);
    return hour+":"+minute+":"+seconds
}
 
function fetchTime(){
    let dateString = $("#targetDate")[0].value;
    let timeString = $("#targetTime")[0].value;
    return new Date(dateString + " " + timeString);
}

function updateTimer(){
    gTargetDate = fetchTime();
    let date = new Date();
    let dateDiff = gTargetDate - date;
    const DATE_CONSTANT = 1000*3600*24;
    const HOUR_CONSTANT = 1000*3600;
    let diffDay = Math.floor(dateDiff/DATE_CONSTANT);
    let diffHour = Math.floor((dateDiff % DATE_CONSTANT)/HOUR_CONSTANT);
    let diffMinute = Math.floor(((dateDiff%DATE_CONSTANT)%HOUR_CONSTANT)/60000);
    let diffSeconds = Math.floor((dateDiff%60000)/1000);
    $("#timerClock")[0].innerHTML = diffDay + " days " + 
                                    diffHour + ":" + 
                                    diffMinute + ":" + 
                                    diffSeconds + " Left";
}