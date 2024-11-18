import { useState } from "react";
export default function Form2() {
  // por récupérer le nom et l'age :
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [acceptChange, setAcceptChange] = useState(false);
  const handleNameInputChange = () => {
    const name = document.getElementById("name").value;
    setInputName(name);
    console.log(name, inputName);
  };
  const handleAgeInputChange = () => {
    const age = document.getElementById("age").value;
    setInputAge(age);
    console.log(age, inputAge);
  };
  const handleAcceptChange = () => {
    const accept = document.getElementById("accept").checked;
    setAcceptChange(accept);
    console.log(accept, acceptChange);
  };
  return (
    <div className="container my-5">
      <form>
        <div className="form-group p-2">
          <label>Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="form-control"
            onChange={handleNameInputChange}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="text"
            id="age"
            placeholder="Age"
            className="form-control"
            onChange={handleAgeInputChange}
          />
        </div>
        <div className="form-check my-2">
          <input
            type="checkbox"
            id="accept"
            className="form-check-input"
            onChange={handleAcceptChange}
          />
          <label htmlFor="accept" className="form-check-label">
            Accept our rules
          </label>
        </div>
        <div className="form-group my-4">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}
