import {
  CheckWinnerAction,
  NextPlayerTurnAction,
  PlayerClickSquareAction,
} from '../actions'

export type AppAction =
  | CheckWinnerAction
  | NextPlayerTurnAction
  | PlayerClickSquareAction