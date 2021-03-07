const sendQuery = require('./utils/sendQuery')
const {GET_ALL_VENUES} = require ('./queries/venue')
const formatResponse = require('./utils/formatResponse')

exports.handler = async () => {
    try{
        const {allVenues: {data}} = await sendQuery(GET_ALL_VENUES)
        return formatResponse(200, data)
    }catch(e){
        console.error(e)
        return formatResponse(500, {message: "something went wrong, too bad!"})
    }
}