


// vraca array sa elementima
let elements = document.getElementsByClassName("description");
elements[0].style.color = "red";
elements[1].style.color = "green";


console.log(elements.length);

// vraca array sa elementima
let hTitle = document.getElementsByClassName("title");
hTitle[0].style.color = "red";


for(let paragraph in elements){
    elements[paragraph].innerText = paragraph;
}


