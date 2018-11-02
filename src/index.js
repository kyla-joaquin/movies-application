/**
 * es6 modules and imports
 */
import { getMovies } from './api.js';
import sayHello from './hello';
import { buildHTML } from './build-html';
import $ from "jquery";
import { addMovie } from "./add";
import { options } from "./add";

//snagging html elements
let movieHtml = $(".movies");
let addButton = $("#submitMovie");


//display movies
getMovies().then((movies) => {
  let html = "";
  movies.forEach(({title, rating, id}) => {
    // console.log(`id#${id} - ${title} - rating: ${rating}`);
      html += buildHTML(title,rating,id);
  });
  movieHtml.html(html);
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});


//add movies
addButton.on('click', function (e) {
  e.preventDefault();
  const newMovie = {
      "title": $('#title').val(),
    "rating": $('#rating').val()
  };
   addMovie(newMovie);
});


