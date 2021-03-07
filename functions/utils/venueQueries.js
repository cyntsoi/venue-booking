const { gql } = require('graphql-request')

const GET_ALL_VENUES = gql`
query{
  allVenues{
    data{
      _id
      name
    }
  }
}
`

const CREATE_VENUES = gql`
mutation ($name:String!){
  createVenue(data:{name:$name}){
    _id
    name
  }
}
`
module.exports = {GET_ALL_VENUES, CREATE_VENUES}