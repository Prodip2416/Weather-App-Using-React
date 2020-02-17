import React from 'react';
import './From.style.css';

const From = props => {
    return (
        <div className="container">
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.loadWeather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input type="text" name="city" autoComplete="off" className="form-control" placeholder="City" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="country" autoComplete="off" className="form-control" placeholder="Country" />
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-warning">
                            Get Weather
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
function error() {
    return (<div className="alert alert-danger mx-5" role="alert">
        Please enter city and country
    </div>)
}
export default From