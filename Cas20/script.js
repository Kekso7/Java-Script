

const mealDbAPI = "https://www.themealdb.com/api/json/v1/1/";

const data = await getMealDBData("categories.php");

const categorySelect = document.getElementById("foodCategories");

for(let category of data.categories) {
    appendCategory(category);
}

const mealHolder = document.getElementById("mealsHolder");

categorySelect.addEventListener("change", async () => {

    mealHolder.innerHTML = "";

    const mealsJson = await getMealDBData("filter.php?c="+categorySelect.value);

    for(let meal of mealsJson.meals) {

       let mealDiv = showMeal(meal);

        mealDiv.addEventListener("click",  async () => {

            let recipe = await getMealDBData("lookup.php?i="+meal.idMeal);

            let coctail = await getRandomCoctail();

            document.getElementById("recipeText").innerText = recipe.meals[0].strInstructions;
            document.getElementById("coctail").innerText = coctail.drinks[0].strDrink+": "+coctail.drinks[0].strInstructions;

            document.getElementById("popup").style.display = "flex";

        });
    }

});

document.getElementById("closePopup").addEventListener("click",  () => {
    document.getElementById("popup").style.display = "none";
});
    function showMeal(meal) {
        let mealDiv = document.createElement("div");
        mealDiv.classList = "singleMeal";

        let mealImage = document.createElement("img");
        mealImage.setAttribute("src", meal.strMealThumb);
        mealImage.classList.add("mealImage");

        let mealName = document.createElement("h5");
        mealName.innerText = meal.strMeal;

        mealDiv.append(mealImage, mealName);
        mealHolder.append(mealDiv);

        return mealDiv;
    }

    async function getRandomCoctail() {
        let response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        return await response.json();
    }

    function appendCategory(category) {
        let categoryElement = document.createElement("option");
        categoryElement.value = category.strCategory;
        categoryElement.innerText = category.strCategory;
        categorySelect.append(categoryElement);
    }

    async function getMealDBData(endpoint) {
    let response = await fetch(mealDbAPI+endpoint);
    return await response.json();
}













