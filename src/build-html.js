"use strict";

export const buildHTML = (title, rating, id) => {
    let html = `<div class="card carousel-item">`;
    html += `<img class="card-img-top" src="img/fancycrave-440143-unsplash.jpg">`;
    html += `<div class="card-body">`;
    html += `<h4 class="card-title"> ${title} </h4>`;
    html += `<p class="card-text"> Rated: ${rating}</p>`;
    html += `<button class="deleteBtn" id="${id}"> Delete </button>`;
    html += `<button class="editBtn" id="${id}"> Edit </button>`;
    html += `</div>`;
    html += `</div>`;
    return html;
};