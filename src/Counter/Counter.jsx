import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Counter: 0,
      date: undefined,
    };
  }
  incrementUp = () => {
    this.setState((prevState) => ({ Counter: prevState.Counter + 1 }));
  };
  incrementDown = () => {
    this.setState((prevState) => ({ Counter: prevState.Counter - 1 }));
  };
  ResetIncrement = () => {
    this.setState(() => ({ Counter: 0 }));
  };
  render() {
    return (
      <>
        <div>Il y'a {this.state.Counter} secondes</div>
        <br></br>
        <button onClick={this.incrementUp}>UP</button>
        <br></br>
        <button onClick={this.incrementDown}>Down</button>
        <br></br>
        <button onClick={this.ResetIncrement}>Rest</button>
      </>
    );
  }
}
