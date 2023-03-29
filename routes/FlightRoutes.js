const express = require('express')

// Creates our router
const router = express.Router()

const FlightController = require('../controllers/FlightController')

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

//new Index Route
router.get('/', FlightController.index)

// Setup a "new" route for creating fruit
router.get('/new', FlightController.new)

// Setup a "new" route for creating fruit
// router.get('/new2', FlightController.new2)

//setup a "Create" route for Posts to create new flight inforation
router.post('/', FlightController.create)


//setup a "Create" route for Posts to create new flight inforation
router.get('/:id', FlightController.show)

module.exports = router;


// DESTINATION ROUTES 

//create a destination
router.post('/:id/destinations', FlightController.createDestination)


