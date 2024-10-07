import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AfficherName from "./Hello/props";
import TextField from "./Forms/TextField";
import Fruits from "./Fruits/Fruits";
import Counter from "./Counter/Counter";
import Event from "./Events/Event";

const root = ReactDOM.createRoot(document.getElementById("root"));
const fruitsArray = ["Strawberry", "Apple", "Lemon", "Watermelon", "Oranges"];
root.render(
  <>
    <AfficherName LastName="Garoum" />
    <TextField inputName="FirstName" inputLabel="First Name : ">
      Veuillez insérer votre Nom!
    </TextField>
    <TextField inputName="LastName" inputLabel="Last Name : ">
      Veuillez insérer votre Prénom!
    </TextField>
    <Fruits fruits={fruitsArray} />
    <Counter />
    <br></br>
    <Event />
  </>
);
