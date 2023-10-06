var gUpdateHandle = setInterval(updateTimer, 1000);

function initialize(){
    let date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    $("#targetDate")[0].value = dateToInputFormat(date);
}

function dateToInputFormat(inputDate){
    let year = inputDate.getFullYear();
    let month = ("0" + inputDate.getMonth()).slice(-2);
    let day = ("0" + inputDate.getDate()).slice(-2);
    return year + "-" + month + "-" + day
}


function updateTimer(){
}