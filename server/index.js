const Express = require('express')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const app = Express();
app.use(cors())
app.use(bodyParser.json())

const CONNECTION_STRING = "mongodb+srv://anthonyajami:zMYRPyQqV7Iwzw3T@cluster0.04rexna.mongodb.net/?retryWrites=true&w=majority"
const DATABASE_NAME =  'portfolio-app'
var database;

const SECRET_KEY = 'secret_key'

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

// Authentication Endpoints

app.post("/api/login", async (request, response) => {
  const { username, password } = request.body

  try {
    const user = await database.collection("users").findOne({username, password})
    
    if (user) {
      const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' })
      response.json({token})
    } else {
      response.status(401).json({ error: "Invalid credentials" })
    }
  } catch (error) {
    console.error("Error during login")
  }
})
