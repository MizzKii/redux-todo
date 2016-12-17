import { sendPost } from '../../managers/call-api'
import { STATE, TODO, ENDPOINT } from '../../constants'
const { NONE } = STATE
const { FETCH } = TODO
const { ENDPOINT_TODO_FETCH } = ENDPOINT

export const fetchTodos = () => sendPost ({ endpoint: ENDPOINT_TODO_FETCH, type: FETCH })
export const setState = state => ({ type: state })
