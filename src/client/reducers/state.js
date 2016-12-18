import { STATE, TODO } from '../constants'
const { NONE, REQUEST, FAILURE } = STATE
const { FETCH, ADD, EDIT, REMOVE } = TODO
const initialState = NONE

export default (state = initialState, action) => {
  switch (action.type) {
    case NONE:
      return NONE
    case REQUEST:
      return REQUEST
    case FAILURE:
      return FAILURE
    case FETCH:
      return FETCH
    case ADD:
      return ADD
    case EDIT:
      return EDIT
    case REMOVE:
      return REMOVE
    default:
      return state
  }
}
