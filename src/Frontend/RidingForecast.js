import React, { useEffect, useState } from "react";
import "./Grid";
import "./App.css";
import { Grid } from "./Grid";
import { Row } from "./Grid";
import { Col } from "./Grid";
import { dataGrab } from "../DataProcessing/dataGrab";
import TransBack from "./transpartComp";
import { API, graphqlOperation } from 'aws-amplify';
import { createSaveForecast} from './graphql/mutations';

// todo = { name: "My first todo", description: "Hello world!" };

async function SubmitForecast(rideStats) {
  console.log('Yes');
  const yes = await API.graphql(graphqlOperation(createSaveForecast, {input: rideStats}));
}

function RidingForecast() {
  const [rideStats, setRideStats] = useState({
    bestTimeOfDay: "",
    high: 0,
    low: 0,
    timeIfWeather: "",
    imageUrl: "",
  });

  const [ran, setRan] = useState(1);

  useEffect(async () => {
    const periods = await dataGrab();

    var forecast = [];
    var BradsSuggestions = []; 

    forecastAlgo(periods);
    //console.log(periods);  //clean
    bradsSuggestion(forecast);

    function forecastAlgo(periods) {
      var i = 1;
      while (i < 5) {
        if (periods[i].isDaytime == true) {
          forecast = periods[i];
          
          //console.log(forecast);  //clean
          break;
        }
        i++;
      }
    }

    function bradsSuggestion(forecast) {
      if (forecast.temperature >= 75){
        BradsSuggestions['Time'] = "Morning or Evening";
      } else if (forecast.temperature <= 74 ||  forecast.temperature >=45){
        BradsSuggestions['Time'] = "Midday";
      } else if (forecast.temperature <= 45){
        BradsSuggestions['Time'] = "Midday, Dress Warm";
      }  
    }

    

    var rideStats = {
      day: forecast.name,
      high: forecast.temperature,
      imageUrl: forecast.icon,
      shortForecast: forecast.shortForecast,
      windDirection: forecast.windDirection,
      windSpeed: forecast.windSpeed,
      bestTime: BradsSuggestions.Time
    };

    setRideStats(rideStats);
    setRan(1);
  }, [ran]);

  return (
    <TransBack>
      <Grid>
        <Row>
          <Col size={1}>
            <div className="headings">{rideStats.day}</div>
            <div className="TempStyles">High: {rideStats.high}</div>
            <div className="TempStyles">{rideStats.shortForecast}</div>
            <div className="TempStyles">Wind Direction: {rideStats.windDirection}</div>
            <div className="TempStyles">Wind Speed: {rideStats.windSpeed}</div>
            <div className="headings">Brad's Suggestion</div>
            <div className="TempStyles">Best Time to Ride: {rideStats.bestTime}</div>
            <button onClick={SubmitForecast(rideStats)} className="saveDataButton"> Save Forecast </button>
          </Col>
          <Col size={1} className="centerJust">
            <div className="weatherIcon">
              <img
                src={rideStats.imageUrl}
                alt="sun"
                width="130px"
                height="130px"
                margin="auto"
                display="block"
              ></img>
            </div>
          </Col>
        </Row>
      </Grid>
    </TransBack>
  );
}

export default RidingForecast;
