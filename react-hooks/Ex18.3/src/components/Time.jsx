import React, { useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinuts] = useState(0);
  const [hours, setHours] = useState(0);

  const handleSeconds = ({ target: { value } }) => {
    setSeconds(value);
    setMinuts(value / 60);
    setHours(value / 3600);
  };
  const handleMinutes = ({ target: { value } }) => {
    setSeconds(value * 60);
    setMinuts(value);
    setHours(value / 60);
  };
  const handleHours = ({ target: { value } }) => {
    setSeconds(value * 3600);
    setMinuts(value * 60);
    setHours(value);
  };

  return (
    <>
    <div>
      <span>Seconds</span>
      <input type="number" onChange={handleSeconds} value={seconds} />
    </div>
    <div>
      <span>Minuts</span>
      <input type="number" onChange={handleMinutes} value={minutes} />
    </div>
    <div>
      <span>Hours</span>
      <input type="number" onChange={handleHours} value={hours} />
    </div>
    </>
  );
}

export default App;
