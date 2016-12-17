import { TODO } from '../constants'

const { FETCH, ADD, EDIT, REMOVE } = TODO
const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return action.payload
    case ADD:
      return action.payload
    case EDIT:
      return action.payload
    case REMOVE:
      return action.payload
    default:
      return state
  }
}
