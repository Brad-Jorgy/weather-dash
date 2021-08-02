import React, { useEffect, useState }  from "react";
import "./Grid";
import "./App.css";
import { Grid } from "./Grid";
import { Row } from "./Grid";
import { Col } from "./Grid";
//import { rideStats } from "../DataProcessing/rideStats";
import { dataGrab } from "../DataProcessing/dataGrab";
import TransBack from "./transpartComp";


function Temp() { 
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

    var RideStats = {
      bestTimeOfDay: periods[] 
      
    };

    
    //setRideStats(rideStats);
    setRan(1);
  }, [ran]);
  
      return (
        <TransBack>
          <Grid>
            <Row>   
              <Col size={1}>
                <div className="TempStyles">Best time to ride: {}</div>
                <div className="TempStyles">Time of High: {}</div>
                <div className="TempStyles">Time of Low: {}</div>
                <div className="TempStyles">Time of Adverse Weather{}</div>
              </Col>
              <Col size={1}>
                <div> <img url="https://api.weather.gov/icons/land/night/bkn/snow,30?size=medium" alt="sun" width="100%" height="100%"></img></div>
              </Col>
            </Row>
          </Grid>
        </TransBack>
      );
}

export default Temp;
