import React from "react";
import "../../header_style.css";

function Header() {
  return (
    <div className="header_contianer">
      <img src="../../src/images/Logo.png" alt="Nasa Logo"></img>
      <h2>
        <span className="span_heading">N</span>ational{" "}
        <span className="span_heading">A</span>eronautics{" "}
        <span className="span_heading">S</span>pace{" "}
        <span className="span_heading">A</span>dministration
      </h2>
      <nav>
        <a href="#">Home</a>
        <a href="#">More About Nasa</a>
        <a href="#">How I did This</a>
      </nav>
    </div>
  );
}
export default Header;
