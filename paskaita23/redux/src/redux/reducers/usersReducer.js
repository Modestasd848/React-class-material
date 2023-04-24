import {
  FETCH_USERS_ERROR,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from '../constants/usersConstants.js';

const initialState = {
  users: [],
  error: '',
  loading: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload, error: '' };
    case FETCH_USERS_ERROR:
      return { ...state, loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
