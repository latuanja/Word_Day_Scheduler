$(document).ready(function () {


    //code for current date variable
    var now = moment();
    var currentHour = parseInt(now.format("H"));
     //create variable for current time by using moment().get('day month hour');
    $("#currentDay").text(moment(now).format("dddd MMMM Do YYYY"));

    //-----call variables and assign arrays for time(s)
    var plannedHours = [
        displayData = ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"],
        hourData = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
       
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
            var textareaDisplay = $("<td class='description' >");

            textareaDisplay.append(textarea);

            var saveBtnDisplay = $("<td class='saveBtn btn' data-type=" + i + ">");
            saveBtnDisplay.append($("<i class='fa fa-floppy-o fa-3x'>"));

            //create rows
            newRow.append(timeDisplay, textareaDisplay, saveBtnDisplay);
            mainDisplay.append(newRow);

            checkTime(timeData, textarea);
            displayStoredText (textarea);
        }
        console.log(savedTextArray);

    }

    function saveTextAreaOnClick() {
        $(".saveBtn").on("click", function () {
              //create var w/ times set in divs to compare w/current time
            var currentTimeData = $(this).parent().attr("data-type");
            var clickedTextarea = $(".textarea" + currentTimeData);
            var rowToArrayCorrelation = $(this).attr("data-type");

            savedTextArray[rowToArrayCorrelation] = clickedTextarea.val();
            storeTextInput();

        });

    }

    function clearAllOnClick () {
        $("#clear-btn").on("click", function() {
            localStorage.clear();
            location.reload();

        })

    }
        //need a class/id for the hour that's pushed to local storage - when button is clicked, the info is pushed to local storage (function will be used)
       

    function displayStoredText(textarea) {
        var storedTextInput = JSON.parse(localStorage.getItem("savedtext"));

        if (storedTextInput != null) {
            savedTextArray = storedTextInput;
            textarea.val(savedTextArray[i]);
        };

    };
    
    //create a control flow w/if/else statements to change colors

    function checkTime(timeData, textarea) {

        if (timeData === currentHour) {
            textarea.addClass("present");

        } 
        else if (timeData < currentHour) {
            textarea.addClass("past");
        } 
        else {
            textarea.addClass("future");

        };
    }
    //need a class in the input tag to call out and push data to local storage 
    //should be able to build local storage pull/push from this same function
    function storeTextInput() {
        localStorage.setItem("savedtext", JSON.stringify(savedTextArray));
    };
   

    //------function 2
    //Start function that will update CSS/HTML by hour.  Will have a variable that holds the current hour (.hour method)
   displayTimeblocks(plannedHours[0], plannedHours[1]);
   saveTextAreaOnClick();
   clearAllOnClick ();
    
  
   

});
