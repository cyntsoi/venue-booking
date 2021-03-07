const { GraphQLClient,request } = require('graphql-request')

const graphQLClient = new GraphQLClient("https://graphql.fauna.com/graphql",{
    headers:{
        authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`
    }
})

module.exports = async (query, variables = {}) => await graphQLClient.request(query , variables)