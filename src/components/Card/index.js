import React, { useState } from "react";
import "../Card/card.css";

export default function Card({ object }) {
  return (
    <div className="card-container">
      <div className="card-inner">
        <div className="card-front">
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
          </div>
        </div>

        <div className="card-back">
          <p className="card-text">{object.bio}</p>
        </div>
      </div>
    </div>
  );
}
