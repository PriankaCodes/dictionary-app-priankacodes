import React from "react";
import Meanings from "./Meanings";
import "./index.css";

export default function Results(props) {
  if (props.defined) {
    return (
      <div className="Results">
        <h2>{props.defined.word}</h2>
        {props.defined.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
}
