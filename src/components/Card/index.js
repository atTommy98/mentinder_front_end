import React, { useState } from "react";
import "../Card/card.css";

export default function Card({ object }) {
  function formatPerson(object) {
    const expertise = Object.keys(object);
    expertise.map((key) => {
      if (key === true) {
        return key;
      }
    });
    console.log(expertise);
  }
  formatPerson(object);

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
            <h5 className="card-subtitle">{object.company}</h5>
            <p>{object.job}</p>
          </div>
        </div>

        <div className="card-back">
          <div className="card-text">
            <p>{object.bio}</p>
            <p>{object.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
