var todolist = document.getElementById("todolist");

var items = todolist.querySelectorAll("li");
var inputs = todolist.querySelectorAll("input");


for (var i=0; i<items.length; i++) {
  items[i].addEventListener("click", editItem);
   inputs[i].addEventListener("blur", updateItem);
   inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem() {
  console.log(this);
  this.className = "edit";
  var input = this.querySelector("input");
  input.focus();
  console.log("my current value is", input.value.length);
  input.setSelectionRange(0, input.value.length);
} 

function updateItem() {
  console.log("we blurred!", this.value);
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}


function itemKeypress (event) { 
  console.log(event);
  if (event.which === 13) {
    updateItem.call(this);
  }
  
}

   inputs[i].addEventListener("keypress", itemKeypress);
itemKeypress(event).call(inputs[0]);