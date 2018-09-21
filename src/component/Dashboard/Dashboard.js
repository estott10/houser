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
this.removeHouse= this.removeHouse.bind(this);
   }

   componentDidMount(){
       axios.get('/api/houses')
        .then( res =>{
           this.setState({
               houses: res.data
           })
       })
   }

   removeHouse(deletedID){

       axios.delete(`/api/house/${deletedID}`)
        .then(res => {
                this.componentDidMount();
        })
   }

    render() {
        const { houses } = this.state;
        return (
            <div>
                Dashboard
                {houses.map( (house, i) => {
                    return <ul key={i} className= "houseList"><House 
                    removehouse={this.removeHouse} propertyid={house.propertyid} propertyname={house.propertyname} address={house.address} city={house.city} homeState={house.state} zip={house.zip}/></ul>
                })}
                
            </div>
        )
    }
}


