import { createStore, combineReducers } from 'redux'
import { AppAction } from './app-action'
import {
  CurrentTurnState,
  BoardState,
  globalReducer,
} from '../reducers'

export interface GlobalState {
  board: BoardState,
  currentTurn: CurrentTurnState,
}

const store = createStore<GlobalState, AppAction, {}, {}>(globalReducer)

export default store