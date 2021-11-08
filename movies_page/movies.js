const api = "http://moviesmern.herokuapp.com";
const allMoviesEP = "/movies/all";
const getById = "/movies/movie/:id"


function showLoading(){
    moviesDisplay.innerHTML = `<img id="loadingGif" src="../media/loadingGif.gif">`
}

function hideLoading (){
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


async function getMovieById(id) {
    try {
        return await fetch(`http://moviesmern.herokuapp.com/movies/movie/${id}`).then(res => res.json()).then(res => console.log(res));
    } catch (error) {
        return error;
    }
}




printDataFromApi(api, allMoviesEP)
    .then((res) => {
        console.log(res.data)

        if (res.data) {
            for (let movie of res.data) {
                moviesDisplay.innerHTML += `<div class = "movieData">
                <img src="${movie.image}" alt="moviePic"><br>
                <h3>${movie.movieName}</h3><br>
                <p>Rating ${movie.rating}/10</p><br>
                <button id = "expendBtn" onclick = "getMovieById(${movie._id})">Expend</button>
                </div>`
            }
        } else {
            moviesDisplay.innerHTML += `<img src = "../media/broken_camera.png">`
        }



        moviesSort.onchange = () => {
            switch (moviesSort.value) {
                case "a-z":
                    res.data.sort


            }
        }
    })
    .finally(() => hideLoading())


{/* <a href="./display_movies.html"></a> */ }