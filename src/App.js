
  /* MVP REQUIREMENTS
    - Move the given state to the reducer as the initial state for the Redux store.
    - Set up the Redux flow
    - User should be able to add features to their car
    - User should be able to remove added features from their car
    - Total should update as user adds and removes features from their car
*/
import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature,removeFeature } from './actions/action';


const App = props => {
    
    return (
        <div className="boxes">
            <div className="box">

                <Header car={props.car} />
                <AddedFeatures car={props.car} removeFeature={props.removeFeature} />

            </div>
            <div className="box">
                
                <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeature={props.addFeature} />
                <Total car={props.car} additionalPrice={props.additionalPrice} />
            </div>
        </div>
    );
};

const stateToProps = state => {
    return {
        additionalPrice: state.additionalPrice,
        car: state.car,
        additionalFeatures: state.additionalFeatures
    }
}

export default connect (
    stateToProps,
    { addFeature, removeFeature }
)(App);