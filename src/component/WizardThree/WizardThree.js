import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateMortgage, updateRent, cancelWizard } from '../../ducks/reducer';

class WizardThree extends Component {

    constructor() {
        super();

        this.state = {
                propertyname: '',
                address: '',
                city: '',
                homestate: '',
                zip: '',
                mortgage: '',
                rent: '',
                propertyimage: ''
        }
        this.addhouse= this.addhouse.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.componentDidMount=this.componentDidMount.bind(this);
    }

    addhouse(){
        const newHouse = {
            propertyname: this.props.propertyname,
            address: this.props.address,
            city: this.props.city,
            homestate: this.props.homestate,
            zip: parseInt(this.props.zip, 10),
            mortgage: this.state.mortgage,
            rent: this.state.rent,
            propertyimage: this.props.propertyimage
        }
        axios.post('/api/wizard', newHouse)
            .then(result => {
                this.props.history.push('/')
                cancelWizard();
            })
    
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    componentDidMount(){

        this.setState({
            propertyname: this.props.propertyname,
            address: this.props.address,
            city: this.props.city,
            homestate: this.props.homestate,
            zip: this.props.zip,
            propertyimage: this.props.propertyimage,
            mortgage: this.props.mortgage,
            rent: this.props.rent 
        });
    }

    render() {
        const { updateMortgage, updateRent } = this.props;
        const { mortgage, rent} = this.state;

        return (
            <div>
                Monthly Mortgage
                <input name='mortgage' value={this.state.mortgage} onChange={this.handleChange}></input>
                Desired Rent
                <input name='rent' value={this.state.rent} onChange={this.handleChange}></input>
                <button onClick={() => {
                    updateMortgage(mortgage);
                    updateRent(rent);
                    }}>
                    <Link className="links" to='/wizard/step2'>
                        Previous Step
                        </Link>
                </button>
                <button onClick={() => {
                    updateMortgage(mortgage);
                    updateRent(rent);
                    this.addhouse();
                    }}>
                    Complete
                </button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        propertyname: state.propertyname,
        address: state.address,
        city: state.city,
        homestate: state.homestate,
        zip: state.zip,
        mortgage: state.mortgage,
        rent: state.rent,
        propertyimage: state.propertyimage
    }
}


export default connect (mapStateToProps, { updateMortgage, updateRent, cancelWizard})(WizardThree);