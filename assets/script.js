// set date 
var dateEl = document.getElementById('datetime');

var updateDate = function() {
    var currentDate = moment();
    var displayDate = currentDate.format("MM/DD/YYYY, hh:mm");

    dateEl.textContent = displayDate;
}

setInterval(() => {
    updateDate()
});


var tasks = document.getElementById("#tasks")

var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));
}

//add click method to add tasks
$(".list-group").on("click", "p", function() {
    var text = $(this)
    .text()
    .trim();

    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);

    $(this).replaceWith(textInput);

    textInput.trigger("focus");
});

$("list-group").on("blur", "textarea", function() {
    var text = 4(this)
    .val()
    .trim()

    var taskP = $("<p>")
    
    .text(text);

    $(this).replaceWith(taskP)

    saveTasks()
})
// save tasks
var saveTasks = function () {
    localStorage.setItem("tasks", tasks)
    console.log(localStorage)
  };

document.getElementById("btn").addEventListener("click", function() {
    saveTasks()
    
});

// load tasks






