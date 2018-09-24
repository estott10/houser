import React from 'react'

function House(props) {

    return (
        <div className="house">
            <img className= "image" src={props.propertyimage} alt="product"/>
            <h2 className="address">
            <div className= "propertyname">
               <p className= "name">Property Name: {props.propertyname} </p>
               </div>
               <div>
               <p className= "street">Address: {props.address}</p>
               </div>
               <div>
               <p className= "city">City: {props.city}</p>
               <p className= "state">State: {props.homestate}</p>
               <p className= "zip">Zip: {props.zip}</p>
               </div>
            </h2>
            <h2 className="costs">
                <p>{props.mortgage}</p>
                <p>{props.rent}</p>
            </h2>
            <button className="delete_x" onClick={() => { props.removehouse(props.propertyid) }} >x</button>
        </div>
    )
}

export default House;