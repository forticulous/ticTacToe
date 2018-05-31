import {
  CheckWinnerAction,
  NewGameAction,
  NextPlayerTurnAction,
  PlayerClickSquareAction,
} from '../actions'

export type AppAction =
  | CheckWinnerAction
  | NewGameAction
  | NextPlayerTurnAction
  | PlayerClickSquareAction