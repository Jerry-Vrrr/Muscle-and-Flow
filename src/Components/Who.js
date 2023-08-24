import React from "react";
import Phil from "../Images/Phil.png";

export default function Who() {
  return (
    <div className="who">
      <div className="who-text">
        <h2>Why Listen To This Guy?</h2>
        <p>
          Accomplishments, certs, competition placings, passions, lifestyle
          things, etc... Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed dore eu fugiat nulla pariatur.
        </p>
      </div>

      <img className="phil" src={Phil} alt="Phil" />
    </div>
  );
}
