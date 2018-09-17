import React, { Component } from "react"
import { connect } from "react-redux"
import { getTodos, addTodo, editTodo, deleteTodo } from "./actions/todoActions"
import uuid from "uuid"
import TodoItem from "./components/TodoItem"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: ""
    }
  }

  componentDidMount() {
    this.props.getTodos()
  }

  handleChange = e => {
    this.setState({
      task: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { task } = this.state
    this.props.addTodo({ id: uuid(), task })
    this.setState({
      task: ""
    })
  }

  render() {
    console.log(this.props)
    const { todos, isLoading } = this.props.todos
    const { task } = this.state
    if (isLoading) {
      return <p>fetching todos</p>
    }

    return (
      <div className="App">
        <h1>Here's Your List of Todo's</h1>

        {!todos.length ? (
          <p>No more todos</p>
        ) : (
          <ul>
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                deleteTodo={this.props.deleteTodo}
                editTodo={this.props.editTodo}
                {...todo}
              />
            ))}
          </ul>
        )}

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">
            <p>Task Name</p>
            <input
              type="text"
              id="task"
              value={task}
              onChange={this.handleChange}
            />
          </label>
          <button>add Todo</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(
  mapStateToProps,
  { getTodos, addTodo, editTodo, deleteTodo }
)(App)
