import database from '../../../database'

export default todo => {
  database.push (todo)
  return database
}
