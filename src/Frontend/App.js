import React from "react";
import "./App.css";
import RidingForecast  from "./RidingForecast";
import CurrentForecast from "./CurrentForecast";


function App() {
  return (
    <div className="App">
      <CurrentForecast />
      <RidingForecast />
    </div>
  );
}


export default App;
