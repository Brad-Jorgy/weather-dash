/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSaveForecast = /* GraphQL */ `
  query GetSaveForecast($id: ID!) {
    getSaveForecast(id: $id) {
      id
      high
      shortForecast
      windDirection
      windSpeed
      bestTimeToRide
      createdAt
      updatedAt
    }
  }
`;
export const listSaveForecasts = /* GraphQL */ `
  query ListSaveForecasts(
    $filter: ModelSaveForecastFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSaveForecasts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        high
        shortForecast
        windDirection
        windSpeed
        bestTimeToRide
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
