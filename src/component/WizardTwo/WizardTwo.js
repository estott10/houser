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
            propertyimage: ""
        }
        this.handleChange= this.handleChange.bind(this);
        this.componentDidMount= this.componentDidMount.bind(this);
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
            propertyimage: this.props.propertyimage 
        })
    }

    render() {
      
        const { updateImage } = this.props;
        const { propertyimage } = this.state;
        console.log(propertyimage);

        return (
            <div>
                Image URL
                <input name='propertyimage' value= {propertyimage} onChange={this.handleChange}></input>
                <button onClick= { ()=> { updateImage(propertyimage)} }>
                    <Link className="links" to='/wizard/step1'>
                        Previous Step
                        </Link>
                </button>
                <button onClick= { ()=> { updateImage(propertyimage)} }>
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