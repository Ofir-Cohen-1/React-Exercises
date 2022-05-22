import React from "react";
import ActiveBtn from "./ActiveBtn";
import Select from "./CategorySelect";
import Chucknorris from "./api/Chucknorris";

class ChuckNorris extends React.Component {
  state = { categories: [], selectedCat: "all", currentJoke: "" };

  getRandomJoke = async () => {
    let joke;
    if (this.state.selectedCat === "all") {
      joke = await Chucknorris.get("/jokes/random");
    } else {
      joke = await Chucknorris.get(
        `/jokes/random?category=${this.state.selectedCat}`
      );
    }
    // console.log(joke);
    this.setState({ currentJoke: joke.data.value });
  };

  getSelectedCategory = (value) => {
    this.setState({ selectedCat: value });
  };

  componentDidMount = async () => {
    const categories = await Chucknorris.get("/jokes/categories");
    this.setState({ categories: categories.data });
    // console.log(categories);
  };

  render() {
    return (
      <div className="mainContainer">
        <div className="randomJokeContainer">
          <h1>Click the button to start laughing</h1>
          <div className="btn-select">
            <ActiveBtn
              text="Get Joke"
              callBackFunc={this.getRandomJoke}
            />
            <Select
              categories={this.state.categories}
              getSelectedCategory={this.getSelectedCategory}
            />
          </div>
          <p className="randomJoke">{this.state.currentJoke}</p>
        </div>
      </div>
    );
  }
}

export default ChuckNorris;
