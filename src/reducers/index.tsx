import { AppAction } from '../redux/app-action'

export type BoardSquare = 'cross' | 'circle' | 'blank'

export type BoardState = Array<Array<BoardSquare>>

export type Player = 'cross' | 'circle'

export type CurrentTurnState = Player

export type GameStatus = 'in-progress' | 'cross-wins' | 'circle-wins' | 'draw'

export interface GlobalState {
  board: BoardState,
  currentTurn: CurrentTurnState,
  gameStatus: GameStatus,
}

const initialState: GlobalState = {
  board: [
    ['blank', 'blank', 'blank'],
    ['blank', 'blank', 'blank'],
    ['blank', 'blank', 'blank'],
  ],
  currentTurn: 'cross',
  gameStatus: 'in-progress',
}

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

const checkBoard = (
  board: BoardState,
): GameStatus => {
  const samePlayer = (squares: Array<BoardSquare>) =>
    squares.every((sq) => sq === 'cross') ||
    squares.every((sq) => sq === 'circle')

  // check horizontal wins
  if (samePlayer(board[0])) {
    return board[0][0] === 'cross' ? 'cross-wins' : 'circle-wins'
  }
  if (samePlayer(board[1])) {
    return board[1][0] === 'cross' ? 'cross-wins' : 'circle-wins'
  }
  if (samePlayer(board[2])) {
    return board[2][0] === 'cross' ? 'cross-wins' : 'circle-wins'
  }
  // check vertical wins
  if (samePlayer(Array.of(board[0][0], board[1][0], board[2][0]))) {
    return board[0][0] === 'cross' ? 'cross-wins' : 'circle-wins'
  }
  if (samePlayer(Array.of(board[0][1], board[1][1], board[2][1]))) {
    return board[0][1] === 'cross' ? 'cross-wins' : 'circle-wins'
  }
  if (samePlayer(Array.of(board[0][2], board[1][2], board[2][2]))) {
    return board[0][2] === 'cross' ? 'cross-wins' : 'circle-wins'
  }
  // check diagonal wins
  if (samePlayer(Array.of(board[0][0], board[1][1], board[2][2]))) {
    return board[0][0] === 'cross' ? 'cross-wins' : 'circle-wins'
  }
  if (samePlayer(Array.of(board[0][2], board[1][1], board[2][0]))) {
    return board[0][2] === 'cross' ? 'cross-wins' : 'circle-wins'
  }
  // check for draw
  if (!board.some((row) => row.some((sq) => sq === 'blank'))) {
    return 'draw'
  }

  return 'in-progress'
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
    case 'CHECK_WINNER':
      return {
        ...state,
        gameStatus: checkBoard(state.board),
      }
    case 'NEW_GAME':
      return initialState
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
