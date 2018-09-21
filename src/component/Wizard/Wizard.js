import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Dashboard from '../Dashboard/Dashboard';

export default class Wizard extends Component {
   
   constructor(){
       super()

       this.state = {
           propertyname: '',
           address: '',
           city: '',
           state: '',
           zip: ''
       }
       this.handleChange=this.handleChange.bind(this);
       this.addhouse= this.addhouse.bind(this);
   }
handleChange(e){
    this.setState({
        [e.target.name]: e.target.value,
    })
}

addhouse(){
    const newHouse = {
        propertyname: this.state.propertyname,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: parseInt(this.state.zip, 10)
    }
    axios.post('/api/wizard', newHouse)
        .then(result => {
            this.props.history.push('/')
        })

}

    render() {

        return (
        <div>
                Add New Listing
                <button>
                    <Link to='/' >Cancel</Link>
                    </button>
                    Property Name
                <input name='propertyname' value= {this.state.propertyname} onChange={this.handleChange} ></input>
                Address
                <input name='address' value= {this.state.address} onChange={this.handleChange} ></input>
                City
                <input name='city' value= {this.state.city} onChange={this.handleChange} ></input>
                State
                <input name='state' value= {this.state.state} onChange={this.handleChange} ></input>
                Zip
                <input name='zip' value= {this.state.zip} onChange={this.handleChange} ></input>
                <button onClick={()=>{this.addhouse()}}>Complete</button>
        </div>
        )
    }
}