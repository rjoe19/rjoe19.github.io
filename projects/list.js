var todolist = document.getElementById("todolist");

var items = todolist.querySelectorAll("li");
var inputs = todolist.querySelectorAll("input");


for (var i=0; i<items.length; i++) {
  items[i].addEventListener("click", editItem);
   inputs[i].addEventListener("blur", updateItem);
}

function editItem() {
  this.className = "edit";
  var input = this.querySelector("input");
  input.focus();
  console.log("my current value is", input.value.length);
  input.setSelectionRange(0, input.value.length); 
} 

function updateItem() {
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}

//* figure out what this means
function itemKeypress (event) { 
  if (event.which === 13) {
    updateItem.call(this);
  }
  *//
}