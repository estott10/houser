import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class WizardThree extends Component {

    constructor() {
        super();

        this.state = {
                propertyname: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                mortgage: '',
                rent: '',
                image: ''
        }
        this.addhouse= this.addhouse.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    addhouse(){
        const newHouse = {
            propertyname: this.state.propertyname,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: parseInt(this.state.zip, 10),
            mortgage: this.state.mortgage,
            rent: this.state.rent,
            image: this.state.image
        }
        axios.post('/api/wizard', newHouse)
            .then(result => {
                this.props.history.push('/')
            })
    
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <div>
                Monthly Mortgage
                <input name='mortgage' value={this.state.mortgage} onChange={this.handleChange}></input>
                Desired Rent
                <input name='rent' value={this.state.rent} onChange={this.handleChange}></input>
                <button>
                    <Link to='/'>Next</Link>
                </button>
            </div>
        );
    }
}