import React, { useEffect, useState, useRef } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  const inputRef = useRef();
  useEffect(() => {
    if (!toggle) {
      inputRef.current.focus();
      // console.log(inputRef.current); //<input>
    }
  }, [toggle]);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      {toggle ? (
        <button onClick={handleClick}>Edit</button>
      ) : (
        <>
          <input ref={inputRef}></input>
          <button onClick={handleClick}>Save</button>
        </>
      )}
    </div>
  );
}

export default App;
