import { connect } from 'react-redux'
import TodoList from './TodoListComponent'
import { toggleTodoComplete, removeTodo } from './TodoListAction'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  toggleComplete: todo => dispatch (toggleTodoComplete (todo)),
  onRemoveTodo: todo => dispatch (removeTodo (todo))
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (TodoList)
