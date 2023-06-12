import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="page-footer font-small blue">
      <div className="footer-copyright text-center py-3">
        <Link to="/support"> Customer Support </Link>
        <br />© {currentYear} Copyright:
        <a href="/"> Chesslr.com</a>
      </div>
    </footer>
  );
}
