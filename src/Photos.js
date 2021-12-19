import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.photos.map(function (photo, index) {
          return (
            <a href={photo.src.original} target="_blank" rel="noreferrer">
              <img src={photo.src.landscape} alt={photo.alt} key={index}></img>
            </a>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
