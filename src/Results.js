import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import "./Results.css";
import { Postit } from "./Postit.style";

export default function Results(props) {
  if (props.defined) {
    return (
      <div className="Results">
        {props.defined.phonetics.map(function (phonetics, index) {
          return (
            <span key={index}>
              <Phonetics synonyms={phonetics} />
            </span>
          );
        })}
        <h2>{props.defined.word}</h2>
        <section>
          <Postit
            color="linear-gradient(135deg, #FDEB71 10%, #F8D800 100%);"
            transform="translate(112px,39px)"
            width="300px;"
            height="300px;"
          >
            <Meanings meaning={props.defined.meanings[2]} />
          </Postit>
          <Postit
            color="linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%);"
            transform="translate(285px,-221px)"
            width="300px;"
            height="300px;"
          >
            <Meanings meaning={props.defined.meanings[0]} />
          </Postit>
          <Postit
            color="linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%);"
            transform="translate(21px,129px)"
            width="400px;"
            height="200px;"
          >
            <Meanings meaning={props.defined.meanings[1]} />
          </Postit>
        </section>
      </div>
    );
  } else {
    return <div></div>;
  }
}
