// Load mongoose
const mongoose = require('mongoose')

// Pointing to the schema property (shortcut) (Schema is a class)
const Schema = mongoose.Schema

//take the current date , plus 1 year in milliseconds -- (1000*60*60*24*365)
let nextyearDate = Date.now() + (1000 * 60 * 60 * 24 * 365);
//format it and place it in a new variable
let nextyearDateFormat = new Date(nextyearDate).toDateString();


const destinationSchema = new Schema({
    airport: { type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'] },
    arrival: { type: Date }
})



// Instantiate a new Schema object for fruit and structure our data
const flightSchema = new Schema({
    airline: {
        // expecting the "name" property to be a string
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: { type: Date, default: nextyearDateFormat },
    airport: { type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'], default: 'SAN' },
    destinations: {
        type: [destinationSchema]
    }
})

// create our model using our fruitSchema and give our collection a name of "flights"
const Flights = mongoose.model('flightboard', flightSchema)

// exporting the Fruit model as a module
module.exports = Flights;