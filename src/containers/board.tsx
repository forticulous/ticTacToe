import { connect, Dispatch } from 'react-redux'
import { checkWinner, nextPlayerTurn, playerClickSquare } from '../actions'
import Board, { ActionProps, InertProps } from '../components/board'
import { GlobalState } from '../reducers'

const mapStateToProps = (
  state: GlobalState
): InertProps => {
  return {
    board: state.board,
    gameInProgress: state.gameStatus === 'in-progress',
  }
}

const mapDispatchToProps = (
  dispatch: Dispatch,
): ActionProps => {
  return {
    clickBoard: (row: number, col: number) => {
      dispatch(playerClickSquare(row, col))
      dispatch(nextPlayerTurn())
      dispatch(checkWinner())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
