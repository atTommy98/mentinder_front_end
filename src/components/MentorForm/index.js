import React from "react";

function MentorForm() {
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
      ></input>
      <label for="bootcamper">Bootcamper</label>
      <br />
      <label for="email">Email:</label>
      <input id="email"></input>
      <br />
      <label for="company">Company:</label>
      <input id="company"></input>
      <br />
      <label for="role">Job role:</label>
      <input id="role"></input>
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
      <p>Please select your areas of expertise:</p>
      <input
        type="checkbox"
        id="frontEnd"
        name="frontEnd"
        value="frontEnd"
      ></input>
      <label for="frontEnd">front-end</label>
      <br />
      <input
        type="checkbox"
        id="backEnd"
        name="backEnd"
        value="backEnd"
      ></input>
      <label for="backEnd">back-end</label>
      <br />
      <input
        type="checkbox"
        id="gameDevelopment"
        name="gameDevelopment"
        value="gameDevelopment"
      ></input>
      <label for="gameDevelopment">game development</label>
      <br />
      <input
        type="checkbox"
        id="UXdesign"
        name="UXdesign"
        value="UXdesign"
      ></input>
      <label for="UXdesign">UX / design</label>
      <br />
      <input
        type="checkbox"
        id="security"
        name="security"
        value="security"
      ></input>
      <label for="security">security</label>
      <br />
      <input
        type="checkbox"
        id="databases"
        name="databases"
        value="databases"
      ></input>
      <label for="databases">databases</label>
      <br />
      <input
        type="checkbox"
        id="projectManagement"
        name="projectManagement"
        value="projectManagement"
      ></input>
      <label for="projectManagement">project management</label>
      <br />
      <input type="checkbox" id="devOps" name="devOps" value="devOps"></input>
      <label for="devOps">dev-ops</label>
      <br />
      <input
        type="checkbox"
        id="testing"
        name="testing"
        value="testing"
      ></input>
      <label for="testing">testing</label>
      <br />
      <input
        type="checkbox"
        id="education"
        name="education"
        value="education"
      ></input>
      <label for="education">education</label>
      <br />
      <input type="checkbox" id="devOps" name="devOps" value="devOps"></input>
      <label for="devOps">dev-ops</label>
      <br />
    </form>
  );
}

export default MentorForm;
