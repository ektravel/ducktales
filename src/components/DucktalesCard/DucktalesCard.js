import React from "react";
import "./DucktalesCard.css";

const DucktalesCard = props => (
  <div className="card">
    <div className="img-container">
      <a onClick={() => props.clickDuck(props.id)}>
        <img className = "cardImg" alt={props.name} src={props.image} />
      </a>
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
  </div>
);

export default DucktalesCard;
