import React, { useEffect, useState } from "react";
import "./Grid";
import "./App.css";
import { Grid } from "./Grid";
import { Row } from "./Grid";
import { Col } from "./Grid";
import { dataGrab } from "../DataProcessing/dataGrab";
import TransBack from "./transpartComp";

function CurrentForecast() {
  const [currentForecast, setCurForcast] = useState({
    timeOfDay: "",
    temp: 0,
    windDirect: "",
    windSpeed: 0,
    imageUrl: "",
    shortForecast: "",
  });
  const [ran, setRan] = useState(1);

  useEffect(async () => {
    const periods = await dataGrab();

    var currentForecast = {
      timeOfDay: periods[0].name,
      temp: periods[0].temperature,
      windDirect: periods[0].windDirection,
      windSpeed: periods[0].windSpeed,
      imageUrl: periods[0].icon,
      shortForecast: periods[0].shortForecast,
    };
  
    console.log(currentForecast); //clean

    setCurForcast(currentForecast);
    setRan(1);
  }, [ran]);

  return (
    <TransBack>
      <Grid>
        <Row>
          <Col size={1}>
            <div className="TempStyles">{currentForecast.timeOfDay}</div>
            <div className="TempStyles">Temp: {currentForecast.temp}</div>
            <div className="TempStyles">Precipitation: {currentForecast.shortForecast}</div>
            <div className="TempStyles">
              Wind Direction: {currentForecast.windDirect}
            </div>
            <div className="TempStyles">
              Wind Speed: {currentForecast.windSpeed}
            </div>
            
          </Col>
          <Col size={1} className="centerJust">
            <div className="weatherIcon">
              <img
                src={currentForecast.imageUrl}    
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

export default CurrentForecast;
