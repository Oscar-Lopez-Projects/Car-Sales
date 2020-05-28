/* MVP REQUIREMENTS
    - Move the given state to the reducer as the initial state for the Redux store[Done]
    - Set up the Redux flow[ in progress ]
    - User should be able to add features to their car
    - User should be able to remove added features from their car
    - Total should update as user adds and removes features from their car
*/
const initialState = {
	additionalPrice: 0,
	car: {
		price: 26395,
		name: '2019 Ford Mustang',
		image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
		features: []
	},
	additionalFeatures: [
		{ id: 1, name: 'V-6 Engine', price: 1500 },
		{ id: 2, name: 'Racing Detail Package', price: 1500 },
		{ id: 3, name: 'Premium Sound System', price: 500 },
		{ id: 4, name: 'Rear Spoiler', price: 250 }
	]
}

export const reducer = (state = initialState, action) => {
	switch(action.type) {

		case 'ADD_ITEM':
      return {
          additionalPrice: state.additionalPrice + action.payload.price,
          car: {
            ...state.car,
            features: [...state.car.features, action.payload]
          },
          additionalFeatures: state.additionalFeatures.filter(item => {
            return item !== action.payload;
          })
        };
		case 'REMOVE_ITEM':
      return {
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: state.car.features.filter(item => {
            return item !== action.payload;
          })
        },
        additionalFeatures: [...state.additionalFeatures, action.payload]
      };

		default:
			return state


	}
}