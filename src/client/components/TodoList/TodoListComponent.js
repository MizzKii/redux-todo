import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Grid, Cell, Button, DataTable, TableHeader } from 'react-mdl'
import style from './todoList.scss'

export default class extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    onRemoveTodo: PropTypes.func.isRequired
  }
  handleCheck (obj) {
     console.log (obj)
  }
  render () {
    const todos = this.props.todos.map (todo => ({
      ...todo,
      title: <Link to={`/edit/${todo.id}`}>{todo.title}</Link>,
      delete: <Button onClick={() => this.props.onRemoveTodo ({ id: todo.id })} ripple><i className="material-icons">delete</i></Button>
    }))
    return (
      <div className={style.container}>
        <Grid>
          <Cell col={10}><h4>Reminders</h4></Cell>
          <Cell col={2}>
            <Link to="/add"><Button className={style.btn_add} raised ripple colored>Add</Button></Link>
          </Cell>
        </Grid>
        <DataTable rows={todos} className={style.table} onSelectionChanged={this.handleCheck.bind (this)} rowKeyColumn="id" shadow={0} selectable>
            <TableHeader name="title" tooltip="Title of todo">Title</TableHeader>
            <TableHeader name="createDate" tooltip="Create date of todo">Create</TableHeader>
            <TableHeader name="delete" numeric></TableHeader>
        </DataTable>
        </div>
    )
  }
}
