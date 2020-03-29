import React, { Component } from "react";
class App extends Component {
  state = { otherNumber: 5 }; //Inicializamos el estado
  render() {
    const { number, name } = this.props; //Destructuramos las props
    return (
      <h1>
        Class Component. prop number = {number}, prop name = {name}, state{" "}
        {this.state.otherNumber}
      </h1>
    );
  }
}

export default App;
