"use strict";

export const editMovie = (id) => {
    fetch(`./api/movies/${id}`, {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json"}
    })
        .then(response => JSON.stringify(response));
};

export const getMovieInfo = (id) => {
    fetch(`./api/movies/${id}`, {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json"}
    })
        .then(response => {
            let jsonString = JSON.stringify(response);
            console.log(jsonString.movies);
        });
}