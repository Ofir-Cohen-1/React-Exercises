import "./App.css";
import React from "react";
// import { Exercise2Part1 } from "./components/Exercise2.1";
// import {
//   Exercise2Section1,
//   Exercise2Section2,
//   Exercise2Section3,
// } from "./components/Exercise2.2";
import { Exercise3 } from "./components/Ex3.1/Exercise3.1";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Exercise2Part1 /> */}
        {/* <Exercise2Section1 />
        <Exercise2Section2 />
        <Exercise2Section3 /> */}
          <Exercise3></Exercise3>
      </div>
    );
  }
}

export default App;
