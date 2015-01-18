/**
 * 1 Jan 1900 was a Monday.
 * Thirty days has September,
 * April, June and November.
 * All the rest have thirty-one,
 * Saving February alone,
 * Which has twenty-eight, rain or shine.
 * And on leap years, twenty-nine.
 * A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400
 *
 * How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?.
**/

//Start Date : 1 Jan 1900
//End Date: 31 Dec 2000

var _ = require('lodash');

var startYear = 1900;
var endYear = 2000;
var currentYear = startYear;
var currentMonth = 1;

// 0 - MON; 1 - TUE; 2 - WED; 3 - THU; 4 - FRI; 5 - SAT; 6 - SUN
var WEEK = _.range(7);
var YEAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYear (year) {
    //A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
    if(year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
        return true;
    }
    return false;
}

function firstWeekDayNextMonth(month, startWeekDay) {
    var nDays = YEAR[month - 1];
    var result;

    result = startWeekDay + nDays;
    result = result - Math.floor(result / 7) * 7;

    return result;
}

var lastFirstWeekDay = 0;
var counter = 0;
while(currentYear <= endYear) {

    if(currentMonth === 13) {
        currentMonth = 1;
        currentYear++;

        if(isLeapYear(currentYear)) {
            YEAR[1] = 29;
        } else {
            YEAR[1] = 28;
        }
    }

    lastFirstWeekDay = firstWeekDayNextMonth(currentMonth, lastFirstWeekDay);

    if(currentYear > 1900 && lastFirstWeekDay === 6) {
        counter++;
    }

    currentMonth++;

}


console.log(counter);

