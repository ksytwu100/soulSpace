const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    carCount: Int
    savedCars: [Car]
  }

  type Car {
    carId: ID
    title: String
    value: String
    year: String
    description: String
    image: String
  }

  type Auth {
    token: String
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveCar(carData: CarInput!): User
    removeCar(carId: ID!): User
  }

  input CarInput {
    carId: ID!
    title: String!
    value: String!
    year: String!
    description: String!
    image: String!
  }
`;

module.exports = typeDefs;
