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
    fetch(`./api/movies`, {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json"}
    })
        .then(response => response.json()).then(response => {
            console.log(response[0]['id']);
        });
};