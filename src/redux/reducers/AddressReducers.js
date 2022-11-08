import {ADD_ADDRESS, DELETE_ADDRESS} from '../ActionTypes';

export const AddressReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return [...state, action.payload];

    case DELETE_ADDRESS:
      const deleteArray1 = state.filter((item, index) => {
        return index !== action.payload;
      });

      return deleteArray1;
    default:
      return state;
  }
};
