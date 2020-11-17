import React, { useState, useEffect } from "react";
import "../Card/card.css";
import Flair from "../Flairs/index";

export default function Card({ object }) {
  const [expertise, setExpertise] = useState([]);

  useEffect(() => {
    function formatPerson(object) {
      console.log(object);
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
            <img
              id="profile-image"
              className="image"
              src={object.imgurl}
              alt="profile picture"
            ></img>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              {object.firstname} {object.lastname}
            </h5>
            <h4 className="card-subtitle">{object.company}</h4>
            <p className="jobTitle">{object.job}</p>
            <div className="flair-grid">
              {expertise.map((item) => {
                return <Flair expertise={item} />;
              })}
            </div>
          </div>
        </div>

        <div className="card-back">
          <div className="card-text">
            <h3 className="card-subtitle">Bio</h3>
            <p className="backText">{object.bio}</p>
            <h3 className="card-subtitle">Contact</h3>
            <h4 className="backText">{object.email}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
