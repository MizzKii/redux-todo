import database from '../../database'
import insertTodo from './todo/insert'
import updateTodo from './todo/update'
import deleteTodo from './todo/delete'

export default {
  selectTodo: (req, res) => res.send (database),
  insertTodo: (req, res) => req.body.title ? res.send (insertTodo (req.body)) : res.status(500).send('Invalid data!'),
  updateTodo: (req, res) => req.body.id ? res.send (updateTodo (req.body)) : res.status(500).send('Invalid data!'),
  deleteTodo: (req, res) => req.body.id ? res.send (deleteTodo (req.body)) : res.status(500).send('Invalid data!')
}
