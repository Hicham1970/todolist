// Component type Function

// export default function HelloWorld() {
//   return <h1> Hello World</h1>;
// }

// Component type Class, ici on écris bcp de code, la 1ere method est la plus sûr

import { Component } from "react";

export default class HelloWorld extends Component {
  render() {
    return <h1> Hello Hicham </h1>;
  }
}