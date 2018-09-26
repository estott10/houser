import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePropertyName, updateAddress, updateCity, updateHomeState, updateZip } from '../../ducks/reducer';


class WizardOne extends Component {

    constructor(props) {
        super(props)

        this.state = {
            propertyname: '',
            address: '',
            city: '',
            homestate: '',
            zip: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.componentDidMount= this.componentDidMount.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    componentDidMount(props){
        this.setState({
            propertyname: this.props.propertyname,
            address: this.props.address,
            city: this.props.city,
            homestate: this.props.homestate,
            zip: this.props.zip 
        })
    }


    render() {
       const { updatePropertyName, updateAddress, updateCity, updateHomeState, updateZip } = this.props;
       const { propertyname, address, city, homestate, zip} = this.state;

        return (
            <div className="wizardComponent">
               
                    <div>
                <p id="propName">Property Name</p>
                <input name='propertyname' value={propertyname} onChange={this.handleChange}></input>
                </div>
                <div>
                <p id="address">Address</p>
                <input id="address_field" name='address' value={address} onChange={this.handleChange} ></input>
                </div>
                <div className="cityStateZipForm">
                <div>
                <p id="city">City</p>
                <input name='city' value={city} onChange={this.handleChange} ></input>
                </div>
                <div>
                <p id="state">State</p>
                <input name='homestate' value={homestate} onChange={this.handleChange} ></input>
                </div>
                <div>
                <p id="zip">Zip</p>
                <input name='zip' value={zip} onChange={this.handleChange} ></input>
                </div>
                </div>
           
                <button className="next_button" onClick={() => {
                    updatePropertyName(propertyname);
                    updateAddress(address); updateCity(city); updateHomeState(homestate); updateZip(zip);
                }} >
                    <Link className="next_link" to='/wizard/step2'>
                        <p id= "nextText" >Next Step</p>
                        </Link>
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        propertyname: state.propertyname,
        address: state.address,
        city: state.city,
        homestate: state.homestate,
        zip: state.zip
    };
}

export default connect(mapStateToProps, { updatePropertyName, updateAddress, updateCity, updateHomeState, updateZip })(WizardOne);