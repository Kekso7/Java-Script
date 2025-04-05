
// varijabla
let nameElement = document.getElementById("name");

document.getElementById("name").style.color = "red";
document.getElementById("name").style.backgroundColor = "black";

nameElement.style.padding = "10px";
nameElement.textContent = "Marko";

let newName = prompt("Upisite svoje ime:");
let textColor = prompt("Koju boju textra zelite?");
let backgroundColor = prompt("Koju boju pozadine zelite?");

nameElement.textContent = newName;
nameElement.style.color = textColor;
nameElement.style.backgroundColor = backgroundColor;