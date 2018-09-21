import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import WizardOne from '../WizardOne/WizardOne';
import WizardTwo from '../WizardTwo/WizardTwo';
import WizardThree from '../WizardThree/WizardThree';



export default class Wizard extends Component {

    render() {

        return (
            <div>
                Add New Listing
                <button>
                    <Link to='/' >Cancel</Link>
                </button>
                <Switch>
                    <Route component={WizardOne} path='/wizard/step1' />
                    <Route component={WizardTwo} path='/wizard/step2' />
                    <Route component={WizardThree} path='/wizard/step3' />
                </Switch>

            </div>
        )
    }
}