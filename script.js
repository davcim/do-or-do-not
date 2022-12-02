var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var elements = document.querySelectorAll("li");


function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var button = document.createElement("button");
	div.classList.add("task-wrapper");
	ul.appendChild(div);
	div.append(li, button);
	li.classList.add("task");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	button.classList.add("remove-task");
	button.innerHTML="-";
}

function inputLength() {
	return input.value.length;
}	

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
} 

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
} 

function doneTask(task) {
	if (task.target.tagName === "LI"){
			task.target.classList.toggle("done");
	}
}

function deleteListElement(element) {
	if (element.target.className === "remove-task"){
		element.target.parentElement.remove();
	}
}

function handleUlClick (element) {
	doneTask(element);
	deleteListElement(element);
}

ul.addEventListener("click", handleUlClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);



