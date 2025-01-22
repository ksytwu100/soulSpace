const {gql}=require('apollo-server-express');

const typeDefs=gql`
type User{
    _id:ID
    username:String
    email:String
    carCount:Int
    savedCars:[Car]
}
type Car{
    carId:ID
    content:String
    title:String
    image:String
    additional:String
    wr:String
}
type Auth{
    token:String
    user:User
}
type Query{
    me:User
}
type Mutation{
    login(email:String!,password:String!):Auth
    addUser(username:String!,email:String!,password:String!):Auth
    saveCar(carData:CarInput!):User
    removeCar(carId:ID!):User
}
input CarInput{
    carId:ID
    content:String
    title:String
    image:String
    additional:String
    wr:String
}
`;
module.exports=typeDefs;
