import React, { Component } from "react";
class App extends Component {
  state = { number: this.props.number }; //Inicializamos el estado

  handleIncrement = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  handleReset = () => {
    this.setState({
      number: 0
    });
  };

  render() {
    return (
      <>
        <h1>Number state: {this.state.number}</h1>
        <button onClick={this.handleIncrement}>Incrementar state</button>
        <button onClick={this.handleDecrement}>Decrementar state</button>
        <button onClick={this.handleReset}>Resetear state</button>
      </>
    );
  }
}

//Con esto hacemos que si la prop no viene, se pone una por defecto para problemas
App.defaultProps = {
  number: 0
};

export default App;
