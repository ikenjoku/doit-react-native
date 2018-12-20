import * as ActionTypes from '../actionTypes';

export const fetch_todo_item = () => ({
  type: ActionTypes.FETCH_TODO_ITEMS,
  isLoading: true
});

export const fetch_todo_success = (items) => ({
  type: ActionTypes.FETCH_TODO_SUCCESS,
  items
});

export const fetch_todo_failure = (error) => ({
  type: ActionTypes.FETCH_TODO_FAILURE,
  error
});

export const add_todo_item = () => ({
  type: ActionTypes.ADD_TODO_ITEM,
  isLoading: true
});

export const add_todo_success = (newItem) => ({
  type: ActionTypes.ADD_TODO_SUCCESS,
  newItem
});

export const add_todo_failure = (error) => ({
  type: ActionTypes.ADD_TODO_FAILURE,
  error
});

export const edit_todo_item = () => ({
  type: ActionTypes.EDIT_TODO_ITEM,
  isLoading: true
});

export const edit_todo_success = (updatedItem, id) => ({
  type: ActionTypes.EDIT_TODO_SUCCESS,
  updatedItem,
  id
});

export const edit_todo_failure = (error) => ({
  type: ActionTypes.EDIT_TODO_FAILURE,
  error
});

export const delete_todo_item = () => ({
  type: ActionTypes.DELETE_TODO_ITEM,
  isLoading: true
});

export const delete_todo_success = (id) => ({
  type: ActionTypes.DELETE_TODO_SUCCESS,
  id
});

export const delete_todo_failure = (error) => ({
  type: ActionTypes.DELETE_TODO_FAILURE,
  error
});