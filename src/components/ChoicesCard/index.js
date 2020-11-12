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
      console.log(array);
      // const choice1 = array[28][1];
      // console.log(choice1);
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
          {/* <div>
            <img
              id="profile-image"
              className="image"
              src={object.imgurl}
              alt="profile picture"
            ></img>
          </div> */}
          <div className="choice-card-body">
            <h5 className="choice-card-title">
              <b>
                {object.firstname} {object.lastname}
              </b>
            </h5>
            {/* <h4 className="choice-card-subtitle">{object.company}</h4>
            <p>{object.job}</p> */}
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
            <div className="choices-grid">
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

// function addToArray() {
// //   if (array[28][0] != null) {
// //     return choiceData.push(array[28][1]);
// //   }
// //   if (array[29][0] != null) {
// //     return choiceData.push(array[29][1]);
// //   }
// //   if (array[30][0] != null) {
// //     return choiceData.push(array[30][1]);
// //   }
// //   if (array[31][0] != null) {
// //     return choiceData.push(array[31][1]);
// //   }
// //   if (array[32][0] != null) {
// //     return choiceData.push(array[32][1]);
// //   }
// // }
// function addToArray() {
//   return choiceData.push(array[28][1]), choiceData.push(array[29][1]);
// }
// // array.forEach((item) => {
// //   if (item[1] === null) {
// //     return

// //     } else (item[0]='mentorchoice1'){
// //     return choiceData.push(item[1]);
// //     }
// //   }
// // });
// addToArray(array);
