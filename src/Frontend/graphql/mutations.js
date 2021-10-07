/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSaveForecast = /* GraphQL */ `
  mutation CreateSaveForecast(
    $input: CreateSaveForecastInput!
    $condition: ModelSaveForecastConditionInput
  ) {
    createSaveForecast(input: $input, condition: $condition) {
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
export const updateSaveForecast = /* GraphQL */ `
  mutation UpdateSaveForecast(
    $input: UpdateSaveForecastInput!
    $condition: ModelSaveForecastConditionInput
  ) {
    updateSaveForecast(input: $input, condition: $condition) {
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
export const deleteSaveForecast = /* GraphQL */ `
  mutation DeleteSaveForecast(
    $input: DeleteSaveForecastInput!
    $condition: ModelSaveForecastConditionInput
  ) {
    deleteSaveForecast(input: $input, condition: $condition) {
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
