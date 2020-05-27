import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {carReducer} from './reducers/index';

const App = () => {
  
  /* MVP REQUIREMENTS
    - Move the given state to the reducer as the initial state for the Redux store.
    - Set up the Redux flow
    - User should be able to add features to their car
    - User should be able to remove added features from their car
    - Total should update as user adds and removes features from their car
*/
  const store = createStore(carReducer);

  return (
      
    <Provider store={store}>
      <div className="boxes">
        <div className="box">
          <Header />
          <AddedFeatures />
        </div>
        <div className="box">
          <AdditionalFeatures />
          <Total/>
        </div>
      </div>
    </Provider>
  );
};

export default App;
