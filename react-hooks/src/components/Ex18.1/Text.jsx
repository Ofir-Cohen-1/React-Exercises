import React, { useState } from "react";

function Text({ textLength, text }) {
  const [isHidden, setIsHidden] = useState(true);

  const handleToggle = () => {
    setIsHidden((prev) => !prev);
  };

  const insertText = () => {
    return (
      <p>
        {isHidden ? text.substring(0, textLength) : text}
        <span
          onClick={handleToggle}
          style={{ color: "blue", fontWeight: "bold", cursor: "pointer" }}
        >
          {isHidden ? " show more" : " show less"}
        </span>
      </p>
    );
  };
  return <div>{insertText()}</div>;
}

export default Text;
