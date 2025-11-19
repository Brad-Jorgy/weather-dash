import React, { useEffect, useState } from "react";
import "./Grid";
import "./App.css";
import { Grid } from "./Grid";
import { Row } from "./Grid";
import { Col } from "./Grid";
import { dataGrab } from "../DataProcessing/dataGrab"; 
import TransBack from "./transpartComp";

function Address() { 
  const [addressInput, setAddressInput] = useState({
    street: "",
    city: "",
    county: "",
    state: "",
    country: "",
    zip: "",
  });

  const [ran, setRan] = useState(1);

  useEffect(async () => {

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
            <div className="TempStyles">
              <input>
                type="Street"
                value={addressInput.street}
                onChange={handleChange}
              </input>
            </div>
            <div className="TempStyles">
                     <input>
                type="City"
                value={addressInput.city}
                onChange={handleChange}
              </input>
            </div>
            <div className="TempStyles">
              <input>
                type="County"
                value={addressInput.county}
                onChange={handleChange}
              </input>
            </div>
            <div className="TempStyles">
              <input>
                type="State"
                value={addressInput.state}
                onChange={handleChange}
              </input>
            </div>
            <div className="TempStyles">
              <input>
                type="Country"
                value={addressInput.country}
                onChange={handleChange}
              </input>
            </div>
            <div className="TempStyles">
              <input>
                type="Zip"
                value={addressInput.zip}
                onChange={handleChange}
              </input>
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
