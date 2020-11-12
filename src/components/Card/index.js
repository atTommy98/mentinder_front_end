import React, { useState, useEffect } from "react";
import "../Card/card.css";
import Flair from "../Flairs/index";

export default function Card({ object }) {
  const [expertise, setExpertise] = useState([]);

  useEffect(() => {
    function formatPerson(object) {
      const array = Object.entries(object);
      let expertiseData = [];
      array.forEach((item) => {
        if (item[1] === "true") {
          return expertiseData.push(item[0]);
        }
      });
      setExpertise(expertiseData);
    }
    formatPerson(object);
  }, [object]);

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
            <div>
              {expertise.map((item) => {
                return <Flair expertise={item} />;
              })}
            </div>
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
