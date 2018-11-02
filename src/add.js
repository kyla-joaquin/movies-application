"use strict";



export const options = {
"method": "POST",
"headers": {
    "Content-Type": "application/json",
},
body: JSON.stringify(addMovie)
};


export const addMovie = (newMovie) => {
    return fetch('/api/movies', options)
        .then(response => response.json());
};

