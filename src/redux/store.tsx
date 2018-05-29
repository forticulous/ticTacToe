import { createStore, combineReducers } from 'redux'
import { AppAction } from './app-action'
import {
  CurrentTurnState,
  currentTurnReducer as currentTurn,
  BoardState,
  crossConcernReducer,
} from '../reducers'

export interface GlobalState {
  board: BoardState,
  currentTurn: CurrentTurnState,
}

const globalReducer = (
  state: GlobalState,
  action: AppAction,
): GlobalState => {
  const intermediateState = crossConcernReducer(state, action)
  return {
    ...intermediateState,
    currentTurn: currentTurn(intermediateState.currentTurn, action),
  }
}

const store = createStore<GlobalState, AppAction, {}, {}>(globalReducer)

export default store