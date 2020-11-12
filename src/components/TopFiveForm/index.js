import React from "react";
import "./topfiveform.css";
import useSound from "use-sound";
import nice from "./nice-best-[AudioTrimmer.com].mp3";
import makeSense from "./make-sense-[AudioTrimmer.com].mp3";
import perfect from "./perfect2-[AudioTrimmer.com].mp3";

export default function TopFiveForm({ topFive, setTopFive, mentorData }) {
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

  const [chrisEffect1] = useSound(nice);
  const [chrisEffect2] = useSound(perfect);
  const [chrisEffect3] = useSound(makeSense);

  return (
    <form className="mentorForm" onSubmit={(e) => handleSubmit(e)}>
      <h2 className="form-title">
        Bootcampers, select your top choice mentors...
      </h2>
      <div className="personal-details-container">
        <input placeholder="Bootcamper first name"></input>
        <br />
        <input placeholder="Bootcamper second name"></input>
        <br />
        <input placeholder="Bootcamper email address"></input>
        <br />
      </div>
      <div className="dropdown-container">
        <p>1.</p>
        <select onChange={chrisEffect1} id="mentor-choice1">
          {mentorData.map((item) => {
            return <option>{`${item.firstname} ${item.lastname}`}</option>;
          })}
        </select>
        <p>2.</p>
        <select onChange={chrisEffect2} id="mentor-choice2">
          {mentorData.map((item) => {
            return <option>{`${item.firstname} ${item.lastname}`}</option>;
          })}
        </select>
        <p>3.</p>
        <select onChange={chrisEffect3} id="mentor-choice3">
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
      </div>
    </form>
  );
}
