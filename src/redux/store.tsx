import { combineReducers, createStore } from 'redux'
import {
  globalReducer,
  GlobalState,
} from '../reducers'
import { AppAction } from './app-action'

const store = createStore<GlobalState, AppAction, {}, {}>(globalReducer)

export default store
