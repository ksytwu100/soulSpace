import { gql } from '@apollo/client';

// Define the SAVE_CAR mutation
export const SAVE_CAR = gql`
  mutation SaveCar($carData: CarInput!) {
    saveCar(carData: $carData) {
      _id
      savedCars {
        carId
        title
        value
        year
        description
        image
      }
    }
  }
`;

// Define the REMOVE_CAR mutation
export const REMOVE_CAR = gql`
  mutation RemoveCar($carId: ID!) {
    removeCar(carId: $carId) {
      _id
      savedCars {
        carId
        title
        value
        year
        description
        image
      }
    }
  }
`;