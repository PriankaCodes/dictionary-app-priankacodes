import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function searchedWord(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word"
          autoFocus={true}
          onChange={searchedWord}
        ></input>
        <button type="submit" onSubmit={search}>
          Go
        </button>
      </form>
    </div>
  );
}
