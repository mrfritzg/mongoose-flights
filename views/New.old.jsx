import React from 'react'

//import framing layout
import DefaultLayout from './layouts/DefaultLayout'

function New(props) {
    return ( 
        <DefaultLayout title="Add Flights">
            <h1>New Flight</h1>
            <form action="/flights" method="POST">
                <label htmlFor="airln">Airline: </label><br />
                <input type="text" id="airln" name="airline" required /><br /><br />
                {/* <select name="airport" id="airports" required></select> */}

                <label htmlFor="flightNo">Flight Number: </label><br />
                <input type="text" id="flightNo" name="flightNo" required /><br /><br />

                <label htmlFor="departs">Departure Date: </label>
                <input type="datetime-local" id="departs" name="departs" required defaultValue={props.departsDate}/><br /><br />
                <br />
                <label htmlFor="airports">Choose a Departing Airport:</label>
            <select name="airport" id="airports" required>
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            </select>

                <button>Submit</button>
            </form>
        </DefaultLayout>
    );
}

export default New;