import React from 'react'

function House(props){

    return(
        <div>
        House
        <h2>{props.propertyName}</h2>
        <h2>{props.address}</h2>
        <h2>{props.city}</h2>
        <h2>{props.homeState}</h2>
        <h2>{props.zip}</h2>
        <button>x</button>
        </div>
    )
}

export default House;