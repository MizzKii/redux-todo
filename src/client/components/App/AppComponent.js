import React, { Component, PropTypes } from 'react'

export default class extends Component {
  static propTypes = {

  }
  constructor (props) {
    super (props)
  }
  constructor (props) {
    super (props)
    props.fetchTodos ()
  }
  render () {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}
