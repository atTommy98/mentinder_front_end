import React, { useState } from "react";
import "./mentorform.css";

function MentorForm({ mentor, setMentor }) {
  function handleSubmit(event) {
    console.log(event);
    setMentor({
      firstname: event.target[0].value,
      lastname: event.target[1].value,
      email: event.target[2].value,
      company: event.target[3].value,
      job: event.target[4].value,
      role: "mentor",
      imgurl: event.target[5].value,
      gender: event.target[6].value,
      bio: event.target[7].value,
      frontend: event.target[8].checked,
      backend: event.target[9].checked,
      gamedev: event.target[10].checked,
      ux: event.target[11].checked,
      security: event.target[12].checked,
      databases: event.target[13].checked,
      projectmanagement: event.target[14].checked,
      devops: event.target[15].checked,
      testing: event.target[16].checked,
      education: event.target[17].checked,
      finance: event.target[18].checked,
      infrastructure: event.target[19].checked,
      foodanddrink: event.target[20].checked,
      gaming: event.target[21].checked,
      sportandfitness: event.target[22].checked,
      music: event.target[23].checked,
      reading: event.target[24].checked,
      films: event.target[25].checked,
    });
    console.log(mentor);
  }

  return (
    <form className="mentorForm" onSubmit={(e) => handleSubmit(e)}>
      <p className="mentor-form-section-p">Personal Details:</p>
      <input placeholder="First Name" id="firstName"></input>
      <br />
      <input placeholder="Last Name" id="lastName"></input>
      <br />
      <input placeholder="E-Mail" id="email"></input>
      <br />
      <input placeholder="Company" id="company"></input>
      <br />
      <input placeholder="Job" id="job"></input>
      <br />
      <input
        placeholder="Enter an image URL location"
        id="imgurl"
        name="imgurl"
      ></input>
      <br />
      <p>Gender:</p>
      <select id="gender-list">
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Non-binary">Non-binary</option>
        <option value="Other">Other</option>
        <option value="Prefer not to say">Prefer not to say</option>
      </select>
      <br />
      <br />
      <textarea
        placeholder="Enter a short bio..."
        id="mentorBio"
        name="mentorBio"
        rows="4"
        cols="50"
      ></textarea>
      <p className="mentor-form-section-p">
        Please select your areas of expertise:
      </p>
      <input type="checkbox" id="frontEnd" name="frontEnd"></input>
      <label for="frontEnd">Front-End</label>
      <br />
      <input
        type="checkbox"
        id="backEnd"
        name="backEnd"
        value="backEnd"
      ></input>
      <label for="backEnd">Back-End</label>
      <br />
      <input
        type="checkbox"
        id="gameDevelopment"
        name="gameDevelopment"
        value="gameDevelopment"
      ></input>
      <label for="gameDevelopment">Game Development</label>
      <br />
      <input type="checkbox" id="ux" name="ux" value="ux"></input>
      <label for="ux">UX</label>
      <br />
      <input
        type="checkbox"
        id="security"
        name="security"
        value="security"
      ></input>
      <label for="security">Security</label>
      <br />
      <input
        type="checkbox"
        id="databases"
        name="databases"
        value="databases"
      ></input>
      <label for="databases">Databases</label>
      <br />
      <input
        type="checkbox"
        id="projectManagement"
        name="projectManagement"
        value="projectManagement"
      ></input>
      <label for="projectManagement">Project Management</label>
      <br />
      <input type="checkbox" id="devops" name="devops" value="devops"></input>
      <label for="devops">Dev-Ops</label>
      <br />
      <input
        type="checkbox"
        id="testing"
        name="testing"
        value="testing"
      ></input>
      <label for="testing">Testing</label>
      <br />
      <input
        type="checkbox"
        id="education"
        name="education"
        value="education"
      ></input>
      <label for="education">Education</label>
      <br />
      <input
        type="checkbox"
        id="finance"
        name="finance"
        value="finance"
      ></input>
      <label for="finance">Finance</label>
      <br />
      <input
        type="checkbox"
        id="infrastructure"
        name="infrastructure"
        value="infrastructure"
      ></input>
      <label for="infrastructure">Infrastructure</label>
      <br />
      <p className="mentor-form-section-p">Please select your hobbies:</p>
      <input
        type="checkbox"
        id="foodAndDrink"
        name="foodAndDrink"
        value="foodAndDrink"
      ></input>
      <label for="foodAndDrink">Food and Drink</label>
      <br />
      <input type="checkbox" id="gaming" name="gaming" value="gaming"></input>
      <label for="gaming">Gaming</label>
      <br />
      <input
        type="checkbox"
        id="sportAndFitness"
        name="sportAndFitness"
        value="sportAndFitness"
      ></input>
      <label for="sportAndFitness">Sport and Fitness</label>
      <br />
      <input type="checkbox" id="music" name="music" value="music"></input>
      <label for="music">Music</label>
      <br />
      <input
        type="checkbox"
        id="reading"
        name="reading"
        value="reading"
      ></input>
      <label for="reading">Reading</label>
      <br />
      <input type="checkbox" id="films" name="films" value="films"></input>
      <label for="films">Films</label>
      <br />
      <div className="mentor-button-container">
        <input type="submit" value="SUBMIT" id="mentorSubmitButton"></input>
      </div>
    </form>
  );
}

export default MentorForm;
