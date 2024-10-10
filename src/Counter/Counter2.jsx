// Class Component

import { Component } from "react";

export default class Counter2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Counter: 0,
      date: undefined,
    };
    console.log("Salut je suis le constructor");
  }
  incrementUp = () => {
    this.setState((prevState) => ({ Counter: prevState.Counter + 1 }));
  };
  incrementDown = () => {
    this.setState((prevState) => ({ Counter: prevState.Counter - 1 }));
  };
  // Component LifeCycle:
  componentDidMount() {
    // fetch an Api
    console.log("component Mounted");
  }
  // Si le counter change on donne une alert
  componentDidUpdate(prevProps, prevState) {
    if (prevState.Counter !== this.state.Counter) {
      console.log("Counter updated");
      // alert("Counter updated");
      console.log(prevState, this.state);
    }
  }

  ResetIncrement = () => {
    this.setState(() => ({ Counter: 0 }));
  };
  render() {
    console.log("component rendered");
    return (
      <div className="container">
        <h1>Il y'a {this.state.Counter} secondes</h1>
        <span>
          <button onClick={this.incrementUp}>UP</button>
          <button onClick={this.incrementDown}>Down</button>
          <button onClick={this.ResetIncrement}>Rest</button>
        </span>
      </div>
    );
  }
}
