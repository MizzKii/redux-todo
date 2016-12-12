import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import TodoForm from './TodoFormComponent'
import { addTodo, editTodo } from './TodoFormAction'

class TodoFormContainer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    params: React.PropTypes.object.isRequired,
    onAddTodo: PropTypes.func.isRequired,
    onEditTodo: PropTypes.func.isRequired
  }
  constructor (props) {
    super (props)
    const id = this.props.params.id
    let todo = { id: null }
    if (id) {
      const filter = props.todos.filter (todo => todo.id == id)[0]
      todo = filter == null ? todo : filter
    }
    if (!todo.id) {
      todo.newId = props.todos.length > 0 ? props.todos[props.todos.length - 1].id + 1 : 1
    }
    this.state = {
      todo
    }
  }
  handleSubmit (todo) {
    if (!this.state.todo.id) {
      this.props.onAddTodo (todo)
    } else {
      this.props.onEditTodo (todo)
    }
    browserHistory.push('/')
  }
  render () {
    return (
      <TodoForm { ...this.state.todo } handleSubmit={this.handleSubmit.bind (this)} />
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  onAddTodo (todo) {
    dispatch (addTodo (todo))
  },
  onEditTodo (todo) {
    dispatch (editTodo (todo))
  }
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (TodoFormContainer)
