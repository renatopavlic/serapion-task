import React from "react";

import "./Result.css";

function Result({ result }) {
    const generalize = (movie) => {
        switch(movie.source){
            default:
                return {
                    imgLnk: movie.Poster,
                    title: movie.Title,
                    year: movie.Year
                }
            case "tvdb":
                return {
                    imgLnk: movie.poster_path,
                    title: movie.original_title,
                }
            case "tvmaze":
                return {
                    imgLnk: (movie.show && movie.show.image)?movie.show.image.medium:console.log("no image", movie),
                    title: (movie.show)?movie.show.name:"No Title"
                }
            case "local":
                return {
                    imgLnk: movie.imageUrl,
                    title: movie.title
                }
            /*default:
                return "https://picsum.photos/420/330";*/
        }
    }

    const data = generalize(result);

    return (
        <div className="result">     
            <img src={data.imgLnk} className="result__image"/>
            <h3 className="result__title">{data.title}</h3>
            <h3 className="result__details">Year : {data.year}</h3>
        </div>
        

    )
}

export default Result;


