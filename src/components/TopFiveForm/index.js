import React, { useState } from "react";
import "./topfiveform.css";
import useSound from "use-sound";
import nice from "./nice-best-[AudioTrimmer.com].mp3";
import makeSense from "./make-sense-[AudioTrimmer.com].mp3";
import perfect from "./perfect2-[AudioTrimmer.com].mp3";
import cool from "./cool best-[AudioTrimmer.com].mp3";
import sweet from "./sweet-[AudioTrimmer.com].mp3";

const initialChrisState = {
  chris1: false,
  chris2: false,
  chris3: false,
  chris4: false,
  chris5: false,
};

export default function TopFiveForm({ topFive, setTopFive, mentorData }) {
  const [showChris, setShowChris] = useState(initialChrisState);

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

  function toggleShowChris(chris) {
    setShowChris({ ...initialChrisState, [chris]: true });
  }

  const [chrisEffect1] = useSound(nice);
  const [chrisEffect2] = useSound(perfect);
  const [chrisEffect3] = useSound(makeSense);
  const [chrisEffect4] = useSound(cool);
  const [chrisEffect5] = useSound(sweet);

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
        <div>
          <p className="number">1.</p>
          <select
            onChange={() => {
              setTimeout(chrisEffect1, 300);
              toggleShowChris("chris1");
            }}
            id="mentor-choice1"
          >
            {mentorData.map((item) => {
              return <option>{`${item.firstname} ${item.lastname}`}</option>;
            })}
          </select>
          <br></br>
          <img
            className={showChris.chris1 ? "chrisImage1" : "noChrisImage"}
            src="/chris-hat3.png"
          />
        </div>
        <div>
          <p className="number">2.</p>
          <select
            onChange={() => {
              setTimeout(chrisEffect2, 800);
              toggleShowChris("chris2");
            }}
            id="mentor-choice2"
          >
            {mentorData.map((item) => {
              return <option>{`${item.firstname} ${item.lastname}`}</option>;
            })}
          </select>
          <br></br>
          <img
            className={showChris.chris2 ? "chrisImage2" : "noChrisImage"}
            src="/chris-hat3.png"
          />
        </div>
        <div>
          <p className="number">3.</p>
          <select
            onChange={() => {
              setTimeout(chrisEffect4, 800);
              toggleShowChris("chris3");
            }}
            id="mentor-choice3"
          >
            {mentorData.map((item) => {
              return <option>{`${item.firstname} ${item.lastname}`}</option>;
            })}
          </select>
          <br></br>
          <img
            className={showChris.chris3 ? "chrisImage3" : "noChrisImage"}
            src="/chris-hat3.png"
          />
        </div>
        <div>
          <p className="number">4.</p>
          <select
            onChange={() => {
              setTimeout(chrisEffect5, 800);
              toggleShowChris("chris4");
            }}
            id="mentor-choice4"
          >
            {mentorData.map((item) => {
              return <option>{`${item.firstname} ${item.lastname}`}</option>;
            })}
          </select>
          <br></br>
          <img
            className={showChris.chris4 ? "chrisImage4" : "noChrisImage"}
            src="/chris-hat3.png"
          />
        </div>
        <div>
          <p className="number">5.</p>
          <select
            onChange={() => {
              setTimeout(chrisEffect3, 800);
              toggleShowChris("chris5");
            }}
            id="mentor-choice5"
          >
            {mentorData.map((item) => {
              return <option>{`${item.firstname} ${item.lastname}`}</option>;
            })}
          </select>
          <br></br>
          <img
            className={showChris.chris5 ? "chrisImage5" : "noChrisImage"}
            src="/chris-hat3.png"
          />
        </div>
        <input type="submit"
          value="SUBMIT"
          className="choiceSubmitButton"></input>
      </div>
    </form>
  );
}
