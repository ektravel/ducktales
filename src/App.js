import React, { Component } from "react";
import DucktalesCard from "./components/DucktalesCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import ducktales from "./ducktales.json";
import './App.css';

class App extends Component {
  //Setting this.state.ducktales to the ducktales json array
  state = {
    message: "Click any image to begin.",
    ducktales,
    score: 0,
    topscore: 0
  };

//clickDuck function increases this.state.score by 1
clickDuck = id => {
  //setState method is used to update a component's state
  this.state.score = this.state.score + 1;
  const updatedState = this.state;


  this.setState({ updatedState });
  //this.setState({score: this.state.score + 1});

  //if the same card is clicked twice, set the score back to 0

  //after each reset, update the topscore if the number is higher than before
};

//Map over this.state.ducktales and render a DucktalesCard component for each duck object
render() {
  return (
    <div className = "container">
    <Navbar/>
      <Wrapper>
        <Title>Ducktales Click Game </Title>
        {this.state.ducktales.map(duck => (
          <DucktalesCard
          clickDuck = {this.clickDuck}
          id = {duck.id}
          key = {duck.id}
          name = {duck.name}
          image = {duck.image}
          />
        ))}
      </Wrapper>
    </div>
    );
  }
}

export default App;
