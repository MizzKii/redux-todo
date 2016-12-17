import apiV1 from './v1'

export default app => {
  const baseUri = '/api/v1'
  app.post (`${baseUri}/todo`, apiV1.selectTodo)
  app.post (`${baseUri}/todo/insert`, apiV1.insertTodo)
  app.post (`${baseUri}/todo/update`, apiV1.updateTodo)
  app.post (`${baseUri}/todo/delete`, apiV1.deleteTodo)
}
