import React from 'react';

import "./MyResults.css";

function MyResults({title, imageUrl}) {


  return (
    <div className="myresults">
      <img src={imageUrl} className="myresults__image"/>
      <h3>{title}</h3>
    </div>
  )
}

export default MyResults;
