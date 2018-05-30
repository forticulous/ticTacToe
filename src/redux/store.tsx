import { createStore, combineReducers } from 'redux'
import { AppAction } from './app-action'
import {
  GlobalState,
  globalReducer,
} from '../reducers'

const store = createStore<GlobalState, AppAction, {}, {}>(globalReducer)

export default store