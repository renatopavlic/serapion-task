import React from 'react';

import "./MyResults.css";

function MyResults({title, imageUrl}) {


  return (
    <div className="myresults">
      <img src={imageUrl} className="myresults__image"/>
      <h2>{title}</h2>
    </div>
  )
}

export default MyResults;
