import React from "react";
import { AcademyBasics } from "../Components/AcademyBasics";
import Footer from "../Components/Footer";
import SocialMedia from "../Components/SocialMedia";
import StrategyBasics from "../Components/StrategyBasics";

export default function Academy() {
  return (
    <div className="container">
      {/* TITLE */}
      <h1>Chesslr</h1>
      <h3>Academy</h3>
      <br />

      {/* INTRO VID */}
      <div id="inro-vid" className="container-fluid">
        <video
          src="placeholder.mp4"
          type="video/mp4"
          height="auto"
          width="100%"
          autoPlay
          controls
        ></video>
      </div>
      <br />

      {/* MODULE SECTIONS */}
      <h3>Course Content</h3>
      <br />
      <AcademyBasics />
      <br />
      <StrategyBasics />
      <br />
      <SocialMedia />
      <Footer />
    </div>
  );
}
