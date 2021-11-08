// const api = "http://moviesmern.herokuapp.com";
// const allMoviesEP = "/movies/all";



async function printDataFromApi(api, target) {
    try {
        // showLoading()
        return await fetch(`${api}${target}`).then(res => res.json());
    }
    catch (err) {
        return err;
    }
}



printDataFromApi(api, allMoviesEP)
    .then((res) => {
        console.log(res);

        for (let movie of res.data) {
            let infoRow = document.createElement("tr")
                moviesDetails.appendChild(infoRow)
                
                infoRow.innerHTML += `<td class = "infoDetails">${movie._id}</td>
                <td class = "infoDetails">${movie.movieName}</td>
                <td class = "infoDetails">${movie.image}</td>
                <td class = "infoDetails" >${movie.linkToMovie}</td>
                <td class = "infoDetails">${movie.rating}</td>`;
            
        }
    })