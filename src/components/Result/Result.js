import React from "react";

import "./Result.css";

function Result({ result }) {
    return (
        <div className="result">
            <img src={ result.Poster || `https://image.tmdb.org/t/p/w500/${result.poster_path}` || result.show.image.medium} className="result__image"/>
    <h3>{result.Title || result.original_title || result.show.name}</h3>
        </div>
    )
}

export default Result;
