import React, { Component } from 'react';
import House from '../House/House';
import axios from 'axios';
import { Link } from 'react-router-dom';


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
            <div className="dashboard">
            <div className="center_dashboard">
           <h2> Dashboard</h2>
        <button className="add_property_button">
          <Link className="links" to='/wizard/step1'>
            Add New Property
        </Link>
        </button>
        </div> 
        <h3>
            <div className="home_listings">Home Listings</div>
                {houses.map( (house, i) => {
                    return <ul className="houselist" key={i} ><House 
                    removehouse={this.removeHouse} propertyid={house.propertyid} propertyname={house.propertyname} address={house.address} city={house.city} homestate={house.homeState} zip={house.zip}/></ul>
                })}
                </h3>
               
            </div>
        )
    }
}


