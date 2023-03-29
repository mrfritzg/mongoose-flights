import React from 'react'

//import framing layout
import DefaultLayout from './layouts/DefaultLayout'

//current date
const CurrentDate = Date.now()
// console.log(CurrentDate)
function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <DefaultLayout title="All Flights">
            <h1>Flight Board </h1>
            <ul className='flightList'>
                {props.results.map((flight, index) => 
                    <li key={index} className="flightInfo">
                        <p style={{color:'red'}}><strong>Flight Number: </strong> {flight.flightNo}</p>
                        <p><strong>Airline: </strong>{flight.airline}</p>
                        {/* flights in the list to be displayed using red text if the flight's departure date has passed. */}
                        <p><strong> Departure Date/Time: </strong>{ flight.departs.getTime() < CurrentDate ? <span style={{color:'red'}}>{flight.departs.toString()} -FLIGHT HAS PASSED</span>:<span style={{color:'blue'}}>{flight.departs.toString()}</span>}</p>
                        <p><a href={`/flights/${flight._id}`}> DETAILS </a></p>

                    </li> 
                )}
            </ul>
            <a href="/flights/New">Add...</a>
            <br />
            {/* <a href="/flights/New2">Add...</a> */}
            <br/><br/><br/>

            </DefaultLayout>
    )
}

export default Index