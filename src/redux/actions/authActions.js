import * as ActionTypes from '../actionTypes';

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