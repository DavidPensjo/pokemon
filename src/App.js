import { useState } from "react";
import "./App.css";
import PokemonApp from "./comp/PokemonApp";

function App() {
  let [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>show</button>
      {show && <PokemonApp />}
    </div>
  );
}

export default App;

