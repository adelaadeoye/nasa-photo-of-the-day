import React from "react";
import { Alert } from "reactstrap";

const ContentHolder = props => {
  return (
    <div className="content_container" key={props.title}>
      <Alert color="primary">This is a primary alert — check it out!</Alert>
      <h3>Astronomy Picture of the Day</h3>
      <p>{props.title}</p>
      <img src={props.img} alt="Astronomy of the Day"></img>
      <p>
        <span>Description:</span> {props.explanation}
      </p>
      <p>Credit: {props.copyright}</p>
    </div>
  );
};

export default ContentHolder;
