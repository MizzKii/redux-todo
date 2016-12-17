import database from '../../../database'

export default todo => {
  database.splice(database.indexOf (todo), 1)
  return database
}
