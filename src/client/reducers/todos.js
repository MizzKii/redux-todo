import { TODO } from '../constants'

const { ADD, EDIT, REMOVE } = TODO
const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            // code
            break;
        case EDIT:
            // code
            break;
        case REMOVE:
            // code
            break;
        default:
            return state
    }
}