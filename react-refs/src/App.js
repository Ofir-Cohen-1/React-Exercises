import React from "react";
import InputFocus from "./components/ex14.1/InputFocus";
import TextCopy from "./components/ex14.2/TextCopy";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <InputFocus />
        <hr />
        <TextCopy />
      </div>
    );
  }
}

export default App;
