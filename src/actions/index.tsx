export interface NextPlayerTurnAction {
  type: 'NEXT_PLAYER_TURN',
}

export const nextPlayerTurn = (): NextPlayerTurnAction => {
  return {
    type: 'NEXT_PLAYER_TURN',
  }
}

export interface PlayerClickSquareAction {
  type: 'PLAYER_CLICK_SQUARE',
  row: number,
  column: number,
}

export const playerClickSquare = (
  row: number,
  column: number,
): PlayerClickSquareAction => {
  return {
    type: 'PLAYER_CLICK_SQUARE',
    row,
    column,
  }
}