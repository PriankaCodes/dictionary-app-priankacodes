import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setloaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001f6ba68873d9c42fc917f138f5ab73a56";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function searchedWord(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setloaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>Look up a word</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="eg. dog, wine, cheese, travel"
            autoFocus={true}
            onChange={searchedWord}
          ></input>
          <button type="submit" onSubmit={handleSubmit}>
            <strong>Go</strong>
          </button>
        </form>
        <Results defined={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
