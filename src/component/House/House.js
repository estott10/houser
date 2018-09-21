import React from 'react'

function House(props) {

    return (
        <div>
            House
        <h2>{props.propertyname}</h2>
            <h2>{props.address}</h2>
            <h2>{props.city}</h2>
            <h2>{props.homeState}</h2>
            <h2>{props.zip}</h2>
            <button onClick={() => { props.removehouse(props.propertyid) }} >x</button>
        </div>
    )
}

export default House;