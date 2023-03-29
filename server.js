//require dotENV
require('dotenv').config();

//Load express
const express = require('express');

const connectDB = require('./config/database')

//create our expess app
const app = express()

const PORT = 8085;

//connect to our database
connectDB();

//Load our Routes
const FlightRoutes = require('./routes/FlightRoutes')

// npm install jsx-view-engine react react-dom
const {createEngine} = require('jsx-view-engine');

// Load the method-override middleware
const methodOverride = require('method-override')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())

// a middleware that formats the form data (currently a string that looks like query params) into a object we can use
app.use(express.urlencoded({ extended: true }))

// hack into our form and give it more HTTP methods (like DELETE and PUT)
app.use(methodOverride('_method'))

// look for static files (like css) in the public folder
app.use(express.static('public'))

// create a custom middleware for logging the HTTP Method and path 
app.use((req, res, next) => {
    console.log('inside middleware')
    console.log(`${req.method} ${req.path}`)
    next()
})

//Connect our fruit routes to our express app
app.use('/flights', FlightRoutes);

app.get('/', (req, res) => {
    res.redirect('/flights')
})

// app.get('/', (req, res) => {
//     res.send('Hello')
// })

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
})