import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definitions, index) {
        console.log(definitions);
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definitions.definition}
              <br />
              <strong>Example: </strong>
              <em>{definitions.example}</em>
              <Synonyms synonyms={definitions.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
