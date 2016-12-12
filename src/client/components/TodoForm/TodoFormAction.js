import { TODO } from '../../constants'
const { ADD, EDIT } = TODO

export const addTodo = (todo) => ({
  type: ADD,
  todo
})

export const editTodo = (todo) => ({
  type: EDIT,
  todo
})
