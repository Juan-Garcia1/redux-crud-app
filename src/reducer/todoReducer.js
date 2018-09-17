import {
  GET_TODOS,
  DELETE_TODO,
  ADD_TODO,
  EDIT_TODO,
  LOADING_TODOS
} from "../actions/types"
import uuid from "uuid"

const initialState = {
  todos: [
    {
      id: uuid(),
      task: "Workout"
    },
    {
      id: uuid(),
      task: "Buy groceries"
    },
    {
      id: uuid(),
      task: "Learn Redux"
    }
  ],
  isLoading: true
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [action.todoItem, ...state.todos]
      }
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(
          todo =>
            todo.id === action.id ? { ...todo, task: action.todoItem } : todo
        )
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    case LOADING_TODOS:
      return {
        ...state,
        isLoading: true
      }
    default:
      return state
  }
}
