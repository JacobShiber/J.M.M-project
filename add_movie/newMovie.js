const api = "http://moviesmern.herokuapp.com/movies/saveMovie";


class Movie {
    movieName;
    image;
    linkToMovie;
    rating;
    synopsis;
    constructor(movieName, image, linkToMovie, rating, synopsis){
        this.movieName = movieName;
        this.image = image;
        this.linkToMovie = linkToMovie;
        this.rating = rating;
        this.synopsis = synopsis;
    }
}


async function postNewMovie (api, options){
    try {
        return await fetch (api, options)
    } catch (error) {
        return error;
    }
}





submitBtn.onclick = (e) => {
    e.preventDefault();
    let newMovie = new Movie(movieNameInput.value, imgUrlInput.value, movieLinkInput.value, ratingInput.value, synopsisInput.value);
    let options = {
        method : "POST",
        body : JSON.stringify(newMovie),
        headers : {
            'Content-Type': 'application/json'
        }
    }
    postNewMovie(api, options);
}