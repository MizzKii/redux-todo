import React, { Component, PropTypes } from 'react'
import { Snackbar } from 'react-mdl'
import { STATE, TODO } from '../../constants'
const { NONE, REQUEST, FAILURE } = STATE
const { FETCH, ADD, EDIT, REMOVE } = TODO
const timeout = 275000

export default class extends Component {
  static propTypes = {
    state: PropTypes.string.isRequired,
    setState: PropTypes.func.isRequired
  }
  constructor (props) {
    super (props)
    props.fetchTodos ()
    this.state = {
      snackbarActive: props.state !== NONE,
      state: props.state,
      message: 'Loading...',
      timeout: timeout
    }
  }
  handleTimeoutSnackbar () {
    this.props.setState (NONE)
  }
  render () {
    return (
      <div>
        { this.props.children }
        <Snackbar
          timeout={this.state.timeout}
          active={this.state.snackbarActive}
          onTimeout={this.handleTimeoutSnackbar.bind (this)}>
          { this.state.message }
        </Snackbar>
      </div>
    )
  }
  componentDidUpdate () {
    if (this.state.state !== this.props.state) {
      let snackbarActive = true
      let state = this.props.state
      let message = ''
      let timeout = 2750
      switch (this.props.state) {
        case REQUEST:
          message = 'Loading...'
          timeout = timeout
          break;
        case FAILURE:
          message = 'Failure!'
          break;
        case FETCH:
          message = 'Loaded'
          break;
        case ADD:
          message = 'Add Success'
          break;
        case EDIT:
          message = 'Edit Success'
          break;
        case REMOVE:
          message = 'Remove Success'
          break;
        case NONE:
          snackbarActive = false
          break;
        default:
          snackbarActive = false
      }
      this.setState ({ snackbarActive, state, message, timeout })
    }
  }
}
