import Dictionary from "./Dictonary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="travel" />
      <h6>
        Hand coded by PriankaCodes. Check me out on{" "}
        <a href="https://github.com/PriankaCodes/dictionary-app-priankacodes">
          GitHub.
        </a>
      </h6>
    </div>
  );
}

export default App;
