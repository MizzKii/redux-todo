import database from '../../../database'

export default todo => {
  database.splice (database.indexOf (database.filter (val => val.id === todo.id)[0]), 1, todo)
  return database
}
