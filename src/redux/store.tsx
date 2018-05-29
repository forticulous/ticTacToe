import { createStore, combineReducers } from 'redux'
import { AppAction } from './app-action'
import {
  CurrentTurnState,
  currentTurnReducer as currentTurn,
  BoardState,
  boardReducer as board,
} from '../reducers'

export interface GlobalState {
  board: BoardState,
  currentTurn: CurrentTurnState,
}

const globalReducer = combineReducers({
  board,
  currentTurn,
})

const store = createStore<GlobalState, AppAction, {}, {}>(globalReducer)

export default store