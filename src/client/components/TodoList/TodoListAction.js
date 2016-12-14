import { TODO } from '../../constants'
const { EDIT, REMOVE } = TODO

export const toggleTodoComplete = todo => ({
  type: EDIT,
  todo
})

export const removeTodo = todo => ({
    type: REMOVE,
    todo
})
