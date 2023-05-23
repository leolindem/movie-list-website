var movies = [
    {
        name: "Star Wars IV: A New Hope",
        director: "George Lucas",
        genre: "Sci-fi, Action"
    }, 
    {
        name: "Good Will Hunting",
        director: "Gus Van Sant",
        genre: "Realistic Fiction"
    }, 
    {
        name: "Rogue One",
        director: "George Lucas",
        genre: "Action / Sci - fi"
    },
    {
        name: "Pulp Fiction",
        director: "Quentin Tarantino",
        genre: "Drama and Realisitic Ficiton"
    }
]

var table = document.getElementById("movie-table");
var row = table.insertRow()
var titleCell = row.insertCell()
titleCell.innerHTML = "Movie Name"

var DirectorCell = row.insertCell()
DirectorCell.innerHTML = "Movie Name"

var genreCell = row.insertCell()
genreCell.innerHTML = "Movie Name"


for (var i = 0; i < movies.length; i++){
    var movie = movies[i];
    var row = table.insertRow();

    var nameCell = row.insertCell();
    nameCell.innerHTML = movie.name;

    var directorCell = row.insertCell();
    directorCell.innerHTML = movie.director;

    var genreCell = row.insertCell();
    genreCell.innerHTML = movie.genre;
}
