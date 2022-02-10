import React from "react";
import { Button } from "../Button";
import "./About.css";
import "../../App.css";
import image from "../../images/AboutMe.jpg";

function About() {
  return (
    <div className="about-container">
      <div className="row">
        <div className="col">
          <div className="about-me">
            <h3>About Me</h3>
            <br />
            <br />
            <p>
              I'm a Full-Stack Web Developer with a strong passion for writing
              clean code and creating simple, yet dynamic user experiences.
              <br />
              <br />
              Before transitioning into the software side of engineering, I was
              an electrical engineer. I initially picked electrical engineering
              as my major at Virginia Tech because I wanted to be hands on and
              build things. It wasn't really until closer to graduation that I
              understood programming was a unique way of both creating useful
              tools for the world and expressing my creative side. After 4 years
              in the semiconductor industry, I decided to commit myself full
              time to becoming a full-stack web developer since I felt I could
              grow more and have more opportunities on the software side of
              engineering.
              <br />
              <br />I am an independent, well organized person who is patient
              and have a high attention to detail. In my free time, I enjoy
              traveling, taking photos, creating videos, watching movies, and
              playing video games,
            </p>
            <div className="hero-btns">
              <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                linkTo="resume"
              >
                RESUME
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
