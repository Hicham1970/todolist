// export default function AfficherName({ LastName }) {
//   const age = 15;

//   return (
//     <h1>
//       Hello Hicham {LastName} {age >= 18 ? "Majeur" : "Mineur"}.
//     </h1>
//   );
// }

// Props with Class:

import { Component } from "react";

export default class HelloWorld extends Component {
  age = 22;
  render() {
    console.log(this);
    return (
      <h1>
        {" "}
        Hello Garoum {this.props.Name} {this.age >= 18 ? "Majeur" : "Mineur"}
      </h1>
    );
  }
}
