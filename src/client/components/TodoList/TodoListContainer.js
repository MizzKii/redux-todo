import { connect } from 'react-redux'
import TodoList from './TodoListComponent'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = ({
  
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (TodoList)
