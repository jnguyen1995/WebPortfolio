import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Software Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Sony.jpg"
              text="Sony Webcam (Work in Progress)"
              path="/portfolio"
            />
            <CardItem
              src="images/Capture.JPG"
              text="WeLoveMovies"
              path="/portfolio"
            />
            <CardItem
              src="images/Flashcards.JPG"
              text="Flashcards Application"
              path="/portfolio"
            />
            <CardItem
              src="images/Pomodoro.png"
              text="Pomodoro Timer"
              path="/portfolio"
            />
          </ul>
          <br />
          <h1>Hardware Projects</h1>
          <br />
          <br />
          <ul className="cards__items">
            <CardItem
              src="images/intro-series.JPG"
              text="Designing with Comparators"
              path="/portfolio"
            />
            <CardItem
              src="images/intro-high-speed.JPG"
              text="Intro to High Speed Applications"
              path="/portfolio"
            />
            <CardItem
              src="images/ToF.JPG"
              text="Application Report on ToF Technology"
              path="/portfolio"
            />
            <CardItem
              src="images/pspice.JPG"
              text="PSpice Model Designs"
              path="/portfolio"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
