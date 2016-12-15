import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Grid, Cell, Chip, Button, DataTable, TableHeader, Checkbox } from 'react-mdl'
import style from './todoList.scss'

const ALL = 'all'
const COMPLETE = 'complete'
const INCOMPLETE = 'incomplete'

export default class extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    onRemoveTodo: PropTypes.func.isRequired
  }
  state = {
    chipSelected: ALL
  }
  chipClassName (type) {
    return `${style.chip} ${this.state.chipSelected === type ? style.chip_active : ''}`
  }
  chipChange (chipSelected) {
    this.setState ({ chipSelected })
  }
  filterRows ({ isComplete }) {
    switch (this.state.chipSelected) {
      case COMPLETE:
        return isComplete
      case INCOMPLETE:
        return !isComplete
      default:
        return true
    }
  }
  createRows () {
    return this.props.todos
    .filter (this.filterRows.bind (this))
    .map (todo => ({
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
          <Cell tablet={2} phone={2} className={style.title}>Reminders</Cell>
          <Cell tablet={5} phone={4} style={{textAlign: 'center'}}>
            <Chip className={this.chipClassName (ALL)} onClick={() => this.chipChange (ALL)}>All</Chip>
            <Chip className={this.chipClassName (COMPLETE)} onClick={() => this.chipChange (COMPLETE)}>Complete</Chip>
            <Chip className={this.chipClassName (INCOMPLETE)} onClick={() => this.chipChange (INCOMPLETE)}>Incomplete</Chip>
          </Cell>
          <Cell tablet={1} phone={2} className={style.add}>
            <Link to="/add"><Button className={style.btn_add} raised ripple colored>Add</Button></Link>
          </Cell>
        </Grid>
        <DataTable
          className={style.table}
          rows={this.createRows ()}
          rowKeyColumn="id"
          shadow={0}>
            <TableHeader name="checkbox" style={{ width: '67px' }}></TableHeader>
            <TableHeader name="title" tooltip="Title of todo">Title</TableHeader>
            <TableHeader name="createDate" tooltip="Create date of todo" numeric>Create</TableHeader>
            <TableHeader name="delete" style={{ width: '106px' }} numeric></TableHeader>
        </DataTable>
        </div>
    )
  }
}
