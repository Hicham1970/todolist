import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AfficherName from "./Hello/props";
import TextField from "./Forms/TextField";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AfficherName LastName="Garoum" />
    <TextField inputName="FirstName" inputLabel="First Name : ">
      Veuillez insérer votre Nom!
    </TextField>
    <TextField inputName="LastName" inputLabel="Last Name : ">
      Veuillez insérer votre Prénom!
    </TextField>
  </>
);
