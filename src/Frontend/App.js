import React from "react";
import "./App.css";
import Temp  from "./Temp";
import CurrentForecast from "./CurrentForecast";


function App() {
  return (
    <div className="App">
      <CurrentForecast />
      <Temp />
    </div>
  );
}


export default App;
