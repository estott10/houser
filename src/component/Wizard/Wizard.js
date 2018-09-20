import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Wizard extends Component {
   
   constructor(){
       super()

       this.state = {
           propertyName: '',
           address: '',
           city: '',
           state: '',
           zip: ''
       }
       this.handleChange=this.handleChange.bind(this);
   }
handleChange(e){
    this.setState({
        [e.target.name]: e.target.value,
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
                <input name='propertyName' value= {this.state.propertyName} onChange={this.handleChange} ></input>
                Address
                <input name='address' value= {this.state.address} onChange={this.handleChange} ></input>
                City
                <input name='city' value= {this.state.city} onChange={this.handleChange} ></input>
                State
                <input name='state' value= {this.state.state} onChange={this.handleChange} ></input>
                Zip
                <input name='zip' value= {this.state.zip} onChange={this.handleChange} ></input>
        </div>
        )
    }
}