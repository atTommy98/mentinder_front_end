import React, { useState } from "react";
import "../Card/card.css";

export default function Card({ object }) {
  return (
    <div className="card-container">
      <div>
        <img className="image" src="anon.png"></img>
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <b>
            {object.firstname} {object.lastname}
          </b>
        </h5>
        <h6 className="card-subtitle">{object.role}</h6>
  <p className="card-text">{object.bio}</p>
      </div>
    </div>
  );
}
