import React from "react";
import "./topfiveform.css";

export default function topFiveForm({ topFive, setTopFive, mentorData }) {
  function handleSubmit(e) {
    setTopFive({
      firstname: e.target[0].value,
      lastname: e.target[1].value,
      email: e.target[2].value,
      firstChoice: e.target[3].value,
      secondChoice: e.target[4].value,
      thirdChoice: e.target[5].value,
      fourthChoice: e.target[6].value,
      fifthChoice: e.target[7].value,
    });
  }

  return (
    <form className="topFiveForm" onSubmit={(e) => handleSubmit(e)}>
      <h2 className="select-form-title">
        Bootcampers, select your top choice mentors...
      </h2>
      <div className="personal-details-container">
        <input
          placeholder="Bootcamper first name"
          style={{ width: "200px" }}
        ></input>
        <br />
        <input
          placeholder="Bootcamper second name"
          style={{ width: "200px" }}
        ></input>
        <br />
        <input
          placeholder="Bootcamper email address"
          style={{ width: "400px" }}
        ></input>
        <br />
      </div>
      <div className="dropdown-container">
        <p className="number">1.</p>
        <select id="mentor-choice1">
          {mentorData.map((item) => {
            return <option>{`${item.firstname} ${item.lastname}`}</option>;
          })}
        </select>
        <p className="number">2.</p>
        <select id="mentor-choice2">
          {mentorData.map((item) => {
            return <option>{`${item.firstname} ${item.lastname}`}</option>;
          })}
        </select>
        <p className="number">3.</p>
        <select id="mentor-choice3">
          {mentorData.map((item) => {
            return <option>{`${item.firstname} ${item.lastname}`}</option>;
          })}
        </select>
        <p className="number">4.</p>
        <select id="mentor-choice4">
          {mentorData.map((item) => {
            return <option>{`${item.firstname} ${item.lastname}`}</option>;
          })}
        </select>
        <p className="number">5.</p>
        <select id="mentor-choice5">
          {mentorData.map((item) => {
            return <option>{`${item.firstname} ${item.lastname}`}</option>;
          })}
        </select>
        <input
          type="submit"
          value="SUBMIT"
          className="choiceSubmitButton"
        ></input>
      </div>
    </form>
  );
}
