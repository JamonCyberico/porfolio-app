const Express = require('express')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient

const app = Express();
app.use(cors())

const CONNECTION_STRING = "mongodb+srv://anthonyajami:zMYRPyQqV7Iwzw3T@cluster0.04rexna.mongodb.net/?retryWrites=true&w=majority"
const DATABASE_NAME =  'portfolio-app'
var database;

app.listen(8080, () => {
  MongoClient.connect(CONNECTION_STRING, (error, client) => {
    if (error) {
      throw error;
    }
    database = client.db(DATABASE_NAME)
    console.log("Connected to " + DATABASE_NAME + " !")
  })
})

app.get("/api/projects", (request, response) => {
  database.collection("projects").find({}).toArray((error, result) => {
    response.send(result)
  })
})

app.post("/api/projects", (request, response) => {
  database.collection("projects").insertOne(request.body, (error, result) => {
    response.send(result)
  })
})
