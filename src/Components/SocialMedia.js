import React from "react";
import { SocialIcon } from "react-social-icons";

export default function SocialMedia() {
  return (
    <div className="socials">
      <SocialIcon
        url="https://facebook.com"
        fgColor="white"
        style={{ margin: "5px" }}
        target={"_blank"}
      />
      <SocialIcon
        url="https://instagram.com"
        fgColor="white"
        style={{ margin: "5px" }}
        target={"_blank"}
      />
      <SocialIcon
        network="twitter"
        fgColor="white"
        url="https://twitter.com"
        style={{ margin: "5px" }}
        target={"_blank"}
      />
      <SocialIcon
        network="youtube"
        fgColor="white"
        url="https://youtube.com"
        style={{ margin: "5px" }}
        target={"_blank"}
      />
    </div>
  );
}
