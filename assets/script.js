$(document).ready(function () {


    //code for current date variable
    var now = moment();
    var currentHour = parseInt(now.format("H"));
     //create variable for current time by using moment().get('day month hour');
    $("#currentDay").text(moment(now).format("dddd MMMM Do YYYY"));

    //-----call variables and assign arrays for time(s)
    var plannedHours = [
        displayData = ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"],
        hourNumbers = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
        //need a class/id for the hour that's pushed to local storage - when button is clicked, the info is pushed to local storage (function will be used)
    ];
    // how do i do text values???
    var savedTextArray = ["", "", "", "", "", "", "","","","","","","","","", ""];

    //function needed to get value of divs
    function displayTimeblocks(text, data) {

        var mainDisplay = $("tbody");
        //loops
        for (i = 0; i < text.length; i++) {
            var newRow = $("<tr class='time-block'>");
            newRow.attr("data-type", data[i]);

            var timeData = parseInt(newRow.attr("data-type"));

            var timeDisplay = $("<td class='hour'>");

            timeDisplay.text(text[i]);

            //text areas variables. Create table data push to HTML
            var textarea = $("<textarea class='textarea" + data[i] + "' rows='3' cols='60'>");

            textareaDisplay.append(textarea);

            var saveBtnDisplay = $("<td class='saveBtn btn data-type=" + i + ">");
            saveBtnDisplay.append($("i class='fa fa-floppy-o fa-3x'>"));

            //create rows
            newRow.append(timeDisplay, textareaDisplay, saveBtnDisplay);
            mainDisplay.append(newRow);

            checkTime(timeData, textarea);
            displayStoredText (textarea);
        }
             console.log(savedTextArray)

    }

    function saveTextAreaOnClick() {
        $(".saveBtn").on("click", function () {
            
            var currentTimeData = $(this).parent().attr("data-type");

            var clickedTextarea = $(".textarea" + currentTimeData);

            var rowToArrayCorreclation = $(this).atttr("data-type");

            storeTextInput();
        });

        
    }


    //need a class in the input tag to call out and push data to local storage

   

    //------function 2
    //Start function that will update CSS/HTML by hour.  Will have a variable that holds the current hour (.hour method)
   
    //create a control flow w/if/else statements to change colors
    //create var w/ times set in divs to compare w/current time
    //should be able to build local storage pull/push from this same function

});
