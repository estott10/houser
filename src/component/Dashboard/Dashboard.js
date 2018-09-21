import React, { Component } from 'react';
import House from '../House/House';
import axios from 'axios';


export default class Dashboard extends Component {
   constructor(){
    super()

    this.state= {
        houses: []
    }
this.componentDidMount= this.componentDidMount.bind(this);
   }

   componentDidMount(){
       axios.get('/api/houses')
        .then( res =>{
           this.setState({
               houses: res.data
           })
       })
   }

    render() {
        const { houses } = this.state;
        return (
            <div>
                Dashboard
                {houses.map( (house, i) => {
                    return <ul key={i} className= "houseList"><House propertyName={house.propertyName} address={house.address} city={house.city} homeState={house.state} zip={house.zip}/></ul>
                })}
                
            </div>
        )
    }
}


