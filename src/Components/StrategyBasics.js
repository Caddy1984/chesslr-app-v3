import React, { useState } from "react";
import VideoModal from "./VideoModal";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import { academyIndexStrategy } from "../Data/AcademyData";

export default function StrategyBasics() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="collapse-text"
        aria-expanded={open}
        className="btn btn-secondary btn-lg btn-block"
      >
        Strategy
      </Button>
      <Collapse in={open}>
        <div id="collapse-text">
          <br />
          {academyIndexStrategy.map((x) => {
            return (
              <div key={x.id}>
                <ul>
                  <li key={x.id}>
                    <h5>{x.title}</h5>
                    <p>{x.description}</p>
                    <VideoModal key={x.id} title={x.title} url={x.url} />
                    <hr />
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </Collapse>
    </>
  );
}
