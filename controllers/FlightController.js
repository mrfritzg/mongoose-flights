// Load the Flight model
const Flights = require('../models/Flights')

// Index Route
module.exports.index = async (req, res) => {
   
    try {
        // Use the fruit model to interact with the database
        // find will get all documents from the fruit collection
        const results = await Flights.find().sort({departs:1}) 
        // console.log(results)

        // Looks in the views folder for "Index" and passes { results } data to the view (kind of like a server props object)
        res.render('Index', { results })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}
// /new Route
module.exports.new = (req, res) => {
    //create an in-memory flight like this:
    const newFlight = new Flights();
	// Obtain the default date
    console.log(newFlight)
	const dt = newFlight.departs;
	// Format the date for the value attribute of the input
    console.log(dt)
	const departsDate = dt.toISOString().slice(0, 16);
	res.render('new', {departsDate});
}


// POST /flights
module.exports.create = async  (req, res) => {
    // console.log('POST /flights')
    
    try {
        // use the model to interact with db and create a new document in the fruit collection
        // res.send(req.body)
         const result = await Flights.create(req.body)
         res.redirect('/flights')
        console.log(result)
    } catch(err) {
        console.log(err)
    }
    //old way for array
    // fruits.push(req.body)
   
}
//show Route
module.exports.show = async (req, res) => {
    try {
      const flight = await Flights.findById(req.params.id);
      res.render("Show", { flight });
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  };



  //DESTINATION CONTROLLERS

  module.exports.createDestination = async (req, res) => {
    // create a destination by updating the desinations property in flights
    await Flights.findByIdAndUpdate(req.params.id, {
        // push the req.body to the comments property/field of this flights document
        $push: {
            destinations: req.body
        }
    })

    res.redirect(`/flights/${req.params.id}`)
}