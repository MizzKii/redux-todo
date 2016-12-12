import { TODO } from '../constants'

const { ADD, EDIT, REMOVE } = TODO
const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return [ ...state, action.todo ]
        case EDIT:
            return state.map (todo => todo.id === action.todo.id ? action.todo : todo)
        case REMOVE:
            // code
            break;
        default:
            return state
    }
}
