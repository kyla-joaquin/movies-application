"use strict";

export const deleteMovie = (id) => {
    fetch(`./api/movies/${id}`, {
        "method": "DELETE",
        "headers": {
            "Content-Type": "application/json"}
    })
        .then(response => JSON.stringify(response));
};