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
//TODO: Need to access the JSON file,
//make the file workable
// then access the array in the JSON file
//then push the newMovie object onto that array
//then parse the array back into JSON
export const addMovie = ({title, rating}) => {
    let newMovie = { title, rating };
    fetch('./api/movies', {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"},
        body: JSON.stringify(newMovie)

    })
        .then(response => JSON.stringify(response))
        .then(data => console.log(data));
};

