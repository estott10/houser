import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePropertyName, updateAddress, updateCity, updateHomeState, updateZip } from '../../ducks/reducer';


class WizardOne extends Component {

    constructor() {
        super()

        this.state = {
            propertyname: '',
            address: '',
            city: '',
            homestate: '',
            zip: ''
        }
        this.handleChange = this.handleChange.bind(this);
        // this.componentDidMount= this.componentDidMount.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    // componentDidMount(){
    //     const {state} = this.props;
    //     this.setState({
    //         propertyname: state.propertyname,
    //         address: state.address,
    //         city: state.city,
    //         homestate: state.homestate,
    //         zip: state.zip 
    //     })
    // }


    render() {
       const { updatePropertyName, updateAddress, updateCity, updateHomeState, updateZip } = this.props;

        return (
            <div>
                Add New Listing
                <button>
                    <Link to='/' >Cancel</Link>
                </button>
                Property Name
                <input name='propertyname' value={this.state.propertyname} onChange={this.handleChange} ></input>
                Address
                <input name='address' value={this.state.address} onChange={this.handleChange} ></input>
                City
                <input name='city' value={this.state.city} onChange={this.handleChange} ></input>
                State
                <input name='homestate' value={this.state.homestate} onChange={this.handleChange} ></input>
                Zip
                <input name='zip' value={this.state.zip} onChange={this.handleChange} ></input>
                <button onClick={() => {
                    updatePropertyName();
                    updateAddress(); updateCity(); updateHomeState(); updateZip();
                }} >
                    <Link to='/wizard/step2'>
                        Next
                        </Link>
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        propertynames: state.propertyname,
        addresss: state.address,
        city: state.city,
        homestate: state.homestate,
        zips: state.zip
    };
}

export default connect(mapStateToProps, { updatePropertyName, updateAddress, updateCity, updateHomeState, updateZip })(WizardOne);