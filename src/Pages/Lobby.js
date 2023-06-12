import React from "react";
import Title from "../Components/Title";
import Footer from "../Components/Footer";
import SocialMedia from "../Components/SocialMedia";

export default function Lobby() {
  return (
    <div className="container">
      <Title />
      <SocialMedia />
      <Footer />
    </div>
  );
}
