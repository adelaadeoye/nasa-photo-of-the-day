import React from "react";

const ContentHolder = props => {
  return (
    <div className="content_container" key={props.title}>
      <h2>Let Me Waoh You With Nature...being {props.date}</h2>
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
