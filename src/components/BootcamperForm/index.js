import React from "react";

function BootcamperForm() {
  return (
    <form>
      <label for="firstName">First name:</label>
      <input id="firstName"></input>
      <br />
      <label for="lastName">Last name:</label>
      <input id="lastName"></input>
      <br />
      <input type="radio" id="mentor" name="role" value="mentor"></input>
      <label for="mentor">Mentor</label>
      <input
        type="radio"
        id="bootcamper"
        name="role"
        value="bootcamper"
        checked="checked"
      ></input>
      <label for="bootcamper">Bootcamper</label>
      <br />
      <label for="email">Email:</label>
      <input id="email"></input>
      <br />
      <input type="radio" id="male" name="gender" value="male"></input>
      <label for="male">Male</label>
      <input type="radio" id="female" name="gender" value="female"></input>
      <label for="female">Female</label>
      <input
        type="radio"
        id="nonBinary"
        name="gender"
        value="nonBinary"
      ></input>
      <label for="other">Non-binary</label>
      <br /> <label for="mentorBio">Short bio:</label>
      <textarea id="mentorBio" name="mentorBio" rows="4" cols="50"></textarea>
      <p>Please select your interests:</p>
      <input
        type="checkbox"
        id="frontEnd"
        name="frontEnd"
        value="frontEnd"
      ></input>
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
      <p>Please select your hobbies:</p>
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
    </form>
  );
}

export default BootcamperForm;
