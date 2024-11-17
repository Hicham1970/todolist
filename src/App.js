import "./App.css";
import Counter from "./Counter/Counter";

export default function App() {
  return (
    <div className="App">
      <Counter initialValue={2} step={2} />
    </div>
  );
}

// export default App;
