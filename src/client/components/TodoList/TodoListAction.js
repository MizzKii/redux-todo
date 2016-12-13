import { TODO } from '../../constants'
const { REMOVE } = TODO

export const removeTodo = todo => ({
    type: REMOVE,
    todo
})