import React from "react";
import Result from "../Result/Result";

import "./Results.css"

function Results( { results }) {
    return results ? (
        <section className="results">
            {results.map(result => (
                <Result key={Math.random()} result={result} />
            ))
            }
        </section>

    ) : (<h2 style={{color: "white"}}>No results 🥺</h2>)
        
    
}

export default Results;