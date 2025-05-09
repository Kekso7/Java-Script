const apiURLBase = "https://dummyjson.com/recipes";

let params = new URLSearchParams(window.location.search);
let recipeId = params.get("id");

let recipeElement = document.getElementById("recipe");
let tagsHolder = document.getElementById('tagsHolder');


fetch(apiURLBase + "/" + recipeId)
    .then(response => response.json())
    .then(function(data) {
        let recipeName = document.createElement("h1");
        recipeName.innerText = data.name;
        recipeElement.append(recipeName);

});

fetch(apiURLBase + "/tags")
    .then(response => response.json())
    .then(function(data) {
        for (let tag of data) {
            let tagElement = document.createElement('option');
            tagElement.innerText = tag;
            tagElement.value = tag;
            tagsHolder.append(tagElement);
        }
    });

tagsHolder.addEventListener("change", function() {
    window.location.href = "index.html?category="+this.value;
});

















