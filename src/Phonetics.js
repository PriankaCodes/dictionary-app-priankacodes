import React from "react";

export default function Phonetics(props) {
  if (props) {
    return (
      <div>
        <span>{props.synonyms.text} </span>
        <a href={props.synonyms.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      </div>
    );
  } else {
    return null;
  }
}
