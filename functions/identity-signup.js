const sendQuery = require("./utils/sendQuery")
const {CREATE_USER} = require("./queries/user")
const formatResponse = require("./utils/formatResponse")

exports.handler = async (event, context) => {
    const {user} = context.clientContext
    try {
        const data = await sendQuery(CREATE_USER, {identifier: user.id})
        return formatResponse(200, data)
    } catch (e) {
        console.error(e)
        return formatResponse(500, {message: "something went wrong, too bad!"})
    }
}