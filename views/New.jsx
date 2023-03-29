import React from 'react'

//import framing layout
import DefaultLayout from './layouts/DefaultLayout'

function New(props) {
    return (
        <DefaultLayout title="Add Flights">
            <div class="container">
                <form action="/flights" method="POST" className="form-horizontal" role="form">
                <h1>Enter New Flight</h1>
                    <div className="form-group row">
                        {/* <!-- Place here whatever form control you need --> */}
                        <label className="col-sm-2 col-form-label" htmlFor="airln">Airline:</label>
                        <div className="col-sm-10">
                            <input type="text" id="airln" name="airline" required />    
                        </div>
                        
                    </div> {/*<!-- /.form-group --> */}
                    <div className="form-group row">
                        {/* <!-- Place here whatever form control you need --> */}
                        <label  className="col-sm-2 col-form-label" htmlFor="flightNo">Flight Number: </label>
                        <div className="col-sm-10">
                            <input type="text" id="flightNo" name="flightNo" required />
                            </div>
                    </div> {/*<!-- /.form-group --> */}
                    <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="departs">Departure Date: </label>
                    <div className="col-sm-10">
                <input type="datetime-local" id="departs" name="departs" required defaultValue={props.departsDate} />
                </div>
                    </div> {/*<!-- /.form-group --> */}
                    <div className="form-group row">
                    <label className="col-sm-2 col-form-label"htmlFor="airports">Choose a Departing Airport:</label>
                    <div className="col-sm-7">
                    <select name="airport" id="airports" required>
                    <option value="AUS">AUS</option>
                    <option value="DAL">DAL</option>
                    <option value="LAX">LAX</option>
                    <option value="SAN">SAN</option>
                </select>
                </div>
                    </div> {/*<!-- /.form-group --> */}
                    <button>Submit</button>
                </form> {/*<!-- /form --> */}
            </div> {/*<!-- /.container-->  */}

        </DefaultLayout>
    );
}

export default New;