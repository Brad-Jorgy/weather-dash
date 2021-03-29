import React from "react";
import "./Grid";
import "./App.css";
import { Grid } from "./Grid";
import { Row } from "./Grid";
import { Col } from "./Grid";
import TransBack from "./transpartComp";


function Temp(props) { 
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
                <div className="TempStyles">{"High: 72"}</div>
                <div className="TempStyles">{"Low:  32"}</div>
              </Col>  
              <Col size={1}>
                <div> <img url="https://api.weather.gov/icons/land/night/bkn/snow,30?size=medium" alt="sun" width="100%" height="100%"></img></div>
              </Col>
            </Row>
            <Row>   
              <Col size={1}>
                <div className="TempStyles">{"Best time to ride: "}</div>
                <div className="TempStyles">{"Time of High: "}</div>
                <div className="TempStyles">{"Time of Low: "}</div>
                <div className="TempStyles">{"Time of Rain: 3 am" + " To " + "4 pm"}</div>
              </Col>
            </Row>
          </Grid>
        </TransBack>
      );
}

export default Temp;
