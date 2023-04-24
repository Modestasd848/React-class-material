import {
  FETCH_USERS_ERROR,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from '../constants/usersConstants.js';
import axios from 'axios';

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersError = (error) => ({
  type: FETCH_USERS_ERROR,
  payload: error,
});

export const fetchUsers = (count) => async (dispatch) => {
  dispatch(fetchUsersRequest());
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data.slice(0, count);
    dispatch(fetchUsersSuccess(users));
  } catch (error) {
    dispatch(fetchUsersError(error.message));
  }
};
