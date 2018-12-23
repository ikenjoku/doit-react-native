import * as ActionTypes from '../actionTypes';
import API from '../axiosConfig';
import { add_alert } from "./alertActions";
import handleErrorMessage from '../../helpers/errorMessageHandler';
import setAuthorizationToken from '../../helpers/setAuthorizationToken';

export const login_user = () => ({
  type: ActionTypes.LOGIN_USER,
  isLoading: true
});

export const login_user_success = (userId, username) => ({
  type: ActionTypes.LOGIN_USER_SUCCESS,
  userId,
  username,
});

export const login_user_failure = (error) => ({
  type: ActionTypes.LOGIN_USER_FAILURE,
  error
});

export const signup_user = () => ({
  type: ActionTypes.SIGNUP_USER,
  isLoading: true
});

export const signup_user_success = (userId, username) => ({
  type: ActionTypes.SIGNUP_USER_SUCCESS,
  userId,
  username,
});

export const signup_user_failure = (error) => ({
  type: ActionTypes.SIGNUP_USER_FAILURE,
  error
});

export const logout_user = () => ({
  type: ActionTypes.LOGOUT_USER,
});

export const register_page = () => ({
  type: ActionTypes.REGISTER_PAGE,
});

export const login_page = () => ({
  type: ActionTypes.LOGIN_PAGE,
});

// ActionCreators

export const loginUser = ({ email, password }) => (dispatch) => {
  dispatch(login_user());
  return API.post('/login', { email, password })
    .then(response => {
      dispatch(login_user_success(response.data.user.id, response.data.user.username));
      setAuthorizationToken(response.data.token)
      dispatch(add_alert(response.data.message));
    })
    .catch(error => {
      dispatch(login_user_failure(error.response.data));
      if (error.response.data.status === 400) {
        const message = handleErrorMessage(error.response.data);
        dispatch(add_alert(message));
      } else {
        dispatch(add_alert(error.response.data.message));
      }
    });
};

export const signupUser = (userData) => (dispatch) => {
  dispatch(signup_user());
  return API.post('/signup', userData)
    .then(response => {
      dispatch(signup_user_success(response.data.user.id, response.data.user.username));
      setAuthorizationToken(response.data.token)
      dispatch(add_alert(response.data.message));
    })
    .catch(error => {
      dispatch(signup_user_failure(error.response.data));
      if (error.response.data.status === 400) {
        const message = handleErrorMessage(error.response.data);
        dispatch(add_alert(message));
      } else {
        dispatch(add_alert(error.response.data.message));
      }
    });
};

export const logoutUser = () => (dispatch) => {
  setAuthorizationToken();
  dispatch(logout_user());
};
