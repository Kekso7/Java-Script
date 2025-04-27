

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


const apiUrl = "http://www.omdbapi.com/?apiKey=6761a199&i="+id;

const response = await fetch(apiUrl);
const data = await response.json();

console.log(data);

const movieHolder = document.getElementById('movieHolder');

const title = document.createElement('h1');
title.innerText = data.Title;

movieHolder.append(title);

const trailerApiUrl = "https://imdb.iamidiotareyoutoo.com/media/"+id;
document.getElementById('trailer').setAttribute("src", trailerApiUrl);















