"use strict";

export const buildHTML = (title, rating, id) => {
    let html = `<div class="card carousel-item">`;
    html += `<img class="card-img-top" src="https://picsum.photos/200/300">`;
    html += `<div class="card-body">`;
    html += `<h4 class="card-title"> ${title} </h4>`;
    html += `<p class="card-text"> Rated: ${rating}, ID: <span class="id">${id}</span></p>`;
    html += `<button class="deleteBtn"> Delete </button>`;
    html += `<button class="editBtn"> Edit </button>`;
    html += `</div>`;
    html += `</div>`;
    return html;
};