import React from "react";

class TextCopy extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  copyText = () => {
    this.ref.current.select();
    document.execCommand("copy");
  };

  render() {
    return (
      <div>
        <textarea ref={this.ref} type="text" name="copy" id="copy">
          {" "}
        </textarea>
        <div>
          <button onClick={this.copyText}>Copy</button>
        </div>
      </div>
    );
  }
}

export default TextCopy;
