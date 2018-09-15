import React, { Component } from "react"
// import { connect } from "react-redux"
// import { editTodo } from "../actions/todoActions"

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false
    }
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  editTask = e => {
    e.preventDefault()
    // console.log(this.editInput.value)
    this.props.editTodo(this.props.id, this.editInput.value)
    this.setState({
      edit: false
    })
  }

  deleteTodo = id => {
    this.props.deleteTodo(id)
  }

  render() {
    // console.log(this.props)
    const { task, id } = this.props
    const { edit } = this.state
    return edit ? (
      <form onSubmit={this.editTask}>
        <input
          type="text"
          defaultValue={task}
          ref={editInput => (this.editInput = editInput)}
        />
        <button>Save</button>
      </form>
    ) : (
      <li style={{ margin: "20px auto" }}>
        {task} - <button onClick={() => this.deleteTodo(id)}>X</button>
        <button onClick={this.toggleEdit}>Edit</button>
      </li>
    )
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   editTodo: () => {
//     dispatch({
//       type:
//       editTodo(id)
//     })
//   }
// })

// const mapStateToProps = state => {
//   return {
//     todos: state.todos
//   }
// }

// export default connect(mapStateToProps)(TodoItem)
export default TodoItem
