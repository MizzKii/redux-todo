import { connect } from 'react-redux'
import App from './AppComponent'
import { fetchTodos, setState } from './AppAction'

const mapStateToProps = ({ state }) => ({
  state
})

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch (fetchTodos ()),
  setState: state => dispatch (setState (state))
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (App)
