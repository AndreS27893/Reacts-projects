import React from "react";
import "./About.css";
import andresBonilla from "../../media/andresBonilla1.jpg"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me</h3>
        <p>
        Hi! How are you? I'm Andrés, a junior web programmer. Enthusiastic with a great desire to continue learning and improving, addicted to continue cultivating myself, self-taught, proactive, always looking for the most effective way to solve problems. See you in the contacts section, see you!
        </p>
      </div>
      <div className="about-img">
        <img
          src={andresBonilla}
          alt="about"
        />
      </div>
    </div>
  );
};
