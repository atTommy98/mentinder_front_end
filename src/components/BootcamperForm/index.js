import React, { useState } from "react";
import "./bootcamperform.css";

function BootcamperForm({ bootcamper, setBootcamper }) {
  function handleSubmit(event) {
    console.log(event);
    setBootcamper({
      firstname: event.target[0].value,
      lastname: event.target[1].value,
      email: event.target[2].value,
      company: "",
      job: "",
      role: "bootcamper",
      gender: event.target[3].value,
      bio: event.target[4].value,
      frontend: event.target[5].checked,
      backend: event.target[6].checked,
      gamedev: event.target[7].checked,
      ux: event.target[8].checked,
      security: event.target[9].checked,
      databases: event.target[10].checked,
      projectmanagement: event.target[11].checked,
      devops: event.target[12].checked,
      testing: event.target[13].checked,
      education: event.target[14].checked,
      finance: event.target[15].checked,
      infrastructure: event.target[16].checked,
      foodanddrink: event.target[17].checked,
      gaming: event.target[18].checked,
      sportandfitness: event.target[19].checked,
      music: event.target[20].checked,
      reading: event.target[21].checked,
      films: event.target[22].checked,
    });
    console.log(bootcamper);
  }

  return (
    <form className="bootcamperForm" onSubmit={(e) => handleSubmit(e)}>
      <p className="bootcamper-form-section-p">Personal Details:</p>
      <input placeholder="First Name" id="firstName"></input>
      <br />
      <input placeholder="Last Name" id="lastName"></input>
      <br />
      <input placeholder="E-Mail" id="email"></input>
      <br />
      <p id="gender">Gender:</p>
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
      <p className="bootcamper-form-section-p">
        Please select possible areas of interest:
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
      <p className="bootcamper-form-section-p">
        Please select any other interests:
      </p>
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
      <div className="bootcamper-button-container">
        <input type="submit" value="SUBMIT" id="bootcamperSubmitButton"></input>
      </div>
    </form>
  );
}

export default BootcamperForm;
