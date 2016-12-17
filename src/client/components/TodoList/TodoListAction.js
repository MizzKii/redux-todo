import { sendPostJson } from '../../managers/call-api'
import { TODO, ENDPOINT } from '../../constants'
const { EDIT, REMOVE } = TODO
const { ENDPOINT_TODO_EDIT, ENDPOINT_TODO_REMOVE } = ENDPOINT

export const toggleTodoComplete = todo => sendPostJson ({ endpoint: ENDPOINT_TODO_EDIT, data: todo, type: EDIT })
export const removeTodo = todo => sendPostJson ({ endpoint: ENDPOINT_TODO_REMOVE, data: todo, type: REMOVE })
