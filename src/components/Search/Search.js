import React from 'react';

import "./Search.css";

function Search({handleInput, search}) {
  return (
    <div className="search">
      <input  type="text" 
                    placeholder="Search for Movie..." 
                    className="search__input"
                    onChange={handleInput}
                    onKeyPress={search} >
            </input>
    </div>
  )
}

export default Search;
