// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) { 

  let result = movies.map (movie => movie.director);
  //console.log("EXERCICE 1 ->", result);
  return result; 
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {

  let result = movies.filter (movie => movie.director == director);
  //console.log("EXERCICE 2 ->", result);
  return result; 
}

// Exercise 3: Calculate the average of the films of a given director.

function average(movies){
  let scores = movies.map(movie => movie.score);
  let averageScores = (scores.reduce((a, b) => a + b) / scores.length).toFixed(2);
  //console.log("EXERCICE 3 ->", averageScores);
  return parseFloat(averageScores);
}

function moviesAverageOfDirector(movies, director) {

  let moviesDirector = movies.filter(movie => movie.director == director);
  let result = average(moviesDirector);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {

  let allMovies = movies.map(movie => movie.title);
  let moviesSort = allMovies.sort().slice(0, 20);
  //console.log("EXERCICE 4 ->", moviesSort);
  return moviesSort;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {

  let moviesByYear =  [...movies].sort((a,b) => {
    if (a.year > b.year) {return 1;}
    if (a.year < b.year) {return -1;}
    if (a.title.toLowerCase() > b.title.toLowerCase()) {return 1;}
    if (a.title.toLowerCase() < b.title.toLowerCase()) {return -1;}
    return 0;
})
  //console.log("EXERCICE 5 ->", moviesByYear);
  return moviesByYear;
}

// Exercise 6: Calculate the average of the movies in a category

function moviesAverageByCategory(movies, genre) {

  let moviesGenre = movies.filter(movie => movie.genre == genre && movie.score !=="");
  let result = average(moviesGenre);
  return result;
  }

// Exercise 7: Modify the duration of movies to minutes

function hoursToMinutes(movies) {

  let movieDuration = movies.map((movie) => {
  let duration = movie.duration;
  let realMin;

  let hours = parseInt(duration.slice(0, 1) * 60);
  let minutes = parseInt(duration.slice(2, -3));
  minutes >= 0 ? (realMin = minutes) : (realMin = 0);
  
  let durationInMin = {
      duration: parseInt(hours + realMin)
    };
    return durationInMin;
  });
  console.log('EXERCICE 7 ->', movieDuration);
  return movieDuration;
}   


// Exercise 8: Get the best film of a year

function bestFilmOfYear(movies, year) {
  let filmByYears = movies.filter(movie => movie.year == year)
  filmByYears.sort((a,b) => {
    if (a.year > b.year) {return -1;}
    if (a.year < b.year) {return 1;}
    return 0;
  })
  let bestFilm = filmByYears.splice(0,1);
  //console.log("EXERCICE 8 ->", bestFilm);
  return bestFilm;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
