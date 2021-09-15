const request = require("superagent");
const fetch = require("superagent");

async function postData(url) {
  return fetch
    .get(url)
    .set("User-Agent", "weatherDash/brad.taylor.jorgensen@gmail.com")
    .set("Accept", "application/vnd.noaa.dwml+json;version=1")
    .send();
}

async function dataGrab() {
  try {
    const data = await postData(
      //"https://api.weather.gov/points/39.7456,-97.0892"
      "https://api.weather.gov/gridpoints/SLC/106,146/forecast/"
    );

    return cleanData(data);
  } catch (error) {
    console.log(error);
  }
}

function cleanData(data) {
  var date = new Date();
  let periods = [];

  for (var i = 0; i <= 14; i++) {
    periods.push(data.body.properties.periods[i]);
  }

  return periods;
}

module.exports.dataGrab = dataGrab;
