'use strict';

const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Name one of the last movies, you have watched?', ''),
      b = prompt('How much do rate it?', ''),
      c = prompt('Name one of the last movies, you have watched?', ''),
      d = prompt('How much do rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);