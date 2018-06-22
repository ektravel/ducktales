import React, { Component } from "react";
import DucktalesCard from "./components/DucktalesCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ducktales from "./ducktales.json";
import './App.css';

class App extends Component {
  //Setting this.state.ducktales to the ducktales json array
  state = {
    ducktales,
    score: 0,
    topscore: 0
  };

clickDuck = id = => {

}

//Map over this.state.ducktales and render a DucktalesCard component for each duck object
  render() {
    return (
      <Wrapper>
        <Title>Ducktales Click Game </Title>
        {this.state.ducktales.map(duck => (
          <DucktalesCard
          clickDuck = {this.clickDuck}
          id = {ducktales.id}
          name = {ducktales.name}
          image = {ducktales.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
