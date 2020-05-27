// this is where you keep all the varaibles of the actions & then pass it to the reducer file


export const ADD_ITEMS = 'add-items';
export const REMOVE_ITEMS ='remove-items';

export const addItems = (items)=>{
    return {
        type: ADD_ITEMS, payload: items
    }
}
export const removeItems = (items)=>{
    return{
        type:REMOVE_ITEMS, payload: items
    }
}
