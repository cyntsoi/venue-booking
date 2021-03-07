exports.handler = async function(event) {
    if (event.httpMethod !== "GET"){
        return {
            statusCode: 500,
            body: JSON.stringify({message: "Method not supported."})
        }
    }
   return {
       statusCode: 200,
       body: JSON.stringify({message: "Hello World~"})
   }
}