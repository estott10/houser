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
    //     this.setState({
    //         propertyname: this.props.propertyname,
    //         address: this.props.address,
    //         city: this.props.city,
    //         homestate: this.props.homestate,
    //         zip: this.props.zip 
    //     })
    // }


    render() {
       const { updatePropertyName, updateAddress, updateCity, updateHomeState, updateZip } = this.props;
       const { propertyname, address, city, homestate, zip} = this.state;

        return (
            <div className="wizardComponent">
                <form className="wizardForm">
                    <div>
                <p>Property Name</p>
                <input name='propertyname' value={propertyname} onChange={this.handleChange} ></input>
                </div>
                <div>
                <p>Address</p>
                <input name='address' value={address} onChange={this.handleChange} ></input>
                </div>
                <div className="cityStateZipForm">
                <div>
                <p>City</p>
                <input name='city' value={city} onChange={this.handleChange} ></input>
                </div>
                <div>
                <p>State</p>
                <input name='homestate' value={homestate} onChange={this.handleChange} ></input>
                </div>
                <div>
                <p>Zip</p>
                <input name='zip' value={zip} onChange={this.handleChange} ></input>
                </div>
                </div>
            </form>
                <button onClick={() => {
                    updatePropertyName(propertyname);
                    updateAddress(address); updateCity(city); updateHomeState(homestate); updateZip(zip);
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