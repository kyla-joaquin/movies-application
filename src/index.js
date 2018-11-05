"use strict";
/**
 * es6 modules and imports
 */
import $ from "jquery";
import { getMovies } from './api.js';
import { buildHTML } from './build-html';
import { addMovie } from "./add";
import { getRating } from "./add";
import { deleteMovie } from "./delete";

//snagging html elements
let movieHtml = $(".movies");
let addButton = $("#submitMovie");



//display movies
const loadMovies= () => {
    return getMovies().then((movies) => {
        let html = "";
        movies.forEach(({title, rating, id}) => {
            // console.log(`id#${id} - ${title} - rating: ${rating}`);
            html += buildHTML(title, rating, id);
        });
        movieHtml.html(html);
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });
};

loadMovies();

//delete movies
$(".movies").on('click', $('.card'), (e) => {
    e.preventDefault();
    let id = ($(e.target).prev().children('span').text());
    deleteMovie(id);
    loadMovies();
});


//add movies
addButton.on('click', (e) => {
  e.preventDefault();
  let rating = getRating($('#rating').val());
  const newMovie = {
      "title": $('#title').val(),
      "rating": rating
  };
   addMovie(newMovie);
   loadMovies();
});





