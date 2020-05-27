import { ADD_ITEMS, REMOVE_ITEMS } from '../action/index';

/* MVP REQUIREMENTS
    - Move the given state to the reducer as the initial state for the Redux store[Done]
    - Set up the Redux flow[ in progress ]
    - User should be able to add features to their car
    - User should be able to remove added features from their car
    - Total should update as user adds and removes features from their car
*/


//create main state here & pass it down to app
const mainState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  //here is where all the logic goes using switch case
  export const carReducer = (state = mainState, action) => {
        switch(action.type){
            case ADD_ITEMS:
                return{
                    ...state,
                        additionalPrice: state.additionalPrice + action.payload.price
                }
            case REMOVE_ITEMS:
                return{
                    ...state,
                        additionalPrice: state.additionalPrice - action.payload.price
               }
            default:
               return state
        }
  }