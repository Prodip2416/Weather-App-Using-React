import React from 'react'


function weather(props) {
    return (
        <div className="container text-light">
            <div className="cards pt-4">
                <h1>{props.city}</h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>
                {props.celsius ?
                    <h1 className="py-2">{props.celsius}&deg;</h1> : null}
                {minMaxTemp(props.temp_max, props.temp_min)}
                <h4>
                    <span className="py-3">{props.description}</span>
                </h4>
            </div>
        </div>
    )
}

function minMaxTemp(min, max) {
    if (min && max) {
        return (
            <h3>
                <span className="px-4">{max}&deg;</span>
                <span className="px-4">{min}&deg;</span>
            </h3>
        )
    }

}
export default weather
