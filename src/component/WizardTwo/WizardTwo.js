import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class WizardTwo extends Component {

    constructor() {
        super();

        this.state = {
            propertyname: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            image: ''
        }
        this.handleChange= this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <div>
                Image URL
                <input name='image' value= {this.state.image} onChange={this.handleChange}></input>
                <button >
                    <Link to='wizard/step3'>
                        Next
                        </Link>
                </button>
            </div>
        );
    }
}