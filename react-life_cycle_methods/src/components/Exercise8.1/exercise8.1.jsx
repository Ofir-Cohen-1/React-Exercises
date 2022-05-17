import React from "react";

export default class favoriteColor extends React.Component {
  state = { favoriteColor: "blue" };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "green" });
    }, 1000);
  }

  componentDidUpdate() {
    document.querySelector(
      "#something"
    ).textContent = `The updated favorite color is ${this.state.favoriteColor}`;
  }

  render() {
    return (
      <div className="container">
        <h1 className="text">{`my favorite color is: ${this.state.favoriteColor}`}</h1>
        <div id="something"></div>
      </div>
    );
  }
}
