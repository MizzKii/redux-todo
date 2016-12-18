import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import * as reducers from './reducers'

export default history => createStore (
  combineReducers ({ ...reducers, routing: routerReducer }),
  applyMiddleware ( thunkMiddleware, apiMiddleware, routerMiddleware (history) )
)
