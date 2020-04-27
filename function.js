search.onclick = () => {
    let movieSearch = document.getElementById("movieSearch").value;
    const xmlhttp = new XMLHttpRequest();
    url = "https://api.themoviedb.org/3/search/movie?api_key=8220540bd48a4deadf3212129d4431c1&query=title" ;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    movieSearch;

    xmlhttp.onload = () => {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {  
            let res = JSON.parse(xmlhttp.responseText);
            console.log(res);
            console.log(res.homepage);
        }
    };

};
