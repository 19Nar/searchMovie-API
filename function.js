const searchMovie = (e) => {

const movieSearch = movieSearch.value.addEventListener("click", searchMovie);
const movies = movieDetails.value 

    const xmlhttp = new XMLHttpRequest();
    url = "http://www.omdbapi.com/?i=tt3896198&apikey=a70bfdd0&query=<title>"
    xmlhttp.open("GET", url, true);
    xmlhttp.onload = () => {
        if (this.status === 200) {
            const movieDetails = movieDetails.value;
            let res = JSON.parse(this.responseText);
            movies.innerHTML = '';
            res.results.map = (movie) => {
                movies.innerHTML += `
                      <div class="col-md-3">
                          <div class="card bg-dark">
                              <div class="card-block">
                                  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="img-fluid">
                                  <h4>${movie.title}</h4>
                                  <a href="#" class="btn btn-primary">Movie Details</a>
                              </div>
                          </div>
                      </div>
                  `;
            };
        } else {
            console.log("Movie is not found");
        }
    }
    xmlhttp.send();
    e.preventDefault();
}


