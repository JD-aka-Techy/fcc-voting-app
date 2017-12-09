import * as constants from '../actions/constants';

const initialState = {
  allPolls: [],
  myPolls: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.UPDATE_POLLS:
      return { ...state, allPolls: action.payload };
    case constants.UPDATE_MY_POLLS:
      return { ...state, myPolls: action.payload };
    default:
      return state;
  }
}