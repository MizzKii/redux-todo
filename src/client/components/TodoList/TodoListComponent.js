import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Grid, Cell, Button, DataTable, TableHeader, Checkbox } from 'react-mdl'
import style from './todoList.scss'

export default class extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    onRemoveTodo: PropTypes.func.isRequired
  }
  createRows () {
    return this.props.todos.map (todo => ({
      ...todo,
      title: <Link to={`/edit/${todo.id}`}>{todo.title}</Link>,
      delete: (
        <Button
          onClick={() => this.props.onRemoveTodo ({ id: todo.id })}
          ripple >
          <i className="material-icons">delete</i>
        </Button>
      ),
      checkbox: (
        <Checkbox
          key={todo.id}
          defaultChecked={todo.isComplete}
          onChange={event => this.props.toggleComplete ({ ...todo, isComplete: event.target.checked })}
          ripple />
        )
    }))
  }
  render () {
    return (
      <div className={style.container}>
        <Grid>
          <Cell col={10}><h4>Reminders</h4></Cell>
          <Cell col={2}>
            <Link to="/add"><Button className={style.btn_add} raised ripple colored>Add</Button></Link>
          </Cell>
        </Grid>
        <DataTable
          className={style.table}
          rows={this.createRows ()}
          rowKeyColumn="id"
          shadow={0}>
            <TableHeader name="checkbox" style={{ width: '67px' }} ></TableHeader>
            <TableHeader name="title" tooltip="Title of todo" >Title</TableHeader>
            <TableHeader name="createDate" tooltip="Create date of todo" numeric >Create</TableHeader>
            <TableHeader name="delete" style={{ width: '106px' }} numeric ></TableHeader>
        </DataTable>
        </div>
    )
  }
}
