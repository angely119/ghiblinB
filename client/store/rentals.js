// RENTALS REDUCER
import axios from "axios";

// ACTION TYPES
const SET_RENTALS = 'SET_RENTALS';

// ACTION CREATORS
const setRentals = (rentals) => {
  return {
    type: SET_RENTALS,
    rentals
  }
};

// THUNK CREATORS
export const fetchRentals = () => {
  return async (dispatch) => {
    const { data: rentals } = await axios.get('/api/rentals');
    dispatch(setRentals(rentals));
  }
};

// REDUCER
const rentalsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_RENTALS:
      return action.rentals;
    default:
      return state;
  }
};

export default rentalsReducer;
