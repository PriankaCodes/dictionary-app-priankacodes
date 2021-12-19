import React from "react";
import Synonyms from "./Synonyms";
import { PostitNone } from "./PostitNone.style";
import "./Meanings.css";

export default function Meanings(props) {
  if (props.meaning) {
    return (
      <PostitNone className="Meanings">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definitions, index) {
          return (
            <span key={index}>
              <p>
                <strong>Definition: </strong>
                {definitions.definition}
                <br />
                <em className="example">{definitions.example}</em>
                <br />
                <Synonyms synonyms={definitions.synonyms} />
              </p>
            </span>
          );
        })}
      </PostitNone>
    );
  } else {
    return null;
  }
}
