import React from "react";
import { Button } from "../Button";
import "./Portfolio.css";
import "../../App.css";
import Cards from "../Cards";

function About() {
  return (
    <div className="portfolio-container">
      <div className="row">
        <Cards />
      </div>
      <div className="row">
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            linkTo="media"
          >
            MEDIA
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About;
