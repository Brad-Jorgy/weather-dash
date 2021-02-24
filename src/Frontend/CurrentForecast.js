import React, { useEffect, useState } from 'react';
import "./Grid";
import "./App.css";
import { Grid } from "./Grid";
import { Row } from "./Grid";
import { Col } from "./Grid";
import { dataGrab } from "../DataProcessing/dataGrab";


function CurrentForecast()  {

  const [currentForecast, setCurForcast] = useState({timeOfDay: "", timeOfDay: "", temp: 0, windDirect: "", windSpeed: 0, imageUrl: ""});
  
  
 useEffect( () => {
  const forcast = dataGrab();
  setCurForcast(forcast);
 });

      return (
        <div>
          <Grid>
            <Row>
              <Col size={1}>
                <div className="TempStyles">{currentForecast.timeOfDay}</div>
                <div className="TempStyles">{"Temp"}</div>
                <div className="TempStyles">{"Wind Direction "}</div>
                <div className="TempStyles">{"Wind Speed "}</div>
              </Col>  
              <Col size={1}>
                <div> <img url="https://api.weather.gov/icons/land/night/bkn/snow,30?size=medium" alt="sun" width="100%" height="100%"></img></div>
              </Col>
            </Row>
          </Grid>
        </div>
      );
}   

export default CurrentForecast;
