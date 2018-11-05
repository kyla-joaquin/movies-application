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
let deleteButton = $(".deleteBtn");


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

loadMovies().then(() => {
    //delete movies
    $('.deleteBtn').on('click', (e) => {
        e.preventDefault();
        let id = $(this).parent().eq(4).children('span').text();
        console.log(id);
        // deleteMovie(id);
        // loadMovies();
    });
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






//grab the value of the span with a class of id in the previous sibling


