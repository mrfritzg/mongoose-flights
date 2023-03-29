import React from "react";

import DefaultLayout from './layouts/DefaultLayout';

function Show(props) {

    // Sort the list of destinations for a flight by the arrivaldate/time in ascending order.   
    let sortedFlights = props.flight.destinations.sort((dest1, dest2) => (
        (dest1.arrival > dest2.arrival) ? 1 : (dest1.arrival < dest2.arrival) ? -1 : 0));

    //Display all destination airports
    const Airports = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'];
    
    // selected airports from flights & destinations
    const selectedAirports = [props.flight.airport];
    props.flight.destinations.forEach((destination, i) => {
        selectedAirports.push(destination.airport)
    })
    
    //Available destination airports by filtering out all airports from selected airports
    const availableAirports = Airports.filter(airport => (selectedAirports.indexOf(airport) < 0))

    console.log(props)
    console.log(selectedAirports)
    console.log(availableAirports)
    return (

        <DefaultLayout>
            <h3>Airline: {props.flight.airline}</h3>
            <h3>FlightNo: {props.flight.flightNo}</h3>
            <h3>Departure Date: {props.flight.departs.toString()}</h3>
            <h3>Departing Airport: {props.flight.airport}</h3>
            <br />
            <br />
            {
                props.flight.destinations.length ?
                    <>
                        <div>Destinations:</div>
                        {/* <p>{props.flight.destinations.map((destination, i) => */}
                        <p>{sortedFlights.map((destination, i) =>
                            <div key={i} className="destins">
                                <div><strong>Destination Airport: </strong>{destination.airport}</div>
                                <div><strong>Arrival: </strong> {destination.arrival.toString()}</div>
                                <form action={`/flights/${props.flight._id}/comments/${destination._id}?_method=DELETE`} method="POST"><input type="submit" value="X" /></form>
                                <a href={`/flights/${props.flight._id}/comments/${destination._id}`}>+</a>
                            </div>
                        )}</p>
                        <br /><br />
                    </>
                    : ''
            }
            <details>
                <summary style={{ opacity: '.5' }}>Add a destination:</summary>
                <form action={`/flights//${props.flight._id}/destinations`} method="POST">
                    <label htmlFor="airports">Choose a Destination Airport:</label>
                    <select name="airport" id="airports" required>
                        {availableAirports.map(airport => {
                           return <option value={`${airport}`}>{airport}</option>
                        }
                        )}
                    </select>
                    <br />
                    <br />
                    <label htmlFor="arrival">Arrival Date:</label>
                    <input type="datetime-local" id="arrival" name="arrival" required />
                    <button>Submit</button>
                </form>
            </details>



        </DefaultLayout>

    );
}

export default Show;