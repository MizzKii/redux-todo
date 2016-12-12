import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Card, CardTitle, CardText, CardActions, Cell, Textfield, Button } from 'react-mdl'
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
  state = {
    title: this.props.title,
    description: this.props.description
  }
  handleSubmit () {
    const todo = {
      id: this.props.id | this.props.newId,
      title: this.state.title,
      description: this.state.description,
      createDate: this.props.createDate ? this.props.createDate : new Date ().toString ()
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
            floatingLabel
            onChange={obj => this.setState ({ title: obj.target.value })}
            value={this.state.title}
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
