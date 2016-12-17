import { sendPostJson } from '../../managers/call-api'
import { TODO, ENDPOINT } from '../../constants'
const { ADD, EDIT } = TODO
const { ENDPOINT_TODO_ADD, ENDPOINT_TODO_EDIT } = ENDPOINT

export const addTodo = todo => sendPostJson ({ endpoint: ENDPOINT_TODO_ADD, data: todo, type: ADD })
export const editTodo = todo => sendPostJson ({ endpoint: ENDPOINT_TODO_EDIT, data: todo, type: EDIT })
