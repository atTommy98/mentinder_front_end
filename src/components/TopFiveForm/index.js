import React from "react";

export default function topFiveForm({ topFive, setTopFive, mentorData }) {
  function handleSubmit(e) {
    setTopFive({});
  }
  console.log(mentorData);
  return (
    <form className="mentorForm" onSubmit={(e) => handleSubmit(e)}>
      <input placeholder="Enter your first name"></input>
      <br />
      <input placeholder="Enter your second name"></input>
      <br />
      <input placeholder="Enter your email name"></input>
      <br />
      <select id="mentor-choice1">
        {mentorData.map((item) => {
          return <option>{`${item.firstname} ${item.lastname}`}</option>;
        })}
      </select>
      <select id="mentor-choice2">
        {mentorData.map((item) => {
          return <option>{`${item.firstname} ${item.lastname}`}</option>;
        })}
      </select>
      <select id="mentor-choice3">
        {mentorData.map((item) => {
          return <option>{`${item.firstname} ${item.lastname}`}</option>;
        })}
      </select>
      <select id="mentor-choice4">
        {mentorData.map((item) => {
          return <option>{`${item.firstname} ${item.lastname}`}</option>;
        })}
      </select>
      <select id="mentor-choice5">
        {mentorData.map((item) => {
          return <option>{`${item.firstname} ${item.lastname}`}</option>;
        })}
      </select>
    </form>
  );
}
