import React from "react";

export default function topFiveForm({ topFive, setTopFive, mentorData }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
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
    console.log(topFive);
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
      <p>1.</p>
      <select id="mentor-choice1">
        {mentorData.map((item) => {
          return <option>{`${item.firstname} ${item.lastname}`}</option>;
        })}
      </select>
      <p>2.</p>
      <select id="mentor-choice2">
        {mentorData.map((item) => {
          return <option>{`${item.firstname} ${item.lastname}`}</option>;
        })}
      </select>
      <p>3.</p>
      <select id="mentor-choice3">
        {mentorData.map((item) => {
          return <option>{`${item.firstname} ${item.lastname}`}</option>;
        })}
      </select>
      <p>4.</p>
      <select id="mentor-choice4">
        {mentorData.map((item) => {
          return <option>{`${item.firstname} ${item.lastname}`}</option>;
        })}
      </select>
      <p>5.</p>
      <select id="mentor-choice5">
        {mentorData.map((item) => {
          return <option>{`${item.firstname} ${item.lastname}`}</option>;
        })}
      </select>
      <input type="submit" value="Submit"></input>
    </form>
  );
}
