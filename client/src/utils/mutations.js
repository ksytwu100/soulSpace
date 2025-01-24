import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
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
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_CAR = gql`
  mutation saveCar($carData: CarInput!) {
    saveCar(carData: $carData) {
      _id
      username
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

export const REMOVE_CAR = gql`
  mutation removeCar($carId: ID!) {
    removeCar(carId: $carId) {
      _id
      username
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
