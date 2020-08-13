function newListItem() {
  var div = document.createElement("div");
  var taskValue = document.getElementById("task").value;
  var assigneeValue = document.getElementById("assignee").value;
  var trash = '<i class="fa fa-trash" aria-hidden="true"></i>';
  var done = '<i class="fa fa-check-circle" aria-hidden="true"></i>';

  div.innerHTML =
    '<p class="taskValue">' +
    taskValue +
    "</p>" +
    '<p class="assigneeValue">' +
    assigneeValue +
    "</p>" +
    '<i class="fa fa-trash" onclick="Remove()" aria-hidden="true"></i>' +
    '<i class="fa fa-check-circle" onclick="Done()" aria-hidden="true"></i>';

  if (taskValue === "" || assigneeValue === "") {
    alert("You must full both inputs");
  } else {
    document.getElementById("toDoList").appendChild(div);
  }
  document.getElementById("task").value = "";
  document.getElementById("assignee").value = "";
}

function Remove() {
  var r = confirm("Are you sure delete this task?");
  if (r == true) {
    var parent = event.target.parentNode;
    parent.remove();
  }
}

function Done() {
  var parent = event.target.parentNode;
  if (parent.style.backgroundColor === "green") {
    parent.style.backgroundColor = "white";
  } else parent.style.backgroundColor = "green";
}
/* var close = document.getElementsByClassName("fa-trash");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
} */

setInterval(function () {
  var toDo;
  var count = document.getElementById("toDoList").childElementCount;
  toDo = count;
  var c = document.getElementById("toDoList").children;

  for (var i = 0; i < c.length; i++) {
    if (c[i].style.backgroundColor === "green") {
      toDo--;
    }
  }
  document.getElementById("span3").innerHTML = toDo;
  document.getElementById("span4").innerHTML = count - toDo;
}, 10);

function search() {
  var input = document.getElementById("tsearch");
  var filter = input.value.toLowerCase();
  var nodes = document.getElementById("toDoList").children;

  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].innerText.toLowerCase().includes(filter)) {
      nodes[i].style.display = "block";
    } else {
      nodes[i].style.display = "none";
    }
  }
}
setInterval(function () {
  var nodes = document.getElementById("toDoList").children;
  var input = document.getElementById("tsearch");
  if (input.value == "") {
    for (i = 0; i < nodes.length; i++) {
      nodes[i].style.display = "block";
    }
  }
}, 10);
