"use strict";

//changing the movie's info
export const editMovie = (id, editedMovie) => {
    fetch(`./api/movies/${id}`, {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json"},
        body: JSON.stringify(editedMovie)})
        .then(response => JSON.stringify(response));
};


//Grabbing the info of the movie to display
export const getMovieInfo = (id) => {
    fetch(`./api/movies`, {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json"}
    })
        .then(response => response.json())
        .then(response => {
            for ( let i = 0; i < response.length; i ++){
                if( response[i]['id'] === id){
                    let objToReturn = {
                        "title": response[i]['title'],
                        "rating": response[i]['rating']
                    };

                    let stars = "";
                    switch (objToReturn.rating){
                        case 1:
                            stars = "*";
                            break;
                        case 2:
                            stars= "**";
                            break;
                        case 3:
                            stars= "***";
                            break;
                        case 4:
                             stars ="****";
                             break;
                        case 5:
                            stars = "*****";
                            break;
                    }

                    $("#editTitle").val(objToReturn.title);
                    $("#editRating").val(stars);
                }
            }
        });
};