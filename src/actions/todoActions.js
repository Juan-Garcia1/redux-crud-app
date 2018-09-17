import axios from "axios"
import {
  GET_TODOS,
  DELETE_TODO,
  ADD_TODO,
  EDIT_TODO,
  LOADING_TODOS
} from "./types"

export const getTodos = () => dispatch => {
  dispatch(setLoadingTodos())
  axios.get("https://jsonplaceholder.typicode.com/todos").then(res =>
    dispatch({
      type: GET_TODOS,
      payload: res.data
    })
  )
  // return {
  //   type: GET_TODOS
  // }
}

export const addTodo = todoItem => {
  return {
    type: ADD_TODO,
    todoItem
  }
}

export const editTodo = (id, todoItem) => {
  return {
    type: EDIT_TODO,
    id,
    todoItem
  }
}

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}

export const setLoadingTodos = () => {
  return {
    type: LOADING_TODOS
  }
}
