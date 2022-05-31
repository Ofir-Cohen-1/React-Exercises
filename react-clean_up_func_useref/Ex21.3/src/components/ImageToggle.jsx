import React, { useEffect, useRef } from "react";

function App() {
  const imgRef = useRef();
  const imgRef2 = useRef();

  useEffect(() => {
    imgRef.current.src = require("../assets/images/img-bw.jfif");
    console.log(imgRef.current);

    imgRef2.current.src = require("../assets/images/img-bw.jfif");
    console.log(imgRef2.current);
  }, []);

  const toggleImg = (chose) => {
    imgRef.current.src = require(`../assets/images/img-${chose}.jfif`);
  };

  const toggleImg2 = (chose) => {
    imgRef2.current.src = require(`../assets/images/img-${chose}.jfif`);
  };

  return (
    <div>
      <img
        ref={imgRef}
        alt={"1"}
        style={{ height: 200, padding: 10 }}
        onMouseEnter={() => toggleImg("clr")}
        onMouseLeave={() => toggleImg("bw")}
      />
      <img
        ref={imgRef2}
        alt={"2"}
        style={{ height: 200, padding: 10 }}
        onMouseEnter={() => toggleImg2("clr")}
        onMouseLeave={() => toggleImg2("bw")}
      />
    </div>
  );
}

export default App;
