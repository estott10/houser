import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class WizardOne extends Component {
   
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
                <input name='propertyname' value= {this.state.propertyname} onChange={this.handleChange} ></input>
                Address
                <input name='address' value= {this.state.address} onChange={this.handleChange} ></input>
                City
                <input name='city' value= {this.state.city} onChange={this.handleChange} ></input>
                State
                <input name='state' value= {this.state.state} onChange={this.handleChange} ></input>
                Zip
                <input name='zip' value= {this.state.zip} onChange={this.handleChange} ></input>
                <button >
                    <Link to='wizard/step2'>
                        Next
                        </Link>
                </button>
        </div>
        )
    }
}