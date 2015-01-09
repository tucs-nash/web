function TCDate(datetime) {
    var year = 0, month = 0, day = 0, hour = 0, minute = 0, second = 0, milliseconds = 0;

    //if the date contains a 'T' it's likely an ISO8601 date which is handled natively
    if(-1 != datetime.indexOf('T')) {
        return new Date(datetime);
    }

    var array = datetime.split(' ');
    if (array[0]) {
        var dateArray = array[0].split('-');

        year = dateArray[0];
        month = parseInt(dateArray[1], 10) - 1;
        day = dateArray[2];
    }

    if (array[1]) {
        var timeArray = array[1].split(':');

        hour = timeArray[0];
        minute = timeArray[1];
        second = timeArray[2];
        if (isNaN(second)) {
            second = 0;
        }
    }

    return new Date(year, month, day, hour, minute, second, milliseconds);
}

Date.prototype.getDateString = function() {
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
    var dd  = this.getDate().toString();
    return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]); // padding
};

Date.prototype.getDateTimeString = function() {
    var dateString = this.getDateString();
    var hrs = this.getHours()+"";
    var mins = this.getMinutes()+"";
    var secs = this.getSeconds()+"";

    return dateString + ' ' + (hrs[1]?hrs:"0"+hrs) + ":" + (mins[1]?mins:"0"+mins) + ":" + (secs[1]?secs:"0"+secs);
};

Date.prototype.getIsoDay = function() {
    //we use 1-7 for Mon-Sun, JS uses 0-6 Sun-Sat so do some hocus pocus
    var result = this.getDay();
    if(0 === result) {
        result = 7;
    }

    return result;
}