function cleanTime(time1){
    if (time1 < 10){
        return ("0" + time1);
    } else {
        return ('' + time1);
    }
}

/*
function formatTime(h, m, s, format){
        let resultstr = ''
        if (format == '24'){
            resultstr = cleanTime(h) + ':' + cleanTime(m) + ":" + cleanTime(s);
        } else {
            if(h == 0){
                resultstr = cleanTime(12) + ':' + cleanTime(m) + ":" + cleanTime(s) + 'AM';
            } else if(h < 12){
                resultstr = cleanTime(h) + ':' + cleanTime(m) + ":" + cleanTime(s) + 'AM';
            } else if(h==12){
                resultstr = cleanTime(h) + ':' + cleanTime(m) + ":" + cleanTime(s) + 'PM';
            } else {
                resultstr = cleanTime(h - 12) + ':' + cleanTime(m) + ":" + cleanTime(s) + 'PM';
            }
        }
        return (resultstr)
}
*/

setInterval(() => {
    var dtObj = new Date(); // Create a new JS object of type Date
    var curHour = dtObj.getHours();
    var curMinute, curSecond;
    curMinute = dtObj.getMinutes();
    curSecond = dtObj.getSeconds();

        var curTimeStr =
        cleanTime(curHour) +
        ":" + 
        cleanTime(curMinute) + 
        ":" +
        cleanTime(curSecond);

 //   document.getElementById("demo").innerHTML = curTimeStr;
}, 40);