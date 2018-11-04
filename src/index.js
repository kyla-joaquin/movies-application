/**
 * es6 modules and imports
 */
import $ from "jquery";
import { getMovies } from './api.js';
import { buildHTML } from './build-html';
import { addMovie } from "./add";
import { getRating } from "./add";

//snagging html elements
let movieHtml = $(".movies");
let addButton = $("#submitMovie");


//display movies
const loadMovies= () => {
    getMovies().then((movies) => {
        let html = "";
        movies.forEach(({title, rating, id}) => {
            // console.log(`id#${id} - ${title} - rating: ${rating}`);
            html += buildHTML(title, rating, id);
        });
        movieHtml.html(html);
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.')
        console.log(error);
    });
}

loadMovies();

//add movies
addButton.on('click', function (e) {
  e.preventDefault();
  let rating = getRating($('#rating').val());
  const newMovie = {
      "title": $('#title').val(),
      "rating": rating
  };
   addMovie(newMovie);
   loadMovies();
});


