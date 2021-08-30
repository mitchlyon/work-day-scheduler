// set date 
var dateEl = document.getElementById('datetime');

var updateDate = function () {
    var currentDate = moment();
    var displayDate = currentDate.format("MMM/DD/YYYY, hh:mm");

    dateEl.textContent = displayDate;
}

setInterval(() => {
    updateDate()
});


// save tasks
$(document).ready(function () {
   
    $(".saveBtn").on("click", function () {
       
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    });
    
    function timeTracker() {
        
        var timeNow = moment().hour();
        console.log(timeNow)
        
        $(".time").each(function () {
            var time = parseInt($(this).attr("id").split("hour")[1]);

            
            if (time < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (time === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
    
    //load task
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13.description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15.description").val(localStorage.getItem("hour15"));
    $("#hour16.description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
});
