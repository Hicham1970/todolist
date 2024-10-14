// Fonction Component
// import { useState } from "react";
/*export default function Counter({ initialValue, step }) {
  const [count, setCount] = useState(initialValue);
  return (
    <div className="center">
      <span>Il y a {count} secondes</span>
      <br></br>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + step);
        }}
      >
        UP
      </button>
      <br></br>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - step);
        }}
      >
        Down
      </button>
      <br></br>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Rest
      </button>
    </div>
  );
}*/
// Class component
import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Counter: 0,
      date: undefined,
      age: 24,
    };
  }
  /* usage de la fonction shouldComponentUpdate() ex. on a un props age qu'on va utiliser pour une base de données users et on a pas  pas besoin d'afficher ce user, et si cet age change on a pas besoin d'appeler le render():*/
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(nextState, this.state);
    if (nextState.age !== this.state.age) {
      return false;
    }
    return true;
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
