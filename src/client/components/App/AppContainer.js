import { connect } from 'react-redux'
import App from './AppComponent'
import { fetchTodos } from './AppAction'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch (fetchTodos ())
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (App)
