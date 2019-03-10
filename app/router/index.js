/**
 * Evertthing to do with routes will be setup here.
 * */
import React from 'react';
import {Router, Actions, Scene} from 'react-native-router-flux';

import ExampleContainer from '../ui/containers/ExampleContainer'


/**
 * import container components  here
 * */
const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="example" component={ExampleContainer} title="example" initial/>
            </Scene>
        </Router>
    );
};


export default RouterComponent;
