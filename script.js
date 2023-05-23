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
        genre: "Action / Sci-fi"
    },
    {
        name: "Pulp Fiction",
        director: "Quentin Tarantino",
        genre: "Drama and Realistic Fiction"
    }
];

var series = [
    {
        name: "Friends",
        director: "James Burrows",
        genre: "Sitcom, Humour"
    },
    {
        name: "Mob Psycho",
        director: "Kōichi Sakamoto",
        genre: "Anime, Action"
    },
    {
        name: "Rogue One",
        director: "George Lucas",
        genre: "Action / Sci-fi"
    }
];

var movieTable = document.getElementById("movie-table");
var seriesTable = document.getElementById("series-table");

for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    var movieRow = movieTable.insertRow();
    var movieNameCell = movieRow.insertCell();
    movieNameCell.innerHTML = movie.name;
    var movieDirectorCell = movieRow.insertCell();
    movieDirectorCell.innerHTML = movie.director;
    var movieGenreCell = movieRow.insertCell();
    movieGenreCell.innerHTML = movie.genre;
}




for (var j = 0; j < series.length; j++) {
    var seriesEntry = series[j];
    var seriesRow = seriesTable.insertRow();
    var seriesNameCell = seriesRow.insertCell();
    seriesNameCell.innerHTML = seriesEntry.name;
    var seriesDirectorCell = seriesRow.insertCell();
    seriesDirectorCell.innerHTML = seriesEntry.director;
    var seriesGenreCell = seriesRow.insertCell();
    seriesGenreCell.innerHTML = seriesEntry.genre;
}

