import React from "react";
import "./App.css";
// import Exercise8Part1 from "./components/Exercise8.1/exercise8.1";
import Exercise8Part2 from "./components/Exercise8.2/exercise8.2";

function App() {
  return (
    <div className="App">
      {/* <Exercise8Part1></Exercise8Part1> */}
      <Exercise8Part2 className="mediumBox"/>
      <Exercise8Part2 className="largeBox"/>
      <Exercise8Part2 className="smallBox"/>
    </div>
  );
}

export default App;
