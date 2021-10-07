import React from "react";
import "./App.css";
import RidingForecast  from "./RidingForecast";
import CurrentForecast from "./CurrentForecast";

// import Amplify, { API, graphqlOperation } from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);


function App() {
  return (
    <div className="App">
      <CurrentForecast />
      <RidingForecast />
    </div>
  );
}


export default App;
