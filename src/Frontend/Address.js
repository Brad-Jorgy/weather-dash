import React, { useEffect, useState } from "react";
import "./Grid";
import "./App.css";
import { Grid } from "./Grid";
import { Row } from "./Grid";
import { Col } from "./Grid";
import { dataGrab } from "../DataProcessing/dataGrab"; 
import TransBack from "./transpartComp";

function Address() { 
  const [addressInput, setCurForcast] = useState({
    street: "",
    city: "",
    county: "",
    state: "",
    country: "",
    zip: "",
  });

  const [ran, setRan] = useState(1);

  useEffect(async () => {
    const periods = await dataGrab();

    var addressInput = {
    street: "",
    city: "",
    county: "",
    state: "",
    country: "",
    zip: "",
    };

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

export default Address;
