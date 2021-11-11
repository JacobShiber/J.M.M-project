const api = "http://moviesmern.herokuapp.com";
const allMoviesEP = "/movies/all";
const getById = "/movies/movie/:id"
const searchByNameEP = "/movies/movie/searchByName/"


function showLoading() {
    moviesDisplay.innerHTML = `<img id="loadingGif" src="../media/loadingGif.gif">`
}

function hideLoading() {
    loadingGif.style.display = "none"
}


async function printDataFromApi(api, target) {
    try {
        showLoading()
        return await fetch(`${api}${target}`).then(res => res.json());
    }
    catch (err) {
        return err;
    }
}


function hidePage() {
    singleMovieDisplay.style.zIndex = -1000;
    singleMovieDisplay.innerHTML = ``;
    singleMovieDisplay.style.background = "white";
}


async function getMovieById(id) {
    try {
        return await fetch(`http://moviesmern.herokuapp.com/movies/movie/${id}`).then(res => res.json()).then((res) => {

            singleMovieDisplay.style.zIndex = 1000;
            singleMovieDisplay.style.background = "url(../media/offwhite_background.jfif)";
            singleMovieDisplay.innerHTML = `<img id = "infoPopImg"src = "${res.data.image}">
                <div>
                <h1>${res.data.movieName}</h1><br>
                <p>${res.data.synopsis}</p><br>
                <h3>${res.data.linkToMovie}</h3>
                <h2>${res.data.rating}</h2><br>
                <p>${res.data.date}</p><br>
                <p>${res.data._id}</p></div>
                <img id = "backBtn" onclick = "hidePage()" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-right-arrow-miscellaneous-kiranshastry-lineal-kiranshastry.png"/>
                `;


        })
    } catch (error) {
        return error;
    }
}


printDataFromApi(api, allMoviesEP)
    .then((res) => {
        console.log(res.data)

        if (res.data) {
            for (let movie of res.data) {
                let specificId = movie._id;
                moviesDisplay.innerHTML += `<div class = "movieData">
                <img src="${movie.image}" alt="moviePic"><br>
                <h3>${movie.movieName}</h3><br>
                <p>Rating ${movie.rating}/10</p><br>
                <div class = "btnContainer">
                <button id = "expendBtn"  onclick = getMovieById("${movie._id}")><a href="./movies.html#singleMovieDisplay">Expend</a></button> <button id = "deleteBtn" onclick = "deleteMovie('${specificId}')">Del</button>
                </div>
                </div>`
            }
        } else {
            moviesDisplay.innerHTML += `<img src = "../media/broken_camera.png">`
        }



        moviesSort.onchange = () => {
            switch (moviesSort.value) {
                case "a-z":
                    res.data.sort((a, b) => {
                        if (a.movieName.toLowerCase() < b.movieName.toLowerCase()) return -1;
                        if (a.movieName.toLowerCase() > b.movieName.toLowerCase()) return 1;
                        return 0;
                    })
                    moviesDisplay.innerHTML = ``;
                    for (let movie of res.data) {
                        moviesDisplay.innerHTML += `<div class = "movieData">
                        <img src="${movie.image}" alt="moviePic"><br>
                        <h3>${movie.movieName}</h3><br>
                        <p>Rating ${movie.rating}/10</p><br>
                        <button id = "expendBtn"  onclick = getMovieById("${movie._id}")><a href="./movies.html#singleMovieDisplay">Expend</a></button>
                        </div>`
                    }
                    break;

                case "rating":
                    res.data.sort((a, b) => {
                        if (a.rating < b.rating) return 1;
                        if (a.rating > b.rating) return -1;
                        return 0;
                    })
                    moviesDisplay.innerHTML = ``;
                    for (let movie of res.data) {
                        moviesDisplay.innerHTML += `<div class = "movieData">
                    <img src="${movie.image}" alt="moviePic"><br>
                    <h3>${movie.movieName}</h3><br>
                    <p>Rating ${movie.rating}/10</p><br>
                    <button id = "expendBtn"  onclick = getMovieById("${movie._id}")><a href="./movies.html#singleMovieDisplay">Expend</a></button>
                    </div>`
                    }
                    break;

                case "date":
                    res.data.sort((a, b) => {
                        if (a.date < b.date) return -1;
                        if (a.date > b.date) return 1;
                        return 0;
                    })
                    moviesDisplay.innerHTML = ``;
                    for (let movie of res.data) {
                        moviesDisplay.innerHTML += `<div class = "movieData">
                <img src="${movie.image}" alt="moviePic"><br>
                <h3>${movie.movieName}</h3><br>
                <p>Rating ${movie.rating}/10</p><br>
                <button id = "expendBtn"  onclick = getMovieById("${movie._id}")><a href="./movies.html#singleMovieDisplay">Expend</a></button>
                </div>`
                    }
                    break;


            }
        }
    })
    .finally(() => hideLoading())




async function searchByName(api, endpoint, name) {
    try {
        return await fetch(`${api}${endpoint}${name}`).then(res => res.json());
    } catch (error) {
        return error;
    }
}

searchBar.oninput = () => {
    searchByName(api, searchByNameEP, searchBar.value).then((res) => {
        moviesDisplay.innerHTML = ``;
        if (res.data) {
            for (let movie of res.data) {
                moviesDisplay.innerHTML += `<div class = "movieData">
                    <img src="${movie.image}" alt="moviePic"><br>
                    <h3>${movie.movieName}</h3><br>
                    <p>Rating ${movie.rating}/10</p><br>
                    <button id = "expendBtn"  onclick = getMovieById("${movie._id}")><a href="./movies.html#singleMovieDisplay">Expend</a></button>
                    </div>`
            }
        } else {
            moviesDisplay.innerHTML += `<img src = "../media/broken_camera.png">`
        }
    })
}


function deleteMovie(id) {
    let confirmCheck = confirm('Are you sure you want to delete this movie?');
    if (confirmCheck == true) {
        options = {
            method: 'DELETE'
        }
        asyncDelete = async () => {
            try {
                return await fetch(`http://moviesmern.herokuapp.com/movies/movie/${id}`, options)
            } catch (error) {
                return error;
            };
        }
    }

    asyncDelete()
    .then(res => console.log(res))

}


