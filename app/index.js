const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const config = require('../configs')
const paths = require('../configs/paths')
const routes = require('./api')

// Set up the express app
const app = express()

app.use(cors())

// Log requests to the console.
app.use(logger('dev'))

// Parse incoming requests data.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Set up the routes for the static assets.
app.use(express.static(paths.staticEntry))

// mongoose and mongo connection
const { mongoose } = require('./db/mongoose')
mongoose.set('bufferCommands', false) // don't buffer db requests if the db server isn't connected - minimizes http requests hanging if this is the case.

// Add APIs
routes.registerRoutes(app)

app.listen(config.port, () => {
    console.log(
        `[${new Date()
            .toISOString()
            .substr(11, 8)}] 🚀 Server started on port ${config.port}.`
    )
})
