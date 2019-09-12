import React from "react";
import styled from "styled-components"

export const SpanElement=styled.span`
font-weight: bold;`
const ContentHolder = props => {
  return (
    <div class="card mb-3" key={props.title}>
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src={props.img}
            class="card-img rounded mx-auto d-block"
            alt="Astronomy of the Day"
          ></img>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">
              <SpanElement>Description:</SpanElement> {props.explanation}
            </p>
            <p class="card-text">
              <small class="text-muted">Credit: {props.copyright}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHolder;
