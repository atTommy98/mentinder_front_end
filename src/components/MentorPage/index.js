import React from "react";
import MentorForm from "../MentorForm";
import "./mentorpage.css";

function Mentor() {
  return (
    <main className="mainMentor">
      <article className="mentorArticle">
        <h1 className="h1Mentor">Why become a mentor?</h1>
        <p className="blurb-p">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <h1 className="h1Mentor">What does being a mentor involve?</h1>
        <p className="blurb-p">
          During the first few weeks of the course, bootcampers will be assigned
          a mentor and it is their responsibility to reach out to you. Once they
          have done so, the aim should be to orgainse a 30 mintute chat or video
          call with your bootcamper every week. These sessions may be used to
          answer questions bootcampers have about what they are learning on the
          course and to help them with anything they are stuck on, pass on
          industry knowledge and experience you think would be useful to them,
          help them prepare for getting a job after the course by sharing your
          expertise and experience, and generally being a source of support and
          inspiration for them during their time on the course. This is a chance
          to nurture a really positive relationship and one which may continue
          after the bootcamp.
        </p>
      </article>
      <div className="mentor-box-layout">
        <h2 className="h2Mentor">Sign up here...</h2>
        <MentorForm />
      </div>
    </main>
  );
}

export default Mentor;
