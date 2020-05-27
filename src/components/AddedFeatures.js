import React from 'react';
import {connect} from 'react-redux';
import {removeItems } from '../action/index';
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {

  const removeItems = (e, item) => {
    e.preventDefault()
    props.removeItems(item)
  }

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature 
            key={item.id} 
            feature={item}
            removeItems={e => removeItems(e, item)}
             />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

//set up mapStateProps and connect it
const mapStateProps = state => {
  return{
    car:state.car
  }
}

export default connect(mapStateProps, {removeItems})(AddedFeatures);
