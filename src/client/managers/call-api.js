import { CALL_API } from 'redux-api-middleware'
import { STATE } from '../constants'
const { REQUEST, FAILURE } = STATE

export const sendPostJson = ({ endpoint, data, type }) => ({
  [CALL_API]: {
    endpoint: endpoint,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify (data),
    types: [REQUEST, type, FAILURE]
  }
})

export const sendPost = ({ endpoint, type }) => ({
  [CALL_API]: {
    endpoint: endpoint,
    method: 'POST',
    types: [REQUEST, type, FAILURE]
  }
})
