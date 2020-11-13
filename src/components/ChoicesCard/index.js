import React, { useState, useEffect } from "react";
import "./choicescard.css";
import Flair from "../Flairs";
import ChoiceFlair from "../ChoiceFlairs";

export default function ChoicesCard({ object }) {
  const [choices, setChoices] = useState([]);
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

  useEffect(() => {
    function formatChoices(object) {
      const array = Object.entries(object);
      let choiceData = [];

      array.forEach((item) => {
        if (item[0].includes("mentorchoice") === true) {
          return choiceData.push(item[1]);
        }
      });
      setChoices(choiceData);
    }

    formatChoices(object);
  }, [object]);

  return (
    <div className="choice-card-container">
      <div className="choice-card-inner">
        <div className="choice-card-front">
          <div className="choice-card-body">
            <h5 className="choice-card-title">
              <b>
                {object.firstname} {object.lastname}
              </b>
            </h5>
            <p>{object.bio}</p>
            <div className="bootcamper-flair-grid">
              {expertise.map((item) => {
                return <Flair expertise={item} />;
              })}
            </div>
          </div>
        </div>

        <div className="choice-card-back">
          <div className="choice-card-text">
            <h4>Mentor Choices</h4>
            <div className="choices-box">
              {choices.map((item) => {
                return <ChoiceFlair choices={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
