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
    topscore: 0,
    clickedID: []
  };

//function to shuffle the array everytime an item is clicked
shuffleData = data => {
  let i = data.length - 1;
  while (i > 0) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
    i--;
  }
  return data;
};
  
//function to update the topscore
getTopscore = currentScore =>{
  if (currentScore > this.state.topscore)
    return currentScore;
  else
    return this.state.topscore;
};

clickDuck = id => {
//check if it's been clicked on before
  //if it has NOT been clicked before => check to see if all other cards have been clicked =>
      // if YES => they win the game
      //if NO => update the score +1 and re-shuffle the array
  if (this.state.clickedID.indexOf(id) === -1 ){
    let newArray = [...this.state.clickedID];
    let newDucktales = [...this.state.ducktales];
    newArray.push(id);
    //setState method is used to update a component's state
    this.setState({
      score: this.state.score + 1,
      clickedID: newArray,
      ducktales: this.shuffleData(newDucktales), 
      message: "Well done! That was correct!",
      topscore: this.getTopscore(this.state.score)
    })
    
  } else {
    //if it has been clicked before => reset the score and restart the game
    let newDucktales = [...this.state.ducktales];

    //setState method is used to update a component's state
    this.setState({
      score: 0,
      message: "That one has been clicked before! Game over.",
      ducktales: this.shuffleData(newDucktales),
      clickedID: [],
      topscore: this.getTopscore(this.state.score)
    })
  };
};

//Map over this.state.ducktales and render a DucktalesCard component for each duck object
render() {
  return (
    <div>
    <Navbar message = {this.state.message} score = {this.state.score} topscore = {this.state.topscore}/>
      <Wrapper>
        <Title><img src = "./assets/images/gameTR.png"/> </Title>
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
