import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/ColorGrade_Medium.mp4" autoPlay loop muted />
      <h1>Hi,</h1>
      <h1>I'm Jonathan Nguyen,</h1>
      <h1>Full-Stack Web Developer.</h1>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          linkTo="about"
        >
          ABOUT ME
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
