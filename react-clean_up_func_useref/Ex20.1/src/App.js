import React, { useState } from "react";
import CancelRequest from "./components/CancelRequest";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <button onClick={() => setToggle((prev) => !prev)}>On/Off</button>
      <div>{toggle && <CancelRequest />}</div>
    </div>
  );
}

export default App;
