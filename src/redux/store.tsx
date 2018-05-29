import { createStore } from 'redux'
import { AppAction } from './app-action'

export type BoardSquare = 'cross' | 'circle' | 'blank'

export interface GlobalState {
  board: Array<Array<BoardSquare>>,
}

const initialState: GlobalState = {
  board: [
    ['cross', 'blank', 'blank'],
    ['blank', 'cross', 'blank'],
    ['blank', 'blank', 'cross'],
  ],
}

const globalReducer = (
  state: GlobalState,
  action: AppAction,
): GlobalState => {
  // TODO: combine all reducers here
  return state
}

const store = createStore<GlobalState, AppAction, {}, {}>(globalReducer, initialState)

export default store