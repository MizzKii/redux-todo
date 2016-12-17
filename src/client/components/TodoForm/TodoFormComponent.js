import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Card, CardTitle, CardText, CardActions, Textfield, Button } from 'react-mdl'
import style from './TodoForm.scss'

export default class extends Component {
  static propTypes = {
    id: PropTypes.number,
    newId: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    createDate: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired
  }
  static defaultProps = {
    title: '',
    description: ''
  }
  state = {
    title: this.props.title,
    description: this.props.description
  }
  handleSubmit () {
    const todo = {
      id: this.props.id | this.props.newId,
      title: this.state.title,
      description: this.state.description,
      createDate: this.props.createDate ? this.props.createDate : new Date ().toString (),
      isComplete: this.props.isComplete | false
    }
    this.props.handleSubmit (todo)
  }
  render () {
    const id = this.props.id;
    return (
      <Card className={style.container} shadow={0}>
        <CardTitle>
          { id ? `Edit ID: ${id}` : 'Add'}
        </CardTitle>
        <CardText>
          <Textfield
            label="Title"
            onChange={e => this.setState ({ title: e.target.value })}
            value={this.state.title}
            floatingLabel
          />
          <Textfield
            label="Description"
            floatingLabel
            onChange={obj => this.setState ({ description: obj.target.value })}
            value={this.state.description}
          />
          { id ? `Create Date: ${this.props.createDate}` : ''}
        </CardText>
        <CardActions border>
            <Link to="/view"><Button raised ripple>Back</Button></Link>
            <Button style={{float: 'right'}} onClick={this.handleSubmit.bind (this)} raised ripple colored>{ id ? 'Save' : 'Add'}</Button>
        </CardActions>
      </Card>
    )
  }
}
