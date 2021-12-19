import React from "react";
import "./Meanings.css";
import "./index.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <small className="Synonyms">
        Similar:{" "}
        {props.synonyms.map(function (synonyms, index) {
          return <span key={index}>{synonyms} </span>;
        })}
      </small>
    );
  } else {
    return <small></small>;
  }
}
