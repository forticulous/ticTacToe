import { GlobalState } from '../redux/store'
import { AppAction } from '../redux/app-action'

export type Player = 'cross' | 'circle'

export type CurrentTurnState = Player

export const currentTurnReducer = (
  state: CurrentTurnState = 'cross',
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

const setColumn = (
  row: Array<BoardSquare>,
  column: number,
  newValue: BoardSquare,
): Array<BoardSquare> => {
  return Array.of(
    column === 0 ? newValue : row[0],
    column === 1 ? newValue : row[1],
    column === 2 ? newValue : row[2],
  )
}

const setSquare = (
  board: BoardState,
  row: number,
  column: number,
  newValue: BoardSquare,
): BoardState => {
  const row1 = row === 0 ? setColumn(board[0], column, newValue) : Array.from(board[0])
  const row2 = row === 1 ? setColumn(board[1], column, newValue) : Array.from(board[1])
  const row3 = row === 2 ? setColumn(board[2], column, newValue) : Array.from(board[2])
  return Array.of(row1, row2, row3)
}

const initialBoard: BoardState = [
  ['blank', 'blank', 'cross'],
  ['blank', 'cross', 'blank'],
  ['cross', 'blank', 'blank'],
]

export const boardReducer = (
  state: BoardState = initialBoard,
  action: AppAction,
): BoardState => {
  switch (action.type) {
    case 'PLAYER_CLICK_SQUARE':
      // TODO: fix the hard-coded newValue  
      return setSquare(state, action.row, action.column, 'cross')
    default:
      return state
  }
}