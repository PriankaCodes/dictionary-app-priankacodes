import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
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
