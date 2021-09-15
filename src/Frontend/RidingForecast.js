import React, { useEffect, useState }  from "react";
import "./Grid";
import "./App.css";
import { Grid } from "./Grid";
import { Row } from "./Grid";
import { Col } from "./Grid";
import { dataGrab } from "../DataProcessing/dataGrab";
import TransBack from "./transpartComp";


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
    var i = 1;
     
    if(periods[i].isDaytime == true) {
       forecast = periods[i];
       console.log(forecast);
    } else {
      i++;
    }
    //forecastAlgo(periods);
    console.log(periods);
    console.log(forecast);

    

    // function forecastAlgo(periods) {
    //   var i = 1;
     
    //   if(periods[i].isDaytime == true) {
    //      forecast = periods[i];
    //      console.log(forecast);
    //   } else {
    //     i++;
    //   }
    // }

    var rideStats = {
      // bestTimeOfDay: periods[] 
      high: forecast.temperature
      // low: 
      // adverse: 
      // imageUrl: 
    };

    setRideStats(rideStats);
    setRan(1);
  }, [ran]);
  
      return (
        <TransBack>
          <Grid>
            <Row>   
              <Col size={1}>
                <div className="TempStyles">Best time to ride: {}</div>
                <div className="TempStyles">Time of High: {rideStats.high}</div>
                <div className="TempStyles">Time of Low: {}</div>
                <div className="TempStyles">Time of Adverse Weather: {}</div>
                <button className="saveDataButton">  Save Forecast  </button>
              </Col>
              <Col size={1} className="centerJust">
                <div className="weatherIcon">
                <img
                  src="https://api.weather.gov/icons/land/night/bkn/snow,30?size=medium"  
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
