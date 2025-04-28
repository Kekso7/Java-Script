
const apiURLBase = "https://dummyjson.com/recipes";

let recipeHolder = document.getElementById('recipes');
let tagsHolder = document.getElementById('tagsHolder');

let params = new URLSearchParams(window.location.search);
let category = params.get("category");

if(category === null) {
    fetch(apiURLBase + "?limit=9&sortBy=name&order=asc")
        .then(response => response.json())
        .then(function(data) {

            for(let recipe of data.recipes) {
                appendCookingRecipe(recipe);
            }
        });
} else {
    let apiUrl = apiURLBase + "/tag/" + category;

    fetch(apiUrl)
        .then(response => response.json())
        .then(function(data) {
            recipeHolder.innerHTML = '';
            for(let recipe of data.recipes) {
                appendCookingRecipe(recipe);
            }
        })
}

fetch(apiURLBase + "/tags")
    .then(response => response.json())
    .then(function(data) {
        for (let tag of data) {
            let tagElement = document.createElement('option');
            tagElement.innerText = tag;
            tagElement.value = tag;
            tagsHolder.append(tagElement);
        }
    })

    tagsHolder.addEventListener('change', function() {
        let apiUrl = (apiURLBase + "/tag/" + this.value);
        fetch(apiUrl)
            .then(response => response.json())
            .then(function(data) {
                recipeHolder.innerHTML = '';
                for(let recipe of data.recipes) {
                    appendCookingRecipe(recipe);
                }
        });
    });

function appendCookingRecipe(recipe) {
    let cookingInstructions = buildInstructionsElements(recipe.instructions)
    let singleRecipe = document.createElement("div");
    let recipeTitle = document.createElement("H1");
    recipeTitle.innerText = recipe.name;
    let recipeCuisine = document.createElement("p");
    recipeCuisine.innerText = recipe.cuisine;

    let permalinkElement = document.createElement("a");
    permalinkElement.innerText = "Show recipe";
    permalinkElement.href = "permalink.html?id="+recipe.id;

    singleRecipe.append(recipeTitle, recipeCuisine, cookingInstructions, permalinkElement);
    recipeHolder.append(singleRecipe);
}

function buildInstructionsElements(instructions) {
    let recipeInstructions = document.createElement("ul");

    for(let instruction of instructions) {
        let instructionElement = document.createElement("li");
        instructionElement.innerText = instruction;
        recipeInstructions.append(instructionElement);
    }
    return recipeInstructions;
}












