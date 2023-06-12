import React from "react";
import { Link } from "react-router-dom";

export default function AcademyLink() {
  return (
    <div>
      <h3>
        Never played Chess before? Head over to our FREE
        <Link to="/academy"> Chess Academy! </Link>
      </h3>
    </div>
  );
}
