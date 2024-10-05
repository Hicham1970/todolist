export default function AfficherName({ LastName }) {
  console.log(LastName);
  return <h1>Hello Hicham {LastName}</h1>;
}

// Props with Class:

/*import { Component } from "react";

export default class HelloWorld extends Component {
  render() {
    console.log(this);
    return <h1> Hello Garoum {this.props.Name} </h1>;
  }
}
*/
