$(document).ready(function () {


    //code for current date variable
    var now = moment();
    var currentHour = parseInt(now.format("H"));


    //-----arrays for time(s)
    var plannedHours = [
        displayData = ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"],
        hourNumbers = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    ];

    var savedTextArray = ["", "", "", "", "", "", "","","","","","","","",""];

    //function needed to get value of div
    //need a class in the input tag to call out and push data to local storage
    //need a class/id for the hour that's pushed to local storage - when button is clicked, the info is pushed to local storage (function will be used)

    //------function 2
    //Start function that will update CSS/HTML by hour.  Will have a variable that holds the current hour (.hour method)
    //create variable for current time by using moment().get('hour');
    //create a control flow w/if/else statements to change colors
    //create var w/ times set in divs to compare w/current time
    //should be able to build local storage pull/push from this same function

});
