const { gql } = require('graphql-request')

const GET_USER = gql`
    query ($identifier: String!){
        findUserByIdentifier(identifier: $identifier){
            _id
            identifier
        }
    }
`

const CREATE_USER = gql`
    mutation ($identifier: String!){
        createUser(data:{identifier:$identifier}){
            _id
            identifier
        }
    }
`
module.exports = {GET_USER, CREATE_USER}