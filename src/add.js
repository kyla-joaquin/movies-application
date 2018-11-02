"use stricit";

export const addMovie = (movies) => {
    return fetch('/api/movies')
        .then(response => response.json());
};