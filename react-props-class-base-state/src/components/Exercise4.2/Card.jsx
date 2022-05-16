/* eslint-disable jsx-a11y/alt-text */
import React from "react";
const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.image} className="image" />
      <h2 className="title">{props.title}</h2>
      <h4 className="description">{props.description}</h4>
      <div className="links-container">{props.children}</div>
    </div>
  );
};

export default Card;
