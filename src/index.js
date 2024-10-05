import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AfficherName from "./Hello/props";
import TextField from "./Hello/TextField";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AfficherName LastName="Garoum" />
    <TextField inputName="FirstName" inputLabel="First Name : " />
    <TextField inputName="LastName" inputLabel="Last Name : " />
    <div>Veuillez remplir ce formulaire</div>
  </React.StrictMode>
);
