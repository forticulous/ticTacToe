import { GlobalState } from '../redux/store'
import { AppAction } from '../redux/app-action'

const initialState: GlobalState = {
  board: [
    ['blank', 'blank', 'blank'],
    ['blank', 'blank', 'blank'],
    ['blank', 'blank', 'blank'],
  ],
  currentTurn: 'cross',
}

export type Player = 'cross' | 'circle'

export type CurrentTurnState = Player

const currentTurnReducer = (
  state: CurrentTurnState = initialState.currentTurn,
  action: AppAction,
): CurrentTurnState => {
  switch (action.type) {
    case 'NEXT_PLAYER_TURN':
      return state === 'cross' ? 'circle' : 'cross'
    default:
      return state
  }
}

export type BoardSquare = 'cross' | 'circle' | 'blank'

export type BoardState = Array<Array<BoardSquare>>

const setSquare = (
  board: BoardState,
  row: number,
  column: number,
  newValue: BoardSquare,
): BoardState => {
  return board.map((currentRow, rowIndex) => {
    if (row === rowIndex) {
      return currentRow.map((square, colIndex) => {
        if (column === colIndex) {
          return newValue
        }
        return square
      })
    }
    return currentRow
  })
}

const crossConcernReducer = (
  state: GlobalState = initialState,
  action: AppAction,
): GlobalState => {
  switch (action.type) {
    case 'PLAYER_CLICK_SQUARE':
      return {
        ...state,
        board: setSquare(state.board, action.row, action.column,
          state.currentTurn === 'cross' ? 'cross' : 'circle'),
      }
    default:
      return state
  }
}

export const globalReducer = (
  state: GlobalState,
  action: AppAction,
): GlobalState => {
  const intermediateState = crossConcernReducer(state, action)
  return {
    ...intermediateState,
    currentTurn: currentTurnReducer(intermediateState.currentTurn, action),
  }
}