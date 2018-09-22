import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImage } from '../../ducks/reducer';

class WizardTwo extends Component {

    constructor() {
        super();

        this.state = {
            propertyname: '',
            address: '',
            city: '',
            homestate: '',
            zip: '',
            propertyimage: ''
        }
        this.handleChange= this.handleChange.bind(this);
        // this.componentDidMount= this.componentDidMount.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    // componentDidMount(state){
    //     this.setState({
    //         propertyname: state.propertyname,
    //         address: state.address,
    //         city: state.city,
    //         homestate: state.homestate,
    //         zip: state.zip,
    //         propertyimage: state.propertyimage 
    //     })
    // }

    render() {
        const { updateImage } = this.props;
        return (
            <div>
                Image URL
                <input name='propertyimage' value= {this.state.propertyimage} onChange={this.handleChange}></input>
                <button onClick= { ()=> { updateImage()} }>
                    <Link to='/wizard/step1'>
                        Previous Step
                        </Link>
                </button>
                <button onClick= { ()=> { updateImage()} }>
                    <Link to='/wizard/step3'>
                        Next
                        </Link>
                </button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        propertyimage: state.propertyimage
    };
}


export default connect (mapStateToProps, {updateImage})(WizardTwo);