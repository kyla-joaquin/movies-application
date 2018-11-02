/**
 * es6 modules and imports
 */
import { getMovies } from './api.js';
import sayHello from './hello';
import { buildHTML } from './build-html';
import $ from "jquery";

//snagging html elements
let movieHtml = $(".movies");


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
