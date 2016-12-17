import { sendPost } from '../../managers/call-api'
import { TODO, ENDPOINT } from '../../constants'
const { FETCH } = TODO
const { ENDPOINT_TODO_FETCH } = ENDPOINT

export const fetchTodos = () => sendPost ({ endpoint: ENDPOINT_TODO_FETCH, type: FETCH })
