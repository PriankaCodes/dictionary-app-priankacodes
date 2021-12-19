import React from "react";
import "./Results.css";
import listen from "./listen.png";

export default function Phonetics(props) {
  if (props) {
    return (
      <span className="Phonetics">
        <a href={props.synonyms.audio} target="_blank" rel="noreferrer">
          <img
            src={listen}
            alt="listen icon"
            width="40px"
            className="Listen"
          ></img>
        </a>
        {props.synonyms.text}
      </span>
    );
  } else {
    return null;
  }
}
