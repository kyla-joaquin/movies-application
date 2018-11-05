"use strict";



export const getRating = (stars) => {
    switch (stars) {
        case "*":
            return 1;
        case "**":
            return 2;
        case "***":
            return 3;
        case "****":
            return 4;
        case "*****":
            return 5;
        default:
            return "undefined"
    }
};

export const addMovie = ({title, rating}) => {
    let newMovie = { title, rating };
    fetch('./api/movies', {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"},
        body: JSON.stringify(newMovie)})
        .then(response => JSON.stringify(response));
};

