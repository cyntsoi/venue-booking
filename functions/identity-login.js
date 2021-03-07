const sendQuery = require("./utils/sendQuery")
const {CREATE_USER} = require("./queries/user")
const formatResponse = require("./utils/formatResponse")

exports.handler = async (event) => {

    console.log(JSON.parse(event.body));

     const {user} = JSON.parse(event.body)
    try {
        const data = await sendQuery(CREATE_USER, {identifier: user.id})
        return formatResponse(200, data)
    } catch (e) {
        console.log(e)
        return formatResponse(500, {message: "something went wrong, too bad!"})
    }
    return formatResponse(200, {message:"keep going"})

}