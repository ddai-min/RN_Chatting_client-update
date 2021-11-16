import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from './rootReducer'
import {logger} from './logger'

export const makeStore = () => {
  let middlewares: any[] = [thunk]
  if (__DEV__) {
    middlewares.push(logger)
  }
  return createStore(rootReducer, applyMiddleware(...middlewares))
}
