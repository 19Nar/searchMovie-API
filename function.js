const form = document.querySelector("form");
const myInput = document.querySelector("#movieSearch");
const searchResults = document.querySelector("#results");

const API_URL = "https://omdb-api.now.sh/?type=movie&s="

form.addEventListener("submit", formDone);

function formDone(e){
    e.preventDefault();
    movieInputValue = myInput.value;
    getResults(movieInputValue);
};

// https://omdb-api.now.sh/?type=movie&s=

const getResults = (movieInputValue) => {
    const url = `${API_URL}${movieInputValue}`
    //console.log(url);

    fetch(url)
    .then(response => response.json())
    .then(data => showMovieResults(data.Search));
};

const showMovieResults = (allResults) => {

    searchResults.innerHTML = "";
    let html = "";
    allResults.forEach(movie => {
        console.log(movie)
       html += `
       <br>
       <div class = "card col-3">
       <img class = "card-img-top" src = "${movie.Poster}" 
       alt = "${movie.Title}">
       <div class = "card-body">
       <h6 class = "card-title">${movie.Title}</h6>
      <p class = "card-text">${movie.Year}</p>
      </div>
      </div>
       `;
    })
    searchResults.innerHTML = html;
};



/*
Taken from Bootsrapt page 

<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/