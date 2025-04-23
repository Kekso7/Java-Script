
const apiUrl = "http://www.omdbapi.com/";
let apiKey = "6761a199";

document.getElementById("searchMovie").addEventListener("click", async () => {

    let movieName = document.getElementById("movieTitle").value.trim();
    let searchError = document.getElementById("searchError");
    searchError.innerText = "";

    if (movieName === '') return alert("Morate uneti ime filma");

    let response = await callOMDbApi("s=" + movieName);

    if (response.Response === "False") {
        searchError.innerText = response.Error;
    } else {
        const movieList = document.getElementById("movieList");

        for (let movie of response['Search']) {
            let movieHolder = document.createElement("div");
            movieHolder.classList.add("movieHolder");

            let movieTitle = document.createElement("H3");
            movieTitle.innerText = movie.Title;
            movieTitle.classList.add("titleStyle");

            let moviePoster = document.createElement("img");
            moviePoster.setAttribute('src', movie.Poster);

            let movieType = document.createElement("p");
            movieType.innerText = movie.Type;

            let movieYear = document.createElement("p");
            movieYear.innerText = movie.Year;

            movieHolder.append(movieTitle, moviePoster, movieType, movieYear);

            movieList.append(movieHolder);






        }
    }
});

let RealSteelResponse = await callOMDbApi("t=Real Steel")
console.log(RealSteelResponse)

let homeAloneSearch = await callOMDbApi("s=Home Alone&y=1990");
console.log(homeAloneSearch);

async function callOMDbApi(params) {
    const url = apiUrl+"?apiKey="+apiKey+"&"+params;

    const response = await fetch(url);

    return await response.json();

}






























