import React from "react";
import SignUp from "../Components/SignUp";
import SocialMedia from "../Components/SocialMedia";
import Title from "../Components/Title";
import AcademyLink from "../Components/AcademyLink";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="App">
      <Title />
      <br />
      <SignUp />
      <br />
      <AcademyLink />
      <br />
      <SocialMedia />
      <br />
      <Footer />
    </div>
  );
}
