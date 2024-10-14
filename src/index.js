import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import FruitsList from "./Fruits/FruitsList";
// import AfficherName from "./Hello/props";
// import TextField from "./Forms/TextField";
// import Fruits from "./Fruits/Fruits";
// import Counter from "./Counter/Counter";
// import Event from "./Events/Event";
// import Form from "./Forms/Form";
import Counter2 from "./Counter/Counter2";
// import HelloWorld from "./Hello/helloworld";
// import ToggleName from "./Toggles/ToggleName";
// import Header from "./ComponentLifecycle/Header";
// import Header2 from "./ComponentLifecycle/componentDidMount";
// import Header3 from "./ComponentLifecycle/getDerivedStateFromProps";
// import Header4 from "./ComponentLifecycle/shouldComponentUpdate";
// import Header5 from "./ComponentLifecycle/getSnapshotBeforeUpdate";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const fruitsArray = [];
root.render(
  <>
    {/* <AfficherName LastName="Garoum" />
    <TextField inputName="FirstName" inputLabel="First Name : ">
      Veuillez insérer votre Nom!
    </TextField>
    <TextField inputName="LastName" inputLabel="Last Name : ">
      Veuillez insérer votre Prénom!
    </TextField>
    <Fruits fruits={fruitsArray} />
    <Counter initialValue={2} step={2} />
    <br></br>
    <Form />
    // <Event /> */}
    <Counter2 />
    {/* <HelloWorld lastName={"Garoum"} /> */}
    {/* <ToggleName /> */}
    {/* <Header2 /> */}
    {/* <Header3 favCol={"black"} /> */}
    {/* <Header4 /> */}
    {/* <Header5 /> */}
  </>
);
