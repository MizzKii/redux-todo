import { connect } from 'react-redux'
import TodoList from './TodoListComponent'
import { removeTodo } from './TodoListAction'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  onRemoveTodo (todo) {
    dispatch (removeTodo (todo))
  }
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (TodoList)
