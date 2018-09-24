import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { cancelWizard } from '../../ducks/reducer';

import WizardOne from '../WizardOne/WizardOne';
import WizardTwo from '../WizardTwo/WizardTwo';
import WizardThree from '../WizardThree/WizardThree';



class Wizard extends Component {

    render() {
        const { cancelWizard } = this.props;
        return (
            <div className="dashboard" id="wizards">
                <div className="center_dashboard" >
                <h2>Add New Listing</h2>
                <button className="add_property_button" id="cancel_wizard" onClick= { ()=> {cancelWizard()} } >
                    <Link className="links" to='/' >Cancel</Link>
                </button>
                </div>
                <Switch>
                    <Route component={WizardOne} path='/wizard/step1' />
                    <Route component={WizardTwo} path='/wizard/step2' />
                    <Route component={WizardThree} path='/wizard/step3' />
                </Switch>

            </div>
        )
    }
}

export default connect(null, { cancelWizard })(Wizard);